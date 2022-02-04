import React, {useState,useEffect,useContext} from 'react'
import {Text,View,StyleSheet,TouchableOpacity,ScrollView} from 'react-native'
import {Header,Gap,Button,Input,CheckBoxComponent} from '../../components'
import { AuthContext } from "../../context/authContext";
import DateTimePicker from '@react-native-community/datetimepicker';

const ReportPage = ({navigation})=>{
  const [data,setData] = useState({
    noNote:'',
    consumentName:'',
    vehicle:'',
    vehicleType:'',
    plat:'',
    diagnosis:'',
    action:'',
    spareParts:'',
    servicePrice:'',
    totalPrice:''
  })
  const [show,setShow] = useState(false)
  const {noNote,consumentName,vehicle,vehicleType,plat,diagnosis,action,spareParts,servicePrice,totalPrice} = data
  const {user:currentUser} = useContext(AuthContext)

  const submit = async()=>{
    //merge all the datas from these states
    //submit all the datas from form
    const allDatas = {...data};
    for (let data in allDatas) {
      // if (data.value != '') {
      console.log(`${data} : ${allDatas[data]}`);
      // }
    }
    try {
      const options = {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({userId:currentUser._id,sender:currentUser.username,date:'23 23 23',vehicle,vehicleType,plat,client:consumentName,phoneNumber:'123123123',diagnosis,action,spareParts,repairService:servicePrice,total:totalPrice})
      }
      await fetch(`https://charlie-invoice.herokuapp.com/api/invoice`,options)
    } catch (e) {
      console.log(e);
    }
    setData({...data,noNote:'',consumentName:'',vehicle:'',vehicleType:'',plat:'',diagnosis:'',action:'',spareParts:'',servicePrice:'',totalPrice:''})

    return allDatas
  }

  const onChange = (e, selectedDate)=>{
    const currentDate = selectedDate || date

    setShow(Platform=='ios')
    if (e.type === 'set') {
      setDate(currentDate)
      let tempDate = new Date(currentDate)
      let fDate = `${tempDate.getDate()} ${(tempDate.getMonth()+1)} ${tempDate.getFullYear()}`
      setTheDate(fDate)
    } else {
      setDate(new Date())
      setTheDate('')
    }
  }
  return(
    <View style={container}>
      <Gap height={15}/>
      <Header name="Nota Baru" button={true} navigation={navigation}/>
      <Gap height={45}/>
      <ScrollView keyboardShouldPersistTaps='always' contentContainerStyle={style.formContainer}>
        <Text style={{fontSize:17,color:"#777",position:'absolute',left:34}}>Masukkan rincian nota</Text>
        <Gap height={40}/>
        <Input setLabel={true} label="No.Nota" placeholder="No.1" value={noNote} onChangeText={(event)=>setData({...data,noNote:event})}/>
        <Gap height={30}/>
        <Input setLabel={true} label="Nama Konsumen" placeholder="John Doe" value={consumentName} onChangeText={(event)=>setData({...data,consumentName:event})}/>
        <Gap height={30}/>
        <View>
          <TouchableOpacity style={{width:327,height:48,borderRadius:50,position:'absolute',zIndex:2}} onPress={()=>setShow(true)}/>
          <Input placeholder="Tanggal Lahir" value={theDate}/>
        </View>
        {
          show && <DateTimePicker testID='dateTimePicker'
          value={date}
          mode='date'
          display='default'
          onChange={onChange}
          is24Hour={true}
          />
        }
        <Gap height={30}/>
        <Input setLabel={true} label="Jenis Kendaraan" placeholder="Mobil" value={vehicle} onChangeText={(event)=>setData({...data,vehicle:event})}/>
        <Gap height={30}/>
        <Input setLabel={true} label="Tipe Kendaraan" placeholder="Honda" value={vehicleType} onChangeText={(event)=>setData({...data,vehicleType:event})}/>
        <Gap height={30}/>
        <Input setLabel={true} label="No.Polisi" placeholder="DN 2135 AE" value={plat} onChangeText={(event)=>setData({...data,plat:event})}/>
        <Gap height={30}/>
        <Input setLabel={true} label="Diagnosa" placeholder="AC Mobil Bermasalah" value={diagnosis} onChangeText={(event)=>setData({...data,diagnosis:event})}/>
        <Gap height={30}/>
        <Input setLabel={true} label="Penanganan" placeholder="Pengisian ulang freon" value={action} onChangeText={(event)=>setData({...data,action:event})}/>
        <Gap height={30}/>
        <Input setLabel={true} label="Suku Cadang" placeholder="Kompresor" value={spareParts} onChangeText={(event)=>setData({...data,spareParts:event})}/>
        <Gap height={30}/>
        <View style={{flexDirection:'column',width:329}}>
          <Text style={{fontSize:20,color:'#000',marginBottom:7}}>Jenis Freon:</Text>
          <View style={centeredRow}>
            <View style={centeredRow}>
              <Text style={regularText}>Klea</Text>
              <CheckBoxComponent/>
            </View>
            <View style={centeredRow}>
              <Text style={regularText}>Bailian</Text>
              <CheckBoxComponent/>
            </View>
            <View style={centeredRow}>
              <Text style={regularText}>Dupoet</Text>
              <CheckBoxComponent/>
            </View>
          </View>
        </View>
        <Gap height={30}/>
        <Input setLabel={true} label="Harga Jasa Layanan" placeholder="200.000" value={servicePrice} onChangeText={(event)=>setData({...data,servicePrice:event})}/>
        <Gap height={30}/>
        <Input setLabel={true} label="Total Pembayaran" placeholder="350.000" value={totalPrice} onChangeText={(event)=>setData({...data,totalPrice:event})}/>
        <Gap height={10}/>
        <View style={{alignItems:'center'}}>
          <Button name="Simpan Nota" color='#fff' fam='Poppins-Bold' size={24} style={buttonSubmit} onPress={()=>submit()}/>
        </View>
      </ScrollView>
    </View>
  )
}

const style=StyleSheet.create({
  container:{ flex: 1,backgroundColor:'#fff'},
  text1:{fontSize:20,fontFamily:'Lato-Bold',color:'#565665'},
  formContainer:{paddingHorizontal:20,paddingBottom:150,alignItems:'center'},
  button:{
    marginTop:12,
    backgroundColor:'#000',
    height:37,
    width:88,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonSubmit:{
    marginTop:68,
    backgroundColor:'#598EF5',
    height:67,
    width:340,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center'
  },
  centeredRow:{flexDirection:'row',alignItems:'center',justifyContent:'space-between'},
  regularText:{fontSize:19,fontFamily:'Poppins-Regular',color:"#000"}
})

const {container,text1,mapContainer,formContainer,button,buttonSubmit,centeredRow,regularText} = style


export default ReportPage
