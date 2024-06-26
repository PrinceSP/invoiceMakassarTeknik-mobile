import React, {useState,useContext} from 'react'
import {Text,View,StyleSheet,TouchableOpacity,ScrollView,Platform} from 'react-native'
import {Header,Gap,Button,Input} from '../../components'
import { AuthContext } from "../../context/authContext";
import DateTimePicker from '@react-native-community/datetimepicker';
import Toast from 'react-native-toast-message';
import {toastConfig} from '../../components/molecules/toast'

const ReportPage = ({navigation})=>{
  const [date,setDate] = useState(new Date())
  const [show,setShow] = useState(false)
  const [datas,setData] = useState({
    consumentName:'',
    vehicle:'',
    vehicleType:'',
    dates:'',
    plat:'',
    diagnosis:'',
    action:'',
    spareParts:'',
    sparePartsPrice:'',
    servicePrice:'',
    totalPrice:'',
    klea:'',
    bailian:'',
    dupoet:''
  })
  const {user:currentUser} = useContext(AuthContext)
  const {noNote,consumentName,sparePartsPrice,vehicle,dates,vehicleType,klea,bailian,dupoet,plat,diagnosis,action,spareParts,servicePrice,totalPrice} = datas

  const submit = async()=>{
    //merge all the datas from these states
    //submit all the datas from form
    // const allDatas = {...datas};
    // for (let datas in allDatas) {
    //   console.log(`${datas} : ${allDatas[datas]}`);
    // }
    try {
      const options = {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({userId:currentUser._id,sender:currentUser.username,date:dates,vehicle,vehicleType,plat,client:consumentName,phoneNumber:'-',diagnosis,action,klea,bailian,dupoet,spareParts,sparePartsPrice,repairService:servicePrice,total:totalPrice})
      }
      await fetch(`https://charlie-invoice.herokuapp.com/api/invoice`,options)
      Toast.show({
        type:'success',
        text1:'Selamat!',
        text2:'Nota berhasil dibuat'
      })
    } catch (e) {
      console.log(e);
      Toast.show({
        type:'error',
        text1:'Terjadi Kesalahan',
        text2:'Silahkan lihat kembali form anda.'
      })
    }
    setData({...datas,consumentName:'',dates:'',vehicle:'',vehicleType:'',plat:'',diagnosis:'',action:'',spareParts:'',sparePartsPrice:'',servicePrice:'',totalPrice:'',klea:'',bailian:'',dupoet:''})

    return allDatas
  }
  const onChange = (e, selectedDate)=>{
    const currentDate = selectedDate || date

    setShow(Platform=='ios')
    if (e.type === 'set') {
      setDate(currentDate)
      let tempDate = new Date(currentDate)
      let fDate = `${tempDate.getDate()}-${(tempDate.getMonth()+1)}-${tempDate.getFullYear()}`
      setData({...datas,dates:fDate})
    } else {
      setDate(new Date())
      setData({...datas,dates:''})
    }
  }

  return(
    <View style={container}>
      <Gap height={7}/>
      <Header name="Nota Baru" button={true} navigation={navigation}/>
      <ScrollView keyboardShouldPersistTaps='always' contentContainerStyle={style.formContainer}>
        <Text style={{fontSize:17,color:"#777",position:'absolute',left:34}}>Masukkan rincian nota</Text>
        <Gap height={40}/>
        <Input setLabel={true} label="Nama Konsumen" placeholder="John Doe" defaultValue={consumentName} onChangeText={(event)=>setData({...datas,consumentName:event})}/>
        <Gap height={30}/>
          <View>
            <TouchableOpacity style={{width:327,height:48,borderRadius:10,position:'absolute',bottom:0,zIndex:2}} onPress={()=>setShow(true)}/>
            <Input setLabel={true} label="Tanggal Nota" placeholder="28-08-2021" defaultValue={dates}/>
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
        <Input setLabel={true} label="Jenis Kendaraan" placeholder="Mobil" defaultValue={vehicle} onChangeText={(event)=>setData({...datas,vehicle:event})}/>
        <Gap height={30}/>
        <Input setLabel={true} label="Tipe Kendaraan" placeholder="Honda" defaultValue={vehicleType} onChangeText={(event)=>setData({...datas,vehicleType:event})}/>
        <Gap height={30}/>
        <Input setLabel={true} label="No.Polisi" placeholder="DN 2135 AE" defaultValue={plat} onChangeText={(event)=>setData({...datas,plat:event})}/>
        <Gap height={30}/>
        <Input setLabel={true} label="Diagnosa" placeholder="AC Mobil Bermasalah" defaultValue={diagnosis} onChangeText={(event)=>setData({...datas,diagnosis:event})}/>
        <Gap height={30}/>
        <Input setLabel={true} label="Penanganan" placeholder="Pengisian ulang freon" defaultValue={action} onChangeText={(event)=>setData({...datas,action:event})}/>
        <Gap height={30}/>
        <Input setLabel={true} label="Suku Cadang (opsional)" placeholder="Kompresor" defaultValue={spareParts} onChangeText={(event)=>setData({...datas,spareParts:event})}/>
        <Gap height={30}/>
        <Input setLabel={true} label="Harga Suku Cadang (opsional)" placeholder="100.000" defaultValue={sparePartsPrice} onChangeText={(event)=>setData({...datas,sparePartsPrice:event})}/>
        {/**<Gap height={30}/>
        <View style={{flexDirection:'column',width:329}}>
          <Text style={{fontSize:20,color:'#000',marginBottom:7}}>Jenis Freon:</Text>
          <View style={centeredRow}>
            <View style={centeredRow}>
              <Text style={regularText}>Klea</Text>
              <CheckBoxComponent onPress={()=>setData({...datas,klea:'300.000'})} onPressOut={()=>setData({...datas,klea:''})}/>
            </View>
            <View style={centeredRow}>
              <Text style={regularText}>Bailian</Text>
              <CheckBoxComponent onPress={()=>setData({...datas,bailian:'350.000'})} onPressOut={()=>setData({...datas,klea:''})}/>
            </View>
            <View style={centeredRow}>
              <Text style={regularText}>Dupoet</Text>
              <CheckBoxComponent onPress={()=>setData({...datas,dupoet:'480.000'})} onPressOut={()=>setData({...datas,klea:''})}/>
            </View>
          </View>
        </View>**/}
        <Gap height={30}/>
        <Input setLabel={true} label="Harga Jasa Layanan" placeholder="200.000" defaultValue={servicePrice} onChangeText={(event)=>setData({...datas,servicePrice:event})}/>
        <Gap height={30}/>
        <Input setLabel={true} label="Total Pembayaran" placeholder="350.000" defaultValue={totalPrice} onChangeText={(event)=>setData({...datas,totalPrice:event})}/>
        <Gap height={10}/>
        <View style={{alignItems:'center'}}>
          <Button name="Simpan Nota" color='#fff' fam='Poppins-Bold' size={24} style={buttonSubmit} onPress={()=>submit()}/>
        </View>
        <Gap height={20}/>
      </ScrollView>
    </View>
  )
}

const style=StyleSheet.create({
  container:{ flex: 1,backgroundColor:'#fff'},
  text1:{fontSize:20,fontFamily:'Lato-Bold',color:'#565665'},
  formContainer:{paddingHorizontal:20,paddingBottom:150,alignItems:'center',marginTop:25},
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
