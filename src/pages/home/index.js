import React,{useEffect,useCallback,useState,useContext} from 'react'
import {Text,View,StyleSheet,RefreshControl,SafeAreaView,FlatList,Image} from 'react-native'
import {Header,Gap,Button,Input,homePostComponent} from '../../components'
import {getCurrentDate} from '../../config'
import { AuthContext } from "../../context/authContext";

const Home = ({navigation})=>{
  const {user} = useContext(AuthContext)
  const [datas,setDatas] = useState([])
  const [filteredDatas,setfilteredDatas] = useState([])
  const [search,setSearch] = useState('')

  useEffect(()=>{
    const fetchDatas = async ()=>{
      const allInvoices = await fetch(`https://charlie-invoice.herokuapp.com/api/invoice`).then(res=>res.json())
      setDatas(allInvoices)
      setfilteredDatas(allInvoices)
    }
    fetchDatas()
    const interval = setTimeout(()=>{
      fetchDatas()
    },500)
    return ()=> clearInterval(interval)
  },[setfilteredDatas,setDatas])

  const searchItem = (value)=>{
    if (value) {
      const newData = datas.filter(item=>{
        const itemDatas = item.plat ? item.plat.toUpperCase():''.toUpperCase()
        const valueData = value.toUpperCase()
        return itemDatas.indexOf(valueData) > -1;
      })
      setfilteredDatas(newData)
      setSearch(value)
    } else{
      setfilteredDatas(datas)
      setSearch(value)
    }
  }
  const name = JSON.stringify(user.fullname)
  const username = typeof name==="string" ? name.split(' ')[0] : name
  return(
    <View style={container}>
      <Gap height={7}/>
      <Header name="Beranda" button={true} navigation={navigation}/>
      <Gap height={25}/>
      <SafeAreaView style={scrollViewCont}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredDatas}
          ListHeaderComponent={
            <>
              <View>
                <Text style={headingTitle}>Hi, {typeof username==="string"?username.charAt(1).toUpperCase()+username.replace(/['"]+/g, '').slice(1):name}!</Text>
              </View>
              <Text style={{fontSize:20,fontFamily:'Poppins-Light',color:'#999'}}>{getCurrentDate()}</Text>
              <Gap height={28}/>
              <Input value={search} width={351} underlineColorAndroid="transparent" placeholder="Cari Disini..." onChangeText={value=>searchItem(value)}/>
              <Gap height={28}/>
            </>
          }
          keyExtractor={item => item._id}
          renderItem={homePostComponent}
          />
      </SafeAreaView>
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
