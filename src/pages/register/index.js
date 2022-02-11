import React,{useState} from 'react'
import {Text,View,StyleSheet,TouchableOpacity,ScrollView,Image,Platform} from 'react-native'
import {Input,Gap,Button,Header,ImagePicker} from '../../components'
import {launchImageLibrary} from 'react-native-image-picker'
import DateTimePicker from '@react-native-community/datetimepicker';

const Register = ({navigation}) => {
  const [photo,setPhoto] = useState('')
  const [hasPhoto, setHasPhoto] = useState(false)
  const [photoBase64,setPhotoBase64] = useState('')
  const [date,setDate] = useState(new Date())
  const [show,setShow] = useState(false)
  const [userInfo,setUserInfo] = useState({
    fname:'',
    email:'',
    username:'',
    theDate:'',
    phone:'',
    password:''
  })
  // destructuring objects in userInfo state
  const {fname,email,username,theDate,phone,password} = userInfo
  const getImage=()=>{
    const options={
      maxHeight:160,
      maxWidth:160,
      includeBase64:true,
    }
    launchImageLibrary(options,res=>{
      if(res.didCancel){
        setHasPhoto(false)
        setPhoto('');
        setPhotoBase64('');
      }else{
        setPhoto(res.assets[0].uri);
        setPhotoBase64(res.assets[0].base64);
        setHasPhoto(true);
      }
    })
  }

  //handle on change event when user change the date
  const onChange = (e, selectedDate)=>{
    const currentDate = selectedDate || date

    setShow(Platform=='ios')
    if (e.type === 'set') {
      // set the inputed date into the current date
      setDate(currentDate)
      // put the current date inputed by user into the built-in date function to return the actual Date
      let tempDate = new Date(currentDate)
      // from the actual date in 'tempDate', get the date day-month-year
      let fDate = `${tempDate.getDate()}-${(tempDate.getMonth()+1)}-${tempDate.getFullYear()}`
      setUserInfo({...userInfo,theDate:fDate})
    } else {
      // reseting the dates
      setDate(new Date())
      // setTheDate('') when user cancel input the date
      setUserInfo({...userInfo,theDate:''})
    }
  }

  //handle submit form button
  const submit = async()=>{
    // reset the values of each keys after submit button has been pressed
    //navigate to login screen after registering account
    try {
      const options = {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({fullname:fname,username,email,birthday:theDate,phoneNumber:phone,password,profilePicture:photoBase64})
      }
      const req = await fetch('https://charlie-invoice.herokuapp.com/api/auth/register',options)
      const results = await req.json()
      if (req.status === 200) {
        setPhoto('');
        setPhotoBase64('');
        setHasPhoto(false)
        navigation.navigate('Login')
      }
    } catch (e) {
      console.log(e._message);
    }
    setUserInfo({fname:'',email:'',username:'',theDate:'',phone:'',password:''})
  }

  return(
    <View style={{backgroundColor:'#fff',flex:1}}>
      <Gap height={15}/>
      <Header name="Daftar" action='Batal' nav={navigation}/>
      <ScrollView contentContainerStyle={{alignItems:'center',justifyContent:'center',paddingBottom:35}} showsVerticalScrollIndicator={false}>
        <Gap height={25}/>
        <ImagePicker
          photo={photo}
          hasPhoto={hasPhoto}
          onPress={getImage}/>
        <Gap height={59}/>
        <Input placeholder="Nama Lengkap" value={fname} onChangeText={(event)=>{
            setUserInfo({...userInfo,fname:event})}}/>
        <Gap height={30}/>
        <Input placeholder="Email" value={email}  onChangeText={(event)=>{
            setUserInfo({...userInfo,email:event})}}/>
        <Gap height={30}/>
        <Input placeholder="username" value={username} onChangeText={(event)=>{
            setUserInfo({...userInfo,username:event})}}/>
        <Gap height={30}/>
        <View>
          <TouchableOpacity style={{width:327,height:48,borderRadius:50,position:'absolute',zIndex:2}} onPress={()=>setShow(true)}/>
          <Input placeholder="Tanggal Lahir" value={theDate}/>
        </View>
        {
          show && <DateTimePicker testID='dateTimePicker'
          value={date}
          mode='date'
          display='default'
          onChange={onChange}
          is24Hour={true}
          />
        }
        <Gap height={30}/>
        <Input placeholder="No.HP" value={phone} onChangeText={(event)=>{
            setUserInfo({...userInfo,phone:event})}}/>
        <Gap height={30}/>
        <Input placeholder="Kata Sandi" value={password} onChangeText={(event)=>{
            setUserInfo({...userInfo,password:event})}}/>
        <Gap height={78}/>
        <Button name="Daftar" color="#FFF" fam='Poppins-Medium' size={24} style={style.button}
          onPress={()=>submit()}/>
        <Gap height={28}/>
        <View style={{flexDirection:'row'}}>
          <Text style={style.poppinsMed}>Sudah punya akun?</Text>
          <Button name='Masuk sekarang!' color='#FF1D1D' fam='Poppins-Bold' style={{marginLeft:4}} onPress={()=>navigation.navigate('Login')}/>
        </View>
      </ScrollView>
    </View>

  )
}

const style = StyleSheet.create({
  container:{
    alignItems:'center',
  },
  button:{
    marginBottom:15,
    backgroundColor:'#6ACA5A',
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

export default Register
