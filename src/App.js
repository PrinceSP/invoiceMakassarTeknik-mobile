import React, {useEffect} from 'react'
import {View} from 'react-native'
import {MainLogo} from './assets'

const App = ({navigation}) => {
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#fff'}}>
      <MainLogo/>
    </View>
  )
}

export default App
