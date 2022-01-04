import React,{useRef,useState,useContext} from "react"
import {View,Text,StyleSheet} from 'react-native'
import {Header,Gap,Button,Input} from '../../components'
import {SingleLogo} from '../../assets'
// import {loginCall} from '../../config'
import {AuthContext} from '../../context/authContext'
import axios from 'axios'

const Login = ({navigation}) => {
  // const username = useRef()
  const [username,setUsername] = useState('')
  // const password = useRef()
  const [password,setPassword] = useState('')
  const {user,isFetching,error,dispatch} = useContext(AuthContext)
  // const url = 'https://charlie-invoice.herokuapp.com/api'
  //
  // const handleLogin =async()=>{
  //   // loginCall(
  //   //   {username,password},
  //   //   dispatch
  //   // );
  //   const res = await axios.post(`${url}/auth/login/`,{username,password})
  //   console.log(res.data);
  // }

  return (
    <View style={{flex:1,backgroundColor:"#fff"}}>
      <Gap height={15}/>
      <Header action="" name="Masuk"/>
      <Gap height={20}/>
      <View style={style.container}>
        <SingleLogo height={120}/>
        <Gap height={20}/>
        <Text style={{fontFamily:'PlayfairDisplay-Bold',fontSize:38,color:'#000'}}>Selamat Datang</Text>
        <Text style={{fontFamily:'PlayfairDisplay-Regular',fontSize:17,color:'#8D8D8D'}}>Masuk dengan akun anda dibawah ini</Text>
        <Gap height={46}/>
        <Input placeholder="username" value={username} onChangeText={e=>setUsername(e)}/>
        <Gap height={30}/>
        <Input placeholder="Password" value={password} onChangeText={e=>setPassword(e)}/>
        <Gap height={26}/>
        <Button name='Lupa Sandi?' color='#777' fam='Poppins-Medium' style={{marginLeft:4}}/>
        <Gap height={29}/>
        <Button style={style.button} name="Masuk" color="#FFF" fam="Poppins-Medium" size={24} onPress={()=>navigation.navigate('Root',{screen:'Home'})}/>
        <Gap height={25}/>
        <View style={{flexDirection:'row'}}>
          <Text style={style.poppinsMed}>Belum punya akun?</Text>
          <Button name='Daftar Sekarang' color='#FF1D1D' fam='Poppins-Bold' style={{marginLeft:4}} onPress={()=>navigation.navigate('Register')}/>
        </View>
      </View>
    </View>

  )
}

const style = StyleSheet.create({
  container:{
    alignItems:'center',
    backgroundColor:'#fff',
    flex:1
  },
  button:{
    marginBottom:15,
    backgroundColor:'#6291ED',
    height:66,
    width:329,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center'
  }
})

export default Login
