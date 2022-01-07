import React, {useState,useEffect} from 'react'
import {Text,View,StyleSheet,ScrollView} from 'react-native'
import {Header,Gap,Button,Input} from '../../components'

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
  const [reportInfo,setReportInfo] = useState({})
  const {noNote,consumentName,vehicle,vehicleType,policeNumber,diagnosis,action,servicePrice,totalPrice,} = data

  const submit = ()=>{
    //merge all the datas from these states
    //submit all the datas from form
    const allDatas = {...data};
    for (let data in allDatas) {
      if (data.values(data) != '') {
        console.log(data.values(data));
      }
    }
    console.log(allDatas);
    setData({...data,fname:'',address:'',phone:'',idCard:''})

    return allDatas
  }

  return(
    <View style={container}>
      <Gap height={15}/>
      <Header name="Buat Nota" button={true} navigation={navigation}/>
      <Gap height={45}/>
      <ScrollView keyboardShouldPersistTaps='always' contentContainerStyle={style.formContainer}>
        <Gap height={47}/>
        <Input setLabel={true} label="No.Nota" placeholder="No.1" />
        <Gap height={30}/>
        <Input setLabel={true} label="Nama Konsumen" placeholder="John Doe" />
        <Gap height={30}/>
        <Input setLabel={true} label="Jenis Kendaraan" placeholder="Mobil" />
        <Gap height={30}/>
        <Input setLabel={true} label="Tipe Kendaraan" placeholder="Honda" />
        <Gap height={30}/>
        <Input setLabel={true} label="No.Polisi" placeholder="DN 2135 AE" />
        <Gap height={30}/>
        <Input setLabel={true} label="Diagnosa" placeholder="AC Mobil Bermasalah" />
        <Gap height={30}/>
        <Input setLabel={true} label="Penanganan" placeholder="Pengisian ulang freon" />
        <Gap height={30}/>
        <Input setLabel={true} label="Suku Cadang" placeholder="Kompresor" />
        <Gap height={30}/>
        <Input setLabel={true} label="Harga Jasa Layanan" placeholder="200.000" />
        <Gap height={30}/>
        <Input setLabel={true} label="Total Pembayaran" placeholder="350.000" />
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
