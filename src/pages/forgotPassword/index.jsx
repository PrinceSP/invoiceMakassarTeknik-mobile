import React,{useState} from 'react'
import {Text,View,StyleSheet,TouchableOpacity,ScrollView,Image,Platform} from 'react-native'
import {Input,Gap,Button,Header} from '../../components'
import {AuthContext} from '../../context/authContext'

const ForgotPassword =({navigation})=>{
  const {user:currentUser} = useContext(AuthContext)
  const [userInfo,setUserInfo] = useState({
    password:'',
    confirmPassword:''
  })
  // destructuring objects in userInfo state
  const {password,confirmPassword} = userInfo
  const submit = async()=>{
    try {
      const options = {
        method: 'put',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({userId:currentUser._id,fullname:fname,username,email,birthday:theDate,phoneNumber:phone,profilePicture:photoBase64})
      }
      const req = await fetch(`https://charlie-invoice.herokuapp.com/api/user/${currentUser._id}`,options)
      const results = await req.json()
      console.log(results);
      if (req.status === 200) {
        console.log(req.message);
      }
    } catch (e) {
      console.log(e._message);
    }

    setUserInfo({password:'',confirmPassword:''})
  }

  return(
    <View style={{backgroundColor:'#fff',flex:1}}>
      <Gap height={15}/>
      <Header name="Ubah Profil" action='<Batal' nav={navigation}/>
      <Gap height={40}/>
      <ScrollView contentContainerStyle={{alignItems:'center',justifyContent:'center',paddingBottom:35}} showsVerticalScrollIndicator={false}>
        <ImagePicker
          photo={photo}
          hasPhoto={hasPhoto}
          onPress={getImage}/>
        <Gap height={59}/>
        <Input label="Kata Sandi" placeholder="**********" value={password} onChangeText={(event)=>{
            setUserInfo({...userInfo,password:event})}}/>
        <Gap height={30}/>
        <Input label="Konfirmasi Kata Sandi" placeholder="**********" value={confirmPassword} onChangeText={(event)=>{
            setUserInfo({...userInfo,confirmPassword:event})}}/>
        <Gap height={30}/>
        <Button style={style.button} name="Submit" color="#FFF" size={24} onPress={()=>submit()}/>
        <Gap height={28}/>
      </ScrollView>
    </View>

  )
}

const style = StyleSheet.create({
  button:{
    marginBottom:15,
    backgroundColor:'#FFB830',
    height:66,
    width:329,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center'
  },
  poppinsMed:{
    fontFamily:'Poppins-Medium'
  }
})

export default ForgotPassword
