import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const ModalInvoice = (props) => {
  return (
    <View style={{backgroundColor:'#fff',height:664,width:390,position:'absolute',bottom:0,borderTopLeftRadius:30,borderTopRightRadius:30,paddingVertical:35,paddingHorizontal:20}}>
      <View style={{justifyContent:'space-between'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontFamily:'Poppins-Regular',color:'#7B7B7B'}}>Faktur untuk</Text>
          <Text style={{fontFamily:'Poppins-Regular',color:'#7B7B7B'}}>No.HP</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:20,fontFamily:'Poppins-Medium',color:'#1638B2'}}>Simon Forde</Text>
          <Text style={{fontSize:20,fontFamily:'Poppins-Medium',color:'#000'}}>081213507373</Text>
        </View>
      </View>
      <View>
        <View style={{flexDirection:"row"}}>
          <View style={{height:22,width:22,borderRadius:22,marginRight:4,borderColor:"#FFC700",borderWidth:2,paddingVertical:1,paddingHorizontal:1,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:"#FFC700",fontFamily:'Lato-Bold'}}>$</Text>
          </View>
          <Text style={{fontSize:16,fontFamily:"Poppins-Medium",color:"#676E86"}}>Rincian Nota</Text>
        </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:10}}>
        <View>
          <Text style={{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}}>Kendaraan</Text>
          <Text style={{fontFamily:'Poppins-Medium',color:'#142D84'}}>Mobil</Text>
        </View>
        <View>
          <Text style={{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}}>Tanggal Nota</Text>
          <Text style={{fontFamily:'Poppins-Medium',color:'#142D84'}}>2 Januari 2022</Text>
        </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:10}}>
        <View>
          <Text style={{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}}>Tipe Kendaraan</Text>
          <Text style={{fontFamily:'Poppins-Medium',color:'#142D84'}}>Honda</Text>
        </View>
        <View>
          <Text style={{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}}>No.Polisi</Text>
          <Text style={{fontFamily:'Poppins-Medium',color:'#142D84'}}>DN 2135 BC</Text>
        </View>
      </View>
      <View style={{paddingVertical:10}}>
        <View>
          <Text style={{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}}>Dianosa</Text>
          <Text style={{fontFamily:'Poppins-Medium',color:'#142D84'}}>AC Mobil bermasalah</Text>
        </View>
        <View>
          <Text style={{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}}>Penanganan</Text>
          <Text style={{fontFamily:'Poppins-Medium',color:'#142D84'}}>Pengisian ulang Freon</Text>
        </View>
      </View>
      <View style={{paddingVertical:10}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignSelf: "stretch"}}>
          <Text style={{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}}>Items</Text>
          <Text style={{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}}>Harga</Text>
        </View>
        <View>
          <Text style={{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}}>Suku Cadang</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontFamily:'Poppins-Medium',color:'#142D84'}}>Kompressor</Text>
            <Text style={{fontFamily:'Poppins-Regular',color:'#161E3C'}}>Rp.300.000</Text>
          </View>
        </View>
      </View>
      <View style={{paddingVertical:10}}>
        <Text style={{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}}>Jenis Freon yang digunakan:</Text>
        <View>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontFamily:'Poppins-Medium',color:'#142D84'}}>Klea</Text>
            <Text style={{fontFamily:'Poppins-Regular',color:'#161E3C'}}>Rp.350.000</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontFamily:'Poppins-Medium',color:'#142D84'}}>Bailian</Text>
            <Text style={{fontFamily:'Poppins-Regular',color:'#161E3C'}}>Rp.300.000</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontFamily:'Poppins-Medium',color:'#142D84'}}>Dupoet</Text>
            <Text style={{fontFamily:'Poppins-Regular',color:'#161E3C'}}>Rp.480.000</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{color:'#939394',fontFamily:'Poppins-Regular',color:'#161E3C'}}>Jaya Layanan</Text>
          <Text>Rp.780.000</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:4}}>
          <Text style={{fontSize:20,fontFamily:'Poppins-Regular'}}>Total</Text>
          <Text style={{fontSize:20,fontFamily:'Poppins-Bold',color:'#6989F8'}}>Rp.2.210.000</Text>
        </View>
      </View>
    </View>
  )
}

export default ModalInvoice
