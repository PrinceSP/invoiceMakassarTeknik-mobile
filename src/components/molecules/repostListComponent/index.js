import React from 'react'
import {Text,ScrollView,View,StyleSheet} from 'react-native'

const ReportListComponent=()=>{
  return(
    <View style={listCont}>
      <View style={firstSection}>
        <Text style={diagnosis}>AC Mobil Bermasalah</Text>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={total}>Rp.2.210.000</Text>
          <Text style={{fontSize:30,fontFamily:'Poppins-Regular',color:'#8C8888'}}> > </Text>
        </View>
      </View>
      <View style={{borderWidth:1,borderStyle:'dashed',borderColor:'#aaa4a4',height:1}}/>
      <View style={[firstSection,secondSection]}>
        <Text style={name}>Nama</Text>
        <View>
          <Text style={name}>Tanggal Nota</Text>
        </View>
      </View>
      <View style={[firstSection,thirdSection]}>
        <Text style={diagnosis}>Simon Forde</Text>
        <View>
          <Text style={date}>2 Januari 2022</Text>
        </View>
      </View>
    </View>
  )
}

const style=StyleSheet.create({
  listCont:{
    height:158,width:350,paddingHorizontal:10,paddingVertical:20,marginBottom:12,marginTop:12,
    marginLeft:25,backgroundColor:'#fff',borderTopLeftRadius:20,
    elevation: 15,shadowColor: "#82B6DB",shadowOpacity: 1,shadowRadius:20
  },
  firstSection:{flexDirection:'row',alignItems:'center',justifyContent:'space-between'},
  secondSection:{paddingRight:15,marginTop:16},
  thirdSection:{paddingRight:15},
  diagnosis:{color:'#0B2273',fontSize:14.4,fontFamily:'Poppins-Medium'},
  name:{color:'#939394',fontSize:14.4,fontFamily:'Poppins-Medium'},
  date:{color:'#142D84',fontSize:14.4,fontFamily:'Poppins-Medium'},
  total:{color:'#6989F8',fontSize:14.4,fontFamily:'Poppins-Bold'}
})

const {listCont,diagnosis,total,firstSection,name,secondSection,thirdSection,date} = style

export default ReportListComponent
