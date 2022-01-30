import React,{useEffect,useState,useContext} from 'react'
import {Text,ScrollView,View,StyleSheet} from 'react-native'
import {Header,Gap,ReportListComponent} from '../../components'
import { AuthContext } from "../../context/authContext";

const ReportListPage=({navigation})=>{
  const [user,setUser] = useState([])
  const {user:currentUser} = useContext(AuthContext)
  useEffect(()=>{
    const fetchUser = async ()=>{
      try {
        const options = {
          method: 'get',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }
        }
        const res = await fetch(`https://charlie-invoice.herokuapp.com/api/invoice/postsList/${currentUser._id}`,options)
        .then((res) => res.json())
        setUser(res)
      } catch (e) {
        console.log(e);
      }

    }
    fetchUser()
  },[])
  console.log(user);
  return(
    <View style={container}>
      <Gap height={15}/>
      <Header name="Daftar Nota" action="< kembali" navigation={navigation} page={true}/>
      <Gap height={45}/>
      <ScrollView contentContainerStyle={{paddingHorizontal:14,paddingVertical:20}}>
        {
          user.map(item=>(
            <ReportListComponent username={item.client} key={item._id}/>
          ))
        }
      </ScrollView>
    </View>

  )
}

const style=StyleSheet.create({
  container:{ flex: 1,backgroundColor:'#fff'},
})

const {container} = style

export default ReportListPage
