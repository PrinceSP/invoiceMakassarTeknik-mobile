import React,{useEffect,useState,useContext} from 'react'
import {Text,View,StyleSheet,ScrollView,Image,Platform} from 'react-native'
import {Header,Gap} from '../../components'
import {Atomic} from '../../assets'
import {getCurrentDate} from '../../config'
import { AuthContext } from "../../context/authContext";

const Home = ({navigation})=>{
  const {user} = useContext(AuthContext)
  const [users,setUsers] = useState({})

  useEffect(()=>{
    const fetchDatas = async ()=>{
      const res = await fetch(`https://charlie-invoice.herokuapp.com/api/user?username=${user.username}`).then(res=>res.json())
      setUsers(res)
    }
    fetchDatas()
  },[])

  const name = JSON.stringify(users.fullname)
  const username = name.split(' ')
  return(
    <View style={container}>
      <Gap height={15}/>
      <Header name="Beranda" button={true} navigation={navigation}/>
      <Gap height={15}/>
      <ScrollView contentContainerStyle={scrollViewCont}>
        <View style={{flexDirection:'row'}}>
          <Text style={headingTitle}>Hi,</Text>
          <Text style={headingTitle}> {username[0].charAt(1).toUpperCase()+username[0].replace(/['"]+/g, '').slice(1)}!</Text>
        </View>
        <Text style={{fontSize:20,fontFamily:'Poppins-Light',color:'#999'}}>{getCurrentDate()}</Text>
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
