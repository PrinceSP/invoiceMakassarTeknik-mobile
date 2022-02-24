import React,{useEffect,useCallback,useState,useContext} from 'react'
import {Text,TouchableOpacity,View,StyleSheet,RefreshControl,SafeAreaView,FlatList,Image} from 'react-native'
import {Header,Gap,Button,Input,HomePostComponent,Empty} from '../../components'
import {getCurrentDate} from '../../config'
import { AuthContext } from "../../context/authContext";
import {wait} from '../../config'
import {ArrowDown} from '../../assets'

const Home = ({navigation})=>{
  const {user} = useContext(AuthContext)
  const [datas,setDatas] = useState([])
  const [refreshing,setRefreshing] = useState(false)
  const [sortDatas,setSortDatas] = useState([])
  const [search,setSearch] = useState('')
  const [show,setShow] = useState(false)

  const toggleModal = ()=>{
    if (show===true) {
      setShow(true)
    }else{
      setShow(false)
    }
  }
  const fetchDatas = async ()=>{
    try {
      const res = await fetch(`https://charlie-invoice.herokuapp.com/api/invoice`)
      const allInvoices = await res.json()
      setDatas(allInvoices)
      setSortDatas(allInvoices)
      setRefreshing(true)
    } catch (e) {
      setDatas([])
      setSortDatas([])
    } finally{
      setRefreshing(false)
    }
  }
  useEffect(()=>{
    fetchDatas()
    toggleModal()
  },[])

  const searchItem = (value,query)=>{
    const keys = ["plat","client","phoneNumber","date"]
    return value.filter(item=>
      keys.some(key=>item[key].toLowerCase().includes(query))
    )
  }

  const filterBy = (value)=>{
    if (value==='terbaru') {
      setSortDatas(datas.sort((p1,p2)=>{return new Date(p2.createdAt) - new Date(p1.createdAt)}))
    } else if (value==='terlama') {
      setSortDatas(datas.sort((p1,p2)=>{return new Date(p1.createdAt) - new Date(p2.createdAt)}))
    } else{
      return datas;
    }
  }

  const invoiceData = searchItem(datas,search)

  const name = JSON.stringify(user.fullname)
  const username = typeof name==="string" ? name.split(' ')[0] : name
  return(
    <SafeAreaView style={container}>
        {show&&<View style={{height:700,width:392,alignItems:'center',justifyContent:'center',position:'absolute',backgroundColor: 'rgba(52, 52, 52, 0.3)',zIndex:100}}>
          <TouchableOpacity style={{height:700,width:392,position:'absolute',top:0,left:0}} onPress={()=>setShow(false)}/>
          <View style={{width:350,height:150,backgroundColor:"#fff",borderRadius:10,alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity onPress={()=>filterBy('terbaru')}><Text style={sortText}>Terbaru</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>filterBy('terlama')}><Text style={sortText}>Terlama</Text></TouchableOpacity>
          </View>
        </View>}
      <Gap height={7}/>
      <Header name="Beranda" button={true} navigation={navigation}/>
      <Gap height={25}/>
      <SafeAreaView style={scrollViewCont}>
        <FlatList
          keyExtractor={item => item._id}
          refreshing={refreshing}
          onRefresh={fetchDatas}
          showsVerticalScrollIndicator={false}
          data={invoiceData}
          renderItem={({item,index})=><HomePostComponent item={item} index={index}/>}
          ListHeaderComponent={
            <View style={{backgroundColor:'#fff'}}>
              <View>
                <Text style={headingTitle}>Hi, {typeof username==="string"?username.charAt(1).toUpperCase()+username.replace(/['"]+/g, '').slice(1):name}!</Text>
              </View>
              <Text style={{fontSize:16,fontFamily:'Poppins-Light',color:'#999'}}>{getCurrentDate()}</Text>
              <Gap height={15}/>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Input value={search} width={265} underlineColorAndroid="transparent" placeholder="Cari nota disini..." onChangeText={value=>setSearch(value)}/>
                <Button style={button} size={20} color="#0FB600" name={['SORT ',<ArrowDown key={1}/>]} key={2} onPress={()=>setShow(true)}/>
              </View>
              <Gap height={20}/>
            </View>
          }
          ListFooterComponent={
            <Gap height={100}/>
          }
          stickyHeaderIndices={[0]}
          />
        {(datas.length < 1 || invoiceData.length < 1) && <Empty/>}
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
    zIndex:20
  },
  sortText:{
    fontSize:28,fontFamily:'Poppins-Regular',color:'#000'
  }
})

const {container,sortText,scrollViewCont,headingTitle,button} = style

export default Home
