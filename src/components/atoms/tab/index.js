import React from 'react'
import {TouchableOpacity,View,StyleSheet,Text,Animated,Platform} from 'react-native'
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

  const colors = color==='#000';
  const style = StyleSheet.create({
    report:{position:'absolute',bottom:0,
      height:65,
      width:65,
      borderWidth:5,
      // borderColor:'#B5CEFF',
      borderColor:'#eee',
      borderRadius:50,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#ffa700',
      ...Platform.select({
        ios: {
          shadowColor:"#fa9",
          shadowOffset: { width: 10, height: 10 },
          shadowOpacity: 1,
          shadowRadius:20
        },
        android: {
          elevation:10
        }
      })
    },
    other:colors?otherStyles:{},
    container:colors?containerStyle:{}
  });

  const {report,other,container} = style;

  return(
    <TouchableOpacity onPress={onPress} style={{alignItems:'center'}}>
      {
        tab.name === 'Home'?<View style={{alignItems:'center'}}><HomeIcon height={27} fill={color} style={other}/><Animated.View style={container}/></View>
      :tab.name=== 'Report'?<View style={report}><Plus height={26}/></View>
        :<View style={{alignItems:'center'}}><AvatarProfile height={28} width={38} fill={color} style={other}/><Animated.View style={container}/></View>
      }
    </TouchableOpacity>
  )
}



export default Tab
