import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {Header,Gap,Button,Input} from './components'
import {SingleLogo} from './assets'

const Login = () => {
  return (
    <View style={{flex:1,backgroundColor:"#fff"}}>
      <Gap height={15}/>
      <Header action="Batal" name="Masuk"/>
      <Gap height={20}/>
      <View style={style.container}>
        <SingleLogo height={120}/>
        <Gap height={20}/>
        <Text style={{fontFamily:'PlayfairDisplay-Bold',fontSize:38,color:'#000'}}>Selamat Datang</Text>
        <Text style={{fontFamily:'PlayfairDisplay-Regular',fontSize:17,color:'#8D8D8D'}}>Masuk dengan akun anda dibawah ini</Text>
        <Gap height={46}/>
        <Input placeholder="username" />
        <Gap height={30}/>
        <Input placeholder="Password" />
        <Gap height={26}/>
        <Text style={style.poppinsMed}>forgot password?</Text>
        <Gap height={29}/>
        <Button style={style.button} name="Masuk" color="#FFF" fam="Poppins-Medium" size={24}/>
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
  poppinsMed:{
    fontFamily:'Poppins-Medium',
    color:'#777'
  }
})

export default Login
