import React,{useEffect,useCallback,useState,useContext} from 'react'
import {Text,View,StyleSheet,RefreshControl,SafeAreaView,FlatList,Image} from 'react-native'
import {Header,Gap,Button,Input,HomePostComponent,Empty} from '../../components'
import {getCurrentDate} from '../../config'
import { AuthContext } from "../../context/authContext";
import {wait} from '../../config'
import {ArrowDown,Search} from '../../assets'

const Home = ({navigation})=>{
  const {user} = useContext(AuthContext)
  const [datas,setDatas] = useState([])
  const [refreshing,setRefreshing] = useState(false)
  const [filteredDatas,setfilteredDatas] = useState([])
  const [search,setSearch] = useState('')

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  const fetchDatas = async ()=>{
    try {
      const res = await fetch(`https://charlie-invoice.herokuapp.com/api/invoice`)
      const allInvoices = await res.json()
      setDatas(allInvoices)
      setfilteredDatas(allInvoices)
    } catch (e) {
      setDatas([])
      setfilteredDatas([])
    }
  }

  useEffect(()=>{
    fetchDatas()
    const interval = refreshing&&setTimeout(()=>{
      fetchDatas()
    },100)
  },[setfilteredDatas,setDatas,refreshing])

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
    <SafeAreaView style={container}>
      <Gap height={7}/>
      <Header name="Beranda" button={true} navigation={navigation}/>
      <Gap height={25}/>
      <SafeAreaView style={scrollViewCont}>
        <FlatList
          keyExtractor={item => item._id}
          refreshControl={
            <RefreshControl onRefresh={onRefresh} refreshing={refreshing}/>
          }
          showsVerticalScrollIndicator={false}
          data={filteredDatas}
          renderItem={({item,index})=><HomePostComponent item={item} index={index}/>}
          ListHeaderComponent={
            <View style={{backgroundColor:'#fff'}}>
              <View>
                <Text style={headingTitle}>Hi, {typeof username==="string"?username.charAt(1).toUpperCase()+username.replace(/['"]+/g, '').slice(1):name}!</Text>
              </View>
              <Text style={{fontSize:16,fontFamily:'Poppins-Light',color:'#999'}}>{getCurrentDate()}</Text>
              <Gap height={15}/>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Input value={search} width={265} underlineColorAndroid="transparent" placeholder="Cari Disini..." onChangeText={value=>searchItem(value)}/>
                <Button style={button} size={20} color="#0FB600" name={['SORT ',<ArrowDown key={1}/>]} key={2}/>
              </View>
              <Gap height={20}/>
            </View>
          }
          ListFooterComponent={
            <Gap height={100}/>
          }
          stickyHeaderIndices={[0]}
          />
        {(datas.length < 1 || filteredDatas.length < 1) && <Empty/>}
      </SafeAreaView>
    </SafeAreaView>
  )

}

const style=StyleSheet.create({
  container:{ flex: 1,backgroundColor:'#fff'},
  scrollViewCont:{paddingHorizontal:20,marginBottom:100},
  headingTitle:{fontSize:25,fontFamily:'PlayfairDisplay-Regular',color:'#000'},
  button:{
    alignItems:'center',
    justifyContent:'center',
  },
})

const {container,scrollViewCont,headingTitle,button} = style

export default Home
