import React from 'react'
import {TextInput,Text,StyleSheet,View} from 'react-native'

const Input = ({setLabel=false,label,inputRefs,...rest})=>{
  const style=StyleSheet.create({
    container:{
      height:50,
      width:329,
      borderWidth:1.5,borderColor:'#B5DCFF',
      borderRadius:10,color:'#000',
      paddingHorizontal:28.77,fontSize:19,backgroundColor:'#fff',
    }
  })

  return(
    <View>
      {setLabel && <Text style={{fontSize:20,color:'#000',marginBottom:4}}>{label}</Text>}
      <TextInput placeholderTextColor="#999" style={style.container} ref={inputRefs} {...rest}/>
    </View>
  )
}



export default Input
