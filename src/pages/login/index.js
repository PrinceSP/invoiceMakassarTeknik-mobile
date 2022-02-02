import React,{useRef,useContext} from "react"
import {View,Text,StyleSheet} from 'react-native'
import {Header,Gap,Button,Input} from '../../components'
import {SingleLogo} from '../../assets'
import {AuthContext} from '../../context/authContext'

const Login = ({navigation}) => {
  const username = useRef(null)
  const password = useRef(null)
  const {isFetching,dispatch} = useContext(AuthContext)
  const url = 'https://charlie-invoice.herokuapp.com/api/auth/login'

  const handleLogin = async()=>{

    const name=username.current
    const pass=password.current
    console.log(name,pass);

    dispatch({ type: "LOGIN_START" });
    try {
      const options = {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username:name,password:pass})
      }
      const res = await fetch(url, options).then(res=>res.json())
      console.log(res.datas);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.datas });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err });
    }

    navigation.navigate('Root',{screen:'Home'})
  }


  return (
    <View style={{flex:1,backgroundColor:"#fff"}}>
      <Gap height={25}/>
      <View style={style.container}>
        <SingleLogo height={120}/>
        <Gap height={20}/>
        <Text style={{fontFamily:'PlayfairDisplay-Bold',fontSize:38,color:'#000'}}>Selamat Datang</Text>
        <Text style={{fontFamily:'PlayfairDisplay-Regular',fontSize:17,color:'#8D8D8D'}}>Masuk dengan akun anda dibawah ini</Text>
        <Gap height={46}/>
        <Input placeholder="username" value={username} onChangeText={value=>username.current=value}/>
        <Gap height={30}/>
        <Input placeholder="Password" value={password} onChangeText={value=>password.current=value}/>
        <Gap height={26}/>
        <Button name='Lupa Sandi?' color='#777' fam='Poppins-Medium' style={{marginLeft:4}}/>
        <Gap height={29}/>
        <Button style={style.button} name={isFetching?"Loading...":"Masuk"} color="#FFF" fam="Poppins-Medium" size={24} onPress={()=>handleLogin()}/>
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
  },
  poppinsMed:{fontFamily:'Poppins-Medium',color:'#666'}
})

export default Login
