import React, {useState} from 'react'
import {View,Text,ScrollView} from 'react-native'
import {Button,BioHolder,Gap,Header} from '../../components'
import {DateIcon,Email,Address,Phone,AvatarProfile,ID,MainLogo} from '../../assets'

const Profile = ({navigation})=>{

  return(
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <Gap height={15}/>
      <Header name='Profil' action='< kembali' edit={true} nav={navigation}/>
      <Gap height={35}/>
      <ScrollView contentContainerStyle={{alignItems:'center',justifyContent:'flex-end'}}>
        <View style={{borderStyle:'dashed',borderWidth:2,borderColor:'#8CC4F8',borderRadius:75,height:130,width:130,alignItems:'center',justifyContent:'center'}}>
          <View style={{height:115,width:115,backgroundColor:'#eee',borderRadius:65}}/>
        </View>
        <Gap height={20}/>
        <BioHolder icon={<AvatarProfile fill="#a0a0a0"/>} userInfo='Prince Siachin' labelInfo='Fullname'/>
        <BioHolder icon={<Email height={28}/>} userInfo='prince@gmail.com' labelInfo='Email address'/>
        <BioHolder icon={<Address height={28}/>} userInfo='Luwuk, Central Sulawesi' labelInfo='Address'/>
        <BioHolder icon={<DateIcon height={28}/>} userInfo='28-08-2001' labelInfo='Date of Birth'/>
        <BioHolder icon={<Phone height={26}/>} userInfo='081213507373' labelInfo='Phone Number'/>
        <Gap height={28}/>
      </ScrollView>
    </View>
  )
}

export default Profile