import React, {useState,useEffect,useRef} from 'react'
import {Text,View,StyleSheet,ScrollView} from 'react-native'
import {Header,Gap,Button,Input,CheckBoxComponent} from '../../components'

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
  const {noNote,consumentName,vehicle,vehicleType,plat,diagnosis,action,spareParts,servicePrice,totalPrice} = data

  const submit = ()=>{
    //merge all the datas from these states
    //submit all the datas from form
    const allDatas = {...data};
    for (let data in allDatas) {
      // if (data.value != '') {
      console.log(`${data} : ${allDatas[data]}`);
      // }
    }
    setData({...data,noNote:'',consumentName:'',vehicle:'',vehicleType:'',plat:'',diagnosis:'',action:'',spareParts:'',servicePrice:'',totalPrice:''})

    return allDatas
  }

  return(
    <View style={container}>
      <Gap height={15}/>
      <Header name="Nota Baru" button={true} navigation={navigation}/>
      <Gap height={45}/>
      <ScrollView keyboardShouldPersistTaps='always' contentContainerStyle={style.formContainer}>
        <Gap height={47}/>
        <Input setLabel={true} label="No.Nota" placeholder="No.1" value={noNote} onChangeText={(event)=>setData({...data,noNote:event})}/>
        <Gap height={30}/>
        <Input setLabel={true} label="Nama Konsumen" placeholder="John Doe" value={consumentName} onChangeText={(event)=>setData({...data,consumentName:event})}/>
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
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
              <Text style={{fontSize:19,fontFamily:'Poppins-Regular',color:"#000"}}>Klea</Text>
              <CheckBoxComponent/>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
              <Text style={{fontSize:19,fontFamily:'Poppins-Regular',color:"#000"}}>Bailian</Text>
              <CheckBoxComponent/>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
              <Text style={{fontSize:19,fontFamily:'Poppins-Regular',color:"#000"}}>Dupoet</Text>
              <CheckBoxComponent/>
            </View>
          </View>
        </View>
        <Gap height={30}/>
        <Input setLabel={true} label="Harga Jasa Layanan" placeholder="200.000" value={servicePrice} onChangeText={(event)=>setData({...data,servicePrice:event})}/>
        <Gap height={30}/>
        <Input setLabel={true} label="Total Pembayaran" placeholder="350.000" value={totalPrice} onChangeText={(event)=>setData({...data,totalPrice:event})}/>
        <Gap height={30}/>
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
})

const {container,text1,mapContainer,formContainer,button,buttonSubmit} = style


export default ReportPage
