import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {Button} from '../../atoms'

const homePostComponent = ({item})=>{
  return(
    <View key={item._id} style={listCont}>
      <View style={firstSection}>
        <Text style={{fontSize:20,color:"#777"}}>Nota dari:</Text>
        <Text style={diagnosisText}>{item.sender}</Text>
      </View>
      <View style={[firstSection,secondSection]}>
        <Text style={name}>Nama Konsumen</Text>
      </View>
      <View style={firstSection}>
        <Text style={diagnosisText}>{item.client}</Text>
        <View>
          <Text style={date}>{item.createdAt.split('T').pop().split('.').shift()}</Text>
        </View>
      </View>
      <Button name="Details"/>
    </View>
  )
}

const style = StyleSheet.create({
  listCont:{
    paddingHorizontal:10,paddingVertical:12,marginBottom:30,backgroundColor:'#fff',borderRadius:15,
    elevation: 20,shadowColor: "#61B6FF",shadowOpacity: 1,shadowRadius:10,borderWidth:1,borderColor:"#DDDDDB"
  },
  firstSection:{flexDirection:'row',alignItems:'center',justifyContent:'space-between'},
  secondSection:{marginTop:16},
  diagnosisText:{color:'#0B2273',fontSize:14.4,fontFamily:'Poppins-Medium'},
  name:{color:'#939394',fontSize:14.4,fontFamily:'Poppins-Medium'},
  date:{color:'#142D84',fontSize:14.4,fontFamily:'Poppins-Medium'},
})

const {container,scrollViewCont,headingTitle,listCont,firstSection,secondSection,thirdSection,diagnosisText,name,date} = style

export default homePostComponent
