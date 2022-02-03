import React from 'react'
import {TouchableOpacity,View,StyleSheet,Text,Animated} from 'react-native'
import {HomeIcon,Plus,AvatarProfile} from '../../../assets'

const Tab = ({tab,color,onPress})=>{
  const otherStyles= {
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "#B6E203",
    shadowOpacity: 1,
    shadowRadius:20,
    elevation: 10,
    borderRadius:50,
  }

  const containerStyle={
    height:4,
    width:24,
    backgroundColor:color,
    marginTop:6,
    borderRadius:20
  }

  const colors = color==='#000'
  const style = StyleSheet.create({
    report:{
      bottom:23,
      shadowOffset: { width: 10, height: 10 },
      shadowColor: color,
      shadowOpacity: 1,
      shadowRadius:20,
      elevation: 10,
      borderRadius:50,
      backgroundColor : "#17F348"
    },
    other:colors?otherStyles:{},
    container:colors?containerStyle:{}
  });

  const {report,other,container} = style;

  return(
    <TouchableOpacity onPress={onPress} style={{alignItems:'center'}}>
      {
        tab.name === 'Home'?<View style={{alignItems:'center'}}><HomeIcon height={27} fill={color} style={other}/><Animated.View style={container}/></View>
      :tab.name=== 'Report'?<View style={{height:50,width:50,borderWidth:5,borderColor:'#B5CEFF',borderRadius:50,justifyContent:'center',alignItems:'center'}}><Plus height={18}/></View>
        :<View style={{alignItems:'center'}}><AvatarProfile height={28} width={38} fill={color} style={other}/><Animated.View style={container}/></View>
      }
    </TouchableOpacity>
  )
}



export default Tab
