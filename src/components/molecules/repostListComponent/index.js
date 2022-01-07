import React,{useState} from 'react'
import {Text,ScrollView,View,StyleSheet,TouchableOpacity,Dimensions} from 'react-native'
import ModalInvoice from '../modalInvoice'

const ReportListComponent=()=>{
  const [visible,setVisible] = useState(false)
  const width = Dimensions.get('window').width
  // const [invoices,setInvoices] = useState([])
  //
  // useEffect(()=>{
  //   const fetchDatas = async ()=>{
  //     const res = await Axios.get(`https://charlie-invoice.herokuapp.com/api/invoice/postsList/61ce96700a1473f9ba0f6432`)
  //     setInvoices(res.data);
  //   }
  //   fetchDatas()
  // },[])
  return(
    <View style={listCont}>
      <ModalInvoice visible={visible}>
        <ScrollView contentContainerStyle={{width,alignItems:'center',flexDirection:'column'}}>
          <View style={{width,flexDirection:'row',justifyContent:'center',alignItems:'center',position:'absolute',top:35}}>
            <Text onPress={()=>setVisible(false)} style={{fontSize:16,fontFamily:'Poppins-Regular',position:'absolute',left:15,color:'#fff'}}> {`< Keluar`} </Text>
            <Text style={{fontSize:24,fontFamily:'Poppins-Regular',position:'absolute',color:'#fff'}}> Faktur </Text>
          </View>
          <ScrollView contentContainerStyle={{backgroundColor:'#fff',width:390,marginTop:100,borderTopLeftRadius:30,borderTopRightRadius:30,paddingVertical:35,paddingHorizontal:20}}>
            <View style={{justifyContent:'space-between',paddingBottom:65,marginBottom:27,borderBottomWidth:1,borderColor:'#ECECEC'}}>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontFamily:'Poppins-Regular',color:'#7B7B7B'}}>Faktur untuk</Text>
                <Text style={{fontFamily:'Poppins-Regular',color:'#7B7B7B'}}>No.HP</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:20,fontFamily:'Poppins-Medium',color:'#1638B2'}}>Simon Forde</Text>
                <Text style={{fontSize:20,fontFamily:'Poppins-Medium',color:'#000'}}>081213507373</Text>
              </View>
            </View>
            <View>
              <View style={{flexDirection:"row"}}>
                <View style={{height:22,width:22,borderRadius:22,marginRight:4,borderColor:"#FFC700",borderWidth:2,paddingVertical:1,paddingHorizontal:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{color:"#FFC700",fontFamily:'Lato-Bold'}}>$</Text>
                </View>
                <Text style={{fontSize:16,fontFamily:"Poppins-Medium",color:"#676E86"}}>Rincian Nota</Text>
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:10}}>
              <View>
                <Text style={{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}}>Kendaraan</Text>
                <Text style={{fontFamily:'Poppins-Medium',color:'#142D84'}}>Mobil</Text>
              </View>
              <View>
                <Text style={{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}}>Tanggal Nota</Text>
                <Text style={{fontFamily:'Poppins-Medium',color:'#142D84'}}>2 Januari 2022</Text>
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:10}}>
              <View>
                <Text style={{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}}>Tipe Kendaraan</Text>
                <Text style={{fontFamily:'Poppins-Medium',color:'#142D84'}}>Honda</Text>
              </View>
              <View>
                <Text style={{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}}>No.Polisi</Text>
                <Text style={{fontFamily:'Poppins-Medium',color:'#142D84'}}>DN 2135 BC</Text>
              </View>
            </View>
            <View style={{paddingVertical:10}}>
              <View>
                <Text style={{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}}>Dianosa</Text>
                <Text style={{fontFamily:'Poppins-Medium',color:'#142D84'}}>AC Mobil bermasalah</Text>
              </View>
              <View>
                <Text style={{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}}>Penanganan</Text>
                <Text style={{fontFamily:'Poppins-Medium',color:'#142D84'}}>Pengisian ulang Freon</Text>
              </View>
            </View>
            <View style={{paddingVertical:10}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignSelf: "stretch"}}>
                <Text style={{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}}>Items</Text>
                <Text style={{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}}>Harga</Text>
              </View>
              <View>
                <Text style={{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}}>Suku Cadang</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={{fontFamily:'Poppins-Medium',color:'#142D84'}}>Kompressor</Text>
                  <Text style={{fontFamily:'Poppins-Regular',color:'#161E3C'}}>Rp.300.000</Text>
                </View>
              </View>
            </View>
            <View style={{paddingVertical:10}}>
              <Text style={{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}}>Jenis Freon yang digunakan:</Text>
              <View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={{fontFamily:'Poppins-Medium',color:'#142D84'}}>Klea</Text>
                  <Text style={{fontFamily:'Poppins-Regular',color:'#161E3C'}}>Rp.350.000</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={{fontFamily:'Poppins-Medium',color:'#142D84'}}>Bailian</Text>
                  <Text style={{fontFamily:'Poppins-Regular',color:'#161E3C'}}>Rp.300.000</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={{fontFamily:'Poppins-Medium',color:'#142D84'}}>Dupoet</Text>
                  <Text style={{fontFamily:'Poppins-Regular',color:'#161E3C'}}>Rp.480.000</Text>
                </View>
              </View>
            </View>
            <View>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{color:'#939394',fontFamily:'Poppins-Regular',color:'#161E3C'}}>Jaya Layanan</Text>
                <Text>Rp.780.000</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:4}}>
                <Text style={{fontSize:20,fontFamily:'Poppins-Regular'}}>Total</Text>
                <Text style={{fontSize:20,fontFamily:'Poppins-Bold',color:'#6989F8'}}>Rp.2.210.000</Text>
              </View>
            </View>
          </ScrollView>
        </ScrollView>
      </ModalInvoice>
      <View style={firstSection}>
        <Text style={diagnosis}>AC Mobil Bermasalah</Text>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={total}>Rp.2.210.000</Text>
          <TouchableOpacity onPress={()=>setVisible(true)}>
            <Text style={{fontSize:30,fontFamily:'Poppins-Regular',color:'#8C8888'}}> > </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{borderWidth:1,borderStyle:'dashed',borderColor:'#aaa4a4',height:1}}/>
      <View style={[firstSection,secondSection]}>
        <Text style={name}>Nama</Text>
        <View>
          <Text style={name}>Tanggal Nota</Text>
        </View>
      </View>
      <View style={[firstSection,thirdSection]}>
        <Text style={diagnosis}>Simon Forde</Text>
        <View>
          <Text style={date}>2 Januari 2022</Text>
        </View>
      </View>
    </View>
  )
}

const style=StyleSheet.create({
  listCont:{
    height:158,width:350,paddingHorizontal:10,paddingVertical:20,marginBottom:12,marginTop:12,
    marginLeft:25,backgroundColor:'#fff',borderTopLeftRadius:20,
    elevation: 15,shadowColor: "#82B6DB",shadowOpacity: 1,shadowRadius:20
  },
  firstSection:{flexDirection:'row',alignItems:'center',justifyContent:'space-between'},
  secondSection:{paddingRight:15,marginTop:16},
  thirdSection:{paddingRight:15},
  diagnosis:{color:'#0B2273',fontSize:14.4,fontFamily:'Poppins-Medium'},
  name:{color:'#939394',fontSize:14.4,fontFamily:'Poppins-Medium'},
  date:{color:'#142D84',fontSize:14.4,fontFamily:'Poppins-Medium'},
  total:{color:'#6989F8',fontSize:14.4,fontFamily:'Poppins-Bold'}
})

const {listCont,diagnosis,total,firstSection,name,secondSection,thirdSection,date} = style

export default ReportListComponent
