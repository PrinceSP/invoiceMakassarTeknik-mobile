import React,{useEffect,useCallback,useState,useContext} from 'react'
import {Text,View,StyleSheet,ScrollView,Image,RefreshControl,Platform} from 'react-native'
import {Header,Gap} from '../../components'
import {Atomic} from '../../assets'
import {getCurrentDate} from '../../config'
import { AuthContext } from "../../context/authContext";

const Home = ({navigation})=>{
  const [refreshing,setRefreshing] = useState(false)
  const {user} = useContext(AuthContext)
  const [datas,setDatas] = useState([])

  const wait=(timeout)=>{
    return new Promise(resolve=>setTimeout(resolve,timeout))
  }
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1500).then(() => setRefreshing(false));
  }, []);
  useEffect(()=>{
    const fetchDatas = async ()=>{
      const res = await fetch(`https://charlie-invoice.herokuapp.com/api/user?username=${user.username}`).then(res=>res.json())
      const allInvoices = await fetch(`https://charlie-invoice.herokuapp.com/api/invoice`).then(res=>res.json())
      setDatas(allInvoices)
    }
    fetchDatas()
  },[])
  console.log(datas);
  const name = JSON.stringify(user.fullname)
  const username = typeof name==="string" ? name.split(' ')[0] : name
  return(
    <View style={container}>
      <Gap height={15}/>
      <Header name="Beranda" button={true} navigation={navigation}/>
      <Gap height={15}/>
      <ScrollView contentContainerStyle={scrollViewCont} refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={refreshing}/>
        }>
        <View>
          <Text style={headingTitle}>Hi, {typeof username==="string"?username.charAt(1).toUpperCase()+username.replace(/['"]+/g, '').slice(1):name}!</Text>
        </View>
        <Text style={{fontSize:20,fontFamily:'Poppins-Light',color:'#999'}}>{getCurrentDate()}</Text>
        {
          datas.map(item=>(
            <View key={item._id}>
              <Text style={{fontSize:20,color:"#000"}}>{item.createdAt.split('T').shift()}</Text>
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
})

const {container,scrollViewCont,headingTitle} = style

export default Home
