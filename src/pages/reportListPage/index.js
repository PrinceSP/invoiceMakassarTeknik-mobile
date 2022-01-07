import React,{useEffect,useState} from 'react'
import {Text,ScrollView,View,StyleSheet} from 'react-native'
import {Header,Gap,ReportListComponent} from '../../components'
import Axios from 'axios'

const ReportListPage=({navigation})=>{
  const [user,setUser] = useState({})

  // useEffect(()=>{
  //   const fetchUser = async ()=>{
  //     const res = await Axios.get(`https://charlie-invoice.herokuapp.com/api/user/61ce96700a1473f9ba0f6432`)
  //     setUser(res.data);
  //   }
  //   fetchUser()
  // },[])
  return(
    <View style={container}>
      <Gap height={15}/>
      <Header name="Daftar Nota" action="< kembali" navigation={navigation} page={true}/>
      <Gap height={45}/>
      <ScrollView contentContainerStyle={{paddingHorizontal:14,paddingVertical:20}}>
        <ReportListComponent/>
        <ReportListComponent/>
        <ReportListComponent/>
        <ReportListComponent/>
        <ReportListComponent/>
        <ReportListComponent/>
        <ReportListComponent/>
        <ReportListComponent/>
        <ReportListComponent/>
        <ReportListComponent/>
        <ReportListComponent/>
        <ReportListComponent/>
      </ScrollView>
    </View>

  )
}

const style=StyleSheet.create({
  container:{ flex: 1,backgroundColor:'#fff'},
})

const {container} = style

export default ReportListPage
