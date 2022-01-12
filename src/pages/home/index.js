import React,{useEffect,useState} from 'react'
import {Text,View,StyleSheet,ScrollView,Image,Platform} from 'react-native'
import {Header,Gap} from '../../components'
import {Atomic} from '../../assets'
import {getCurrentDate} from '../../config'

const Home = ({navigation})=>{

  return(
    <View style={container}>
      <Gap height={15}/>
      <Header name="Beranda" button={true} navigation={navigation}/>
      <Gap height={15}/>
      <ScrollView contentContainerStyle={scrollViewCont}>
        <View style={{flexDirection:'row'}}>
          <Text style={headingTitle}>Hi,</Text>
          <Text style={headingTitle}> Charlie!</Text>
        </View>
        <Text style={{fontSize:20,fontFamily:'Poppins-Light',color:'#999'}}>{getCurrentDate()}</Text>
      </ScrollView>
    </View>
  )

}

const style=StyleSheet.create({
  container:{ flex: 1,backgroundColor:'#fff'},
  scrollViewCont:{paddingHorizontal:20,paddingBottom:125},
  headingTitle:{fontSize:35,fontFamily:'PlayfairDisplay-Regular',color:'#000'},
})

const {container,scrollViewCont,headingTitle} = style

export default Home
