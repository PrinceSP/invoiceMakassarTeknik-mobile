import React,{useState} from 'react'
import {Text,ScrollView,View,StyleSheet,TouchableOpacity,Dimensions} from 'react-native'
import ModalInvoice from '../modalInvoice'
import {Star} from '../../../assets'

const ReportListComponent=()=>{
  const [visible,setVisible] = useState(false)
  const width = Dimensions.get('window').width
  return(
    <View style={listCont}>
      <ModalInvoice visible={visible}>
        <ScrollView contentContainerStyle={{width,alignItems:'center',flexDirection:'column'}}>
          <View style={{width,flexDirection:'row',justifyContent:'center',alignItems:'center',position:'absolute',top:35,zIndex:1}}>
            <Text onPress={()=>setVisible(false)} style={{fontSize:16,fontFamily:'Poppins-Regular',position:'absolute',left:15,color:'#fff'}}> {`< Keluar`} </Text>
            <Text style={{fontSize:24,fontFamily:'Poppins-Regular',position:'absolute',color:'#fff'}}> Faktur </Text>
          </View>
          <Star style={{position:'absolute',top:117,left:25}}/>
          <Star height={32} style={{position:'absolute',top:100,left:53}}/>
          <Star height={14} style={{position:'absolute',top:110,right:82,opacity:0.75}}/>
          <Star style={{position:'absolute',top:70,right:42,opacity:0.75}}/>
          <Star height={32} style={{position:'absolute',top:110,right:19,opacity:0.75}}/>
          <ScrollView contentContainerStyle={{backgroundColor:'#fff',width:390,marginTop:150,marginBottom:40,borderTopLeftRadius:30,borderTopRightRadius:30,borderBottomLeftRadius:20,borderBottomRightRadius:20,paddingVertical:35,paddingHorizontal:20}}>
            <View style={{justifyContent:'space-between',paddingBottom:65,marginBottom:27,borderBottomWidth:1,borderColor:'#ECECEC'}}>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontFamily:'Poppins-Regular',color:'#7B7B7B'}}>Faktur untuk</Text>
                <Text style={{fontFamily:'Poppins-Regular',color:'#7B7B7B'}}>No.HP</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:20,fontFamily:'Poppins-Medium',color:'#1638B2'}}>Simon Forde</Text>
                <Text style={{fontSize:20,fontFamily:'Poppins-Medium',color:'#000'}}>081213507373</Text>
              </View>
              <View style={{width,position:'absolute',bottom:0,left:0,flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{height:15,width:25,borderTopLeftRadius:25,borderTopRightRadius:25,backgroundColor:'#E5F5FA'}}/>
                <View style={{height:15,width:25,borderTopLeftRadius:25,borderTopRightRadius:25,backgroundColor:'#E5F5FA'}}/>
                <View style={{height:15,width:25,borderTopLeftRadius:25,borderTopRightRadius:25,backgroundColor:'#E5F5FA'}}/>
                <View style={{height:15,width:25,borderTopLeftRadius:25,borderTopRightRadius:25,backgroundColor:'#E5F5FA'}}/>
                <View style={{height:15,width:25,borderTopLeftRadius:25,borderTopRightRadius:25,backgroundColor:'#E5F5FA'}}/>
                <View style={{height:15,width:25,borderTopLeftRadius:25,borderTopRightRadius:25,backgroundColor:'#E5F5FA'}}/>
                <View style={{height:15,width:25,borderTopLeftRadius:25,borderTopRightRadius:25,backgroundColor:'#E5F5FA'}}/>
                <View style={{height:15,width:25,borderTopLeftRadius:25,borderTopRightRadius:25,backgroundColor:'#E5F5FA'}}/>
                <View style={{height:15,width:25,borderTopLeftRadius:25,borderTopRightRadius:25,backgroundColor:'#E5F5FA'}}/>
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
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:28,borderColor:"#AAA4A4",borderStyle:'dashed',borderBottomWidth:1}}>
              <View style={{borderColor:"#AAA4A4",borderStyle:'dashed',borderRightWidth:1,paddingRight:95}}>
                <Text style={{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}}>Kendaraan</Text>
                <Text style={{fontFamily:'Poppins-Medium',color:'#142D84'}}>Mobil</Text>
              </View>
              <View>
                <Text style={{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}}>Tanggal Nota</Text>
                <Text style={{fontFamily:'Poppins-Medium',color:'#142D84'}}>2 Januari 2022</Text>
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:30,marginTop:12,borderColor:"#AAA4A4",borderStyle:'dashed',borderBottomWidth:1}}>
              <View style={{borderColor:"#AAA4A4",borderStyle:'dashed',borderRightWidth:1,paddingRight:63}}>
                <Text style={{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}}>Tipe Kendaraan</Text>
                <Text style={{fontFamily:'Poppins-Medium',color:'#142D84'}}>Honda</Text>
              </View>
              <View>
                <Text style={{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}}>No.Polisi</Text>
                <Text style={{fontFamily:'Poppins-Medium',color:'#142D84'}}>DN 2135 BC</Text>
              </View>
            </View>
            <View style={{marginVertical:15, borderColor:"#AAA4A4",borderStyle:'dashed',borderBottomWidth:1,paddingBottom:24.5}}>
              <View style={{marginVertical:24}}>
                <Text style={{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}}>Dianosa</Text>
                <Text style={{fontFamily:'Poppins-Medium',color:'#142D84'}}>AC Mobil bermasalah</Text>
              </View>
              <View>
                <Text style={{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}}>Penanganan</Text>
                <Text style={{fontFamily:'Poppins-Medium',color:'#142D84'}}>Pengisian ulang Freon</Text>
              </View>
            </View>
            <View style={{marginVertical:10,paddingBottom:20,borderColor:"#AAA4A4",borderStyle:'dashed',borderBottomWidth:1}}>
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
            <View style={{marginVertical:20,borderColor:"#AAA4A4",borderStyle:'dashed',borderBottomWidth:1,paddingBottom:25.5}}>
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
            <View style={{width:390,position:'absolute',bottom:210,left:0,flexDirection:'row',justifyContent:'space-between',zIndex:1}}>
              <View style={{height:40,width:20,borderTopRightRadius:35,borderBottomRightRadius:35,backgroundColor:'#E5F5FA'}}/>
              <View style={{height:40,width:20,borderTopLeftRadius:35,borderBottomLeftRadius:35,backgroundColor:'#E5F5FA'}}/>
            </View>
            <View style={{marginTop:25.5,paddingBottom:56}}>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{color:'#939394',fontFamily:'Poppins-Regular',color:'#161E3C'}}>Jaya Layanan</Text>
                <Text>Rp.780.000</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
                <Text style={{fontSize:28,fontFamily:'Poppins-Regular'}}>Total</Text>
                <Text style={{fontSize:23,fontFamily:'Poppins-Bold',color:'#6989F8'}}>Rp.2.210.000</Text>
              </View>
            </View>
            <View style={{width:390,position:'absolute',bottom:0,left:0,flexDirection:'row',justifyContent:'space-around',zIndex:1}}>
              <View style={{height:15,width:25,borderTopLeftRadius:25,borderTopRightRadius:25,backgroundColor:'rgba(114, 213, 255, 1)'}}/>
              <View style={{height:15,width:25,borderTopLeftRadius:25,borderTopRightRadius:25,backgroundColor:'rgba(114, 213, 255, 1)'}}/>
              <View style={{height:15,width:25,borderTopLeftRadius:25,borderTopRightRadius:25,backgroundColor:'rgba(114, 213, 255, 1)'}}/>
              <View style={{height:15,width:25,borderTopLeftRadius:25,borderTopRightRadius:25,backgroundColor:'rgba(114, 213, 255, 1)'}}/>
              <View style={{height:15,width:25,borderTopLeftRadius:25,borderTopRightRadius:25,backgroundColor:'rgba(114, 213, 255, 1)'}}/>
              <View style={{height:15,width:25,borderTopLeftRadius:25,borderTopRightRadius:25,backgroundColor:'rgba(114, 213, 255, 1)'}}/>
              <View style={{height:15,width:25,borderTopLeftRadius:25,borderTopRightRadius:25,backgroundColor:'rgba(114, 213, 255, 1)'}}/>
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
