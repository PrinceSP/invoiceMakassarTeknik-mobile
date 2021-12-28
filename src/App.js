import React from 'react'
import {View,Text} from 'react-native'
import {Header} from './components'

const App = () => {
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <Header action="Batal" name="Masuk"/>
      <Text style={{fontFamily:'PlayfairDisplay-Bold',fontSize:35,color:'#000'}}>Selamat Datang</Text>
      <Text style={{fontFamily:'PlayfairDisplay-Regular',fontSize:17,color:'#8D8D8D'}}>Masukkan rincian akun dibawah ini</Text>
    </View>
  )
}

export default App
