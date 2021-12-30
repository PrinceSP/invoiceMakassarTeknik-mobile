import React from 'react'
import {Text,ScrollView,View,StyleSheet} from 'react-native'
import {Header,Gap,ReportListComponent} from '../../components'

const ReportListPage=({navigation})=>{
  return(
    <View style={container}>
      <Gap height={15}/>
      <Header name="Daftar Nota" action="< kembali" navigation={navigation}/>
      <Gap height={45}/>
      <ScrollView contentContainerStyle={{paddingHorizontal:14,paddingVertical:20}}>
        <ReportListComponent/>
        <ReportListComponent/>
        <ReportListComponent/>
        <ReportListComponent/>
        <ReportListComponent/>
        <ReportListComponent/>
      </ScrollView>
    </View>

  )
}

const style=StyleSheet.create({
  container:{ flex: 1,backgroundColor:'#fff'},
})

const {container} = style

export default ReportListPage
