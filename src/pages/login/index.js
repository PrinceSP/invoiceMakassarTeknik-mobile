import React,{useContext,useState} from "react"
import {View,Text,StyleSheet,Image} from 'react-native'
import {Header,Gap,Button,Input} from '../../components'
import {SingleSmall,EyeTrue,EyeFalse} from '../../assets'
import {AuthContext} from '../../context/authContext'

const Login = ({navigation}) => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [hide,setHide] = useState(true)
  const {isFetching,dispatch} = useContext(AuthContext)
  const url = 'https://charlie-invoice.herokuapp.com/api/auth/login'

  const handleLogin = async()=>{
    console.log(username,password);

    dispatch({ type: "LOGIN_START" });
    try {
      const options = {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username,password})
      }
      const res = await fetch(url, options).then(res=>res.json())
      console.log(res);
      if (res.message === 'success login') {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.datas });
        navigation.navigate('Root',{screen:'Home'})
      } else {
        return isFetching=false;
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
    setPassword('')
    setUsername('')
  }


  return (
    <View style={{flex:1,backgroundColor:"#fff"}}>
      <Gap height={60}/>
      <View style={style.container}>
        <Image source={SingleSmall}/>
        <Gap height={36}/>
        <Text style={{fontFamily:'PlayfairDisplay-Bold',fontSize:38,color:'#000'}}>Selamat Datang</Text>
        <Text style={{fontFamily:'PlayfairDisplay-Regular',fontSize:17,color:'#8D8D8D'}}>Masuk dengan akun anda dibawah ini</Text>
        <Gap height={46}/>
        <Input placeholder="username" value={username} onChangeText={value=>setUsername(value)}/>
        <Gap height={30}/>
        <View>
          <Input paddingRight={44} placeholder="Password" value={password} secureTextEntry={hide} onChangeText={value=>setPassword(value)}/>
          {hide ? <EyeFalse height={20} onPress={()=>setHide(false)} style={{position:'absolute',right:0,top:15}}/> : <EyeTrue height={20} onPress={()=>setHide(true)} style={{position:'absolute',right:0,top:15}}/>}
        </View>
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
