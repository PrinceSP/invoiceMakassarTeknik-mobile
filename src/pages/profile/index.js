import React, {useEffect,useState} from 'react'
import {View,Text,ScrollView,Image} from 'react-native'
import {Button,BioHolder,Gap,Header} from '../../components'
import {DateIcon,Email,Address,Phone,AvatarProfile,ID,MainLogo} from '../../assets'
import Axios from 'axios'

const Profile = ({navigation})=>{
  const [user,setUser] = useState({})

  useEffect(()=>{
    const fetchDatas = async ()=>{
      const res = await Axios.get(`https://charlie-invoice.herokuapp.com/api/user?username=${princesp}`)
      setUser(res.data);
    }
    fetchDatas()
  },[])
  return(
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <Gap height={15}/>
      <Header name='Profil' action='< kembali' edit={true} nav={navigation}/>
      <Gap height={35}/>
      <ScrollView contentContainerStyle={{alignItems:'center',justifyContent:'flex-end'}}>
        <View style={{borderStyle:'dashed',borderWidth:2,borderColor:'#8CC4F8',borderRadius:75,height:130,width:130,alignItems:'center',justifyContent:'center'}}>
          {user.profilePicture ? <Image source={{uri:`${user.profilePicture}`}} style={{height:115,width:115,backgroundColor:'#eee',borderRadius:65}}/> : <View style={{height:115,width:115,backgroundColor:'#eee',borderRadius:65}}/>}
        </View>
        <Gap height={20}/>
        <BioHolder icon={<AvatarProfile fill="#a0a0a0"/>} userInfo={user.fullname} labelInfo='Fullname'/>
        <BioHolder icon={<Email height={28}/>} userInfo={user.email} labelInfo='Email address'/>
        <BioHolder icon={<Address height={28}/>} userInfo={user.username} labelInfo='Username'/>
        <BioHolder icon={<DateIcon height={28}/>} userInfo='28-08-2001' labelInfo='Date of Birth'/>
        <BioHolder icon={<Phone height={26}/>} userInfo='081213507373' labelInfo='Phone Number'/>
        <Gap height={28}/>
      </ScrollView>
    </View>
  )
}

export default Profile
