import React,{useEffect,useCallback,useState,useContext} from 'react'
import {Text,View,StyleSheet,ScrollView,TouchableOpacity,Image,RefreshControl,Platform} from 'react-native'
import {Header,Gap} from '../../components'
import {Atomic} from '../../assets'
import {getCurrentDate} from '../../config'
import { AuthContext } from "../../context/authContext";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation})=>{
  const [refreshing,setRefreshing] = useState(false)
  const {user} = useContext(AuthContext)
  const [datas,setDatas] = useState([])

  const wait=(timeout)=>{
    return new Promise(resolve=>setTimeout(resolve,timeout))
  }
  const onRefresh = useCallback((value) => {
    setRefreshing(true);
    wait(1500).then(() => setRefreshing(false));
  }, []);
  useEffect(()=>{
    const fetchDatas = async ()=>{
      const allInvoices = await fetch(`https://charlie-invoice.herokuapp.com/api/invoice`).then(res=>res.json())
      setDatas(allInvoices)
    }
    fetchDatas()
  },[])
  const name = JSON.stringify(user.fullname)
  const username = typeof name==="string" ? name.split(' ')[0] : name
  return(
    <View style={container}>
      <Gap height={15}/>
      <Header name="Beranda" button={true} navigation={navigation}/>
      <Gap height={25}/>
      <ScrollView contentContainerStyle={scrollViewCont} refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={refreshing}/>
        }>
        <View>
          <Text style={headingTitle}>Hi, {typeof username==="string"?username.charAt(1).toUpperCase()+username.replace(/['"]+/g, '').slice(1):name}!</Text>
        </View>
        <Text style={{fontSize:20,fontFamily:'Poppins-Light',color:'#999'}}>{getCurrentDate()}</Text>
        <Gap height={28}/>
        {
          datas.map(item=>(
            <View key={item._id} style={listCont}>
              <View style={firstSection}>
                <Text style={{fontSize:20,color:"#777"}}>Nota dari:</Text>
                <Text style={diagnosisText}>{item.sender}</Text>
              </View>
              <View style={[firstSection,secondSection]}>
                <Text style={name}>Nama Konsumen</Text>
              </View>
              <View style={firstSection}>
                <Text style={diagnosisText}>{item.client}</Text>
                <View>
                  <Text style={date}>{item.createdAt.split('T').pop().split('.').shift()}</Text>
                </View>
              </View>
              <View style={firstSection}>
                <Text style={diagnosisText}>{item.diagnosis}</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Text style={diagnosisText}>Rp.2.210.000</Text>
                  <TouchableOpacity>
                    <Text style={{fontSize:30,fontFamily:'Poppins-Regular',color:'#8C8888'}}> > </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))
        }
      </ScrollView>
    </View>
  )

}

const style=StyleSheet.create({
  container:{ flex: 1,backgroundColor:'#fff'},
  scrollViewCont:{paddingHorizontal:20,paddingBottom:125},
  headingTitle:{fontSize:35,fontFamily:'PlayfairDisplay-Regular',color:'#000'},
  listCont:{
    paddingHorizontal:10,paddingVertical:12,marginBottom:30,backgroundColor:'#fff',borderRadius:15,
    elevation: 20,shadowColor: "#61B6FF",shadowOpacity: 1,shadowRadius:10,borderWidth:1,borderColor:"#DDDDDB"
  },
  firstSection:{flexDirection:'row',alignItems:'center',justifyContent:'space-between'},
  secondSection:{marginTop:16},
  diagnosisText:{color:'#0B2273',fontSize:14.4,fontFamily:'Poppins-Medium'},
  name:{color:'#939394',fontSize:14.4,fontFamily:'Poppins-Medium'},
  date:{color:'#142D84',fontSize:14.4,fontFamily:'Poppins-Medium'},
})

const {container,scrollViewCont,headingTitle,listCont,firstSection,secondSection,thirdSection,diagnosisText,name,date} = style

export default Home
