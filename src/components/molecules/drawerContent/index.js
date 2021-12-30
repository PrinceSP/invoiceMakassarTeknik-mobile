import React from 'react'
import {Text,View,StyleSheet,ScrollView,Image,Platform} from 'react-native'
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer'
import {AvatarProfile,Report,ShareIcon,SignOut,PD,SingleSmall} from '../../../assets'

const style = StyleSheet.create({
  container:{
    flex:1
  },
  section:{
    paddingTop:33,
    paddingBottom:38,
    paddingLeft:16,
    borderBottomWidth:1,
    borderBottomColor:'#F1DADA'
  },
  image:{
    width:100,
    height:100,
    borderRadius:40
  },
  title:{
    fontFamily:'Lato-Bold',
    color:'#000',
    fontSize:28,
    marginTop:14
  },
  desc:{
    fontFamily:'Lato-Regular',
    color:'#000',
    fontSize:16
  },
  menu:{
    fontSize:16,
    color:'#000'
  }

})

const {container,section,image,title,desc,menu} = style

const DrawerContent = (props)=>{
  return(
    <View style={container}>
      <DrawerContentScrollView {...props}>
        <View style={container}>
          <View style={section}>
            <Image style={image} source={SingleSmall}/>
            <View>
              <Text style={title}>Charlie Momuat</Text>
              <Text style={desc}>charliemomuat@gmail.com</Text>
            </View>
          </View>
          <View style={{paddingVertical:18,borderBottomWidth:1,borderBottomColor:'#F1DADA'}}>
            <DrawerItem labelStyle={menu}
              icon={()=><Report height={28} width={28}/>}
              label="Daftar Nota"
              onPress={()=>{props.navigation.navigate('ReportListPage')}}/>
            <DrawerItem labelStyle={menu}
              icon={()=><SignOut height={28} width={28}/>}
              label="Sign Out"
              onPress={()=>{}}/>
          </View>
          <View style={{paddingLeft:20,marginTop:20}}>
            <Text>v.1.0</Text>
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={{marginBottom:15,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
        <Text style={{marginRight:10}}>Made By</Text>
        <Image source={PD}/>
      </View>
    </View>
  )
};

export default DrawerContent;