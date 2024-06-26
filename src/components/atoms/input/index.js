import React from 'react'
import {TextInput,Text,StyleSheet,View} from 'react-native'

const Input = ({width=329,setLabel=false,paddingRight=28.77,label,...rest})=>{
  const style=StyleSheet.create({
    container:{
      height:50,width,
      borderWidth:1.5,borderColor:'#B5DCFF',
      borderRadius:10,color:'#000',
      paddingLeft:28.77,paddingRight,fontSize:19,backgroundColor:'#fff',
    }
  })

  return(
    <View>
      {setLabel && <Text style={{fontSize:20,color:'#000',marginBottom:4}}>{label}</Text>}
      <TextInput placeholderTextColor="#999" style={style.container} {...rest}/>
    </View>
  )
}



export default Input
