import React, {useEffect,useState} from 'react'
import {View,Text,StyleSheet,Dimensions,ScrollView,Image,TouchableWithoutFeedback} from 'react-native'
import {localizeDateStr} from '../../../config'
import {AvatarProfile} from '../../../assets'
import ModalInvoice from '../modalInvoice'
import {Star} from '../../../assets'
import {StyledDot} from "../../atoms"

const HomePostComponent = ({item,index})=>{
  const [isUser,setUser] = useState([])
  const [visible,setVisible] = useState(false)
  const width = Dimensions.get('window').width

  useEffect(()=>{
    const fetchData= async()=>{
      try {
        const res = await fetch(`https://charlie-invoice.herokuapp.com/api/user?username=${item.sender}`)
        const result = await res.json()
        setUser(result)
      } catch (e) {
        setUser([])
      }
    }
    fetchData()
  },[])

  const actualDate = localizeDateStr(item.createdAt)

  return(
    <View key={item.userId} style={listCont}>
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
                <Text style={{fontSize:20,fontFamily:'Poppins-Medium',color:'#1638B2'}}>{item.client}</Text>
                <Text style={{fontSize:20,fontFamily:'Poppins-Medium',color:'#000'}}>{item.phoneNumber}</Text>
              </View>
              <View style={{width,position:'absolute',bottom:0,left:0,flexDirection:'row',justifyContent:'space-between'}}>
                <StyledDot/>
                <StyledDot/>
                <StyledDot/>
                <StyledDot/>
                <StyledDot/>
                <StyledDot/>
                <StyledDot/>
                <StyledDot/>
                <StyledDot/>
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
                <Text style={itemsMedium}>Kendaraan</Text>
                <Text style={textMedium}>{item.vehicle}</Text>
              </View>
              <View>
                <Text style={itemsMedium}>Tanggal Nota</Text>
                <Text style={textMedium}>{item.date}</Text>
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:30,marginTop:12,borderColor:"#AAA4A4",borderStyle:'dashed',borderBottomWidth:1}}>
              <View style={{borderColor:"#AAA4A4",borderStyle:'dashed',borderRightWidth:1,paddingRight:63}}>
                <Text style={itemsMedium}>Tipe Kendaraan</Text>
                <Text style={textMedium}>{item.vehicleType}</Text>
              </View>
              <View>
                <Text style={itemsMedium}>No.Polisi</Text>
                <Text style={textMedium}>{item.plat}</Text>
              </View>
            </View>
            <View style={{marginVertical:15, borderColor:"#AAA4A4",borderStyle:'dashed',borderBottomWidth:1,paddingBottom:24.5}}>
              <View style={{marginVertical:24}}>
                <Text style={itemsMedium}>Dianosa</Text>
                <Text style={textMedium}>{item.diagnosis}</Text>
              </View>
              <View>
                <Text style={itemsMedium}>Penanganan</Text>
                <Text style={textMedium}>{item.action}</Text>
              </View>
            </View>
            <View style={{marginVertical:10,paddingBottom:20,borderColor:"#AAA4A4",borderStyle:'dashed',borderBottomWidth:1}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignSelf: "stretch"}}>
                <Text style={itemsMedium}>Items</Text>
                <Text style={itemsMedium}>Harga</Text>
              </View>
              <View>
                <Text style={itemsMedium}>Suku Cadang</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={textMedium}>{item.spareParts}</Text>
                  <Text style={fontRegular}>Rp.300.000</Text>
                </View>
              </View>
            </View>
            <View style={{marginVertical:20,borderColor:"#AAA4A4",borderStyle:'dashed',borderBottomWidth:1,paddingBottom:25.5}}>
              <Text style={itemsMedium}>Jenis Freon yang digunakan:</Text>
              <View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={textMedium}>Klea    </Text>
                  <Text style={fontRegular}>Rp.{item.freonUse.klea}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={textMedium}>Bailian</Text>
                  <Text style={fontRegular}>Rp.{item.freonUse.bailian}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={textMedium}>Dupoet</Text>
                  <Text style={fontRegular}>Rp.{item.freonUse.dupoet}</Text>
                </View>
              </View>
            </View>
            <View style={{width:390,position:'absolute',bottom:210,left:0,flexDirection:'row',justifyContent:'space-between',zIndex:1}}>
              <View style={{height:40,width:20,borderTopRightRadius:35,borderBottomRightRadius:35,backgroundColor:'#E5F5FA'}}/>
              <View style={{height:40,width:20,borderTopLeftRadius:35,borderBottomLeftRadius:35,backgroundColor:'#E5F5FA'}}/>
            </View>
            <View style={{marginTop:25.5,paddingBottom:56}}>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={[{color:'#939394'},fontRegular]}>Jaya Layanan</Text>
                <Text style={itemsMedium}>Rp.{item.repairService}</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
                <Text style={{fontSize:28,fontFamily:'Poppins-Regular',color:'#6989F8'}}>Total</Text>
                <Text style={{fontSize:23,fontFamily:'Poppins-Bold',color:'#6989F8'}}>Rp.{item.total}</Text>
              </View>
            </View>
            <View style={{width:390,position:'absolute',bottom:0,left:0,flexDirection:'row',justifyContent:'space-around',zIndex:1}}>
              <StyledDot/>
              <StyledDot/>
              <StyledDot/>
              <StyledDot/>
              <StyledDot/>
              <StyledDot/>
              <StyledDot/>
            </View>
          </ScrollView>
        </ScrollView>
      </ModalInvoice>
      <TouchableWithoutFeedback onPress={()=>setVisible(true)}>
        <View style={{flexDirection:'row',alignItems:'flex-start'}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            {isUser.profilePicture?<Image style={image} source={{uri:`data:image/png;base64,${isUser.profilePicture}`}}/>:<View style={[{backgroundColor:'#ddd',alignItems:'center',justifyContent:'center'},image]}><AvatarProfile height={25} fill="#fff"/></View>}
          </View>
          <View style={{width:240,flexDirection:'column',justifyContent:'space-between'}}>
            <Text style={diagnosisText2}>{item.sender}</Text>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:7}}>
              <Text style={name}>Konsumer: </Text>
              <Text style={diagnosisText}>{item.client}</Text>
            </View>
            <Text style={date}>{actualDate}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const style = StyleSheet.create({
  listCont:{
    paddingHorizontal:15,paddingVertical:12,marginBottom:30,backgroundColor:'#fff',minHeight:70,height:120,
    borderRadius:10,borderWidth:.3,borderLeftWidth:10,borderColor:"#FFB800",
    elevation: 20,shadowColor: "#61B6FF",shadowOpacity: 1,shadowRadius:10
  },
  firstSection:{flexDirection:'row',alignItems:'center',justifyContent:'space-between'},
  secondSection:{marginTop:16},
  diagnosisText:{color:'#0B2273',fontSize:17,fontFamily:'Poppins-SemiBold'},
  diagnosisText2:{color:'#444',fontSize:20,fontFamily:'Poppins-Medium'},
  name:{color:'#939394',fontSize:14.4,fontFamily:'Poppins-Medium'},
  date:{color:'#999',fontSize:12.4,fontFamily:'Poppins-Regular'},
  image:{height:45,width:45,borderRadius:45,marginRight:20},
  total:{color:'#6989F8',fontSize:14.4,fontFamily:'Poppins-Bold'},
  fontRegular:{fontFamily:'Poppins-Regular',color:'#161E3C'},
  textMedium:{fontFamily:'Poppins-Medium',color:'#142D84'},
  itemsMedium:{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}
})

const {diagnosisText2,listCont,firstSection,secondSection,diagnosisText,name,date,image,total,fontRegular,textMedium,itemsMedium} = style

export default HomePostComponent
