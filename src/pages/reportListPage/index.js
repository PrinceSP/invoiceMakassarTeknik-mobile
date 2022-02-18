import React,{useState,useContext,useCallback} from 'react'
import {Text,FlatList,SafeAreaView,RefreshControl,View,StyleSheet} from 'react-native'
import {Header,Gap,Input,ReportListComponent,Empty} from '../../components'
import { AuthContext } from "../../context/authContext";
import {useHandleCurrentInvoices} from '../../config'
import {wait} from '../../config'

const ReportListPage=({navigation})=>{
  const [refreshing,setRefreshing] = useState(false)
  const {user: currentUser} = useContext(AuthContext)
  const {invoices,filteredDatas,setfilteredDatas} = useHandleCurrentInvoices(`invoice/invoicesList/${currentUser._id}`,refreshing)
  const [search,setSearch] = useState('')

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  const searchItem = (value)=>{
    if (value) {
      const newData = invoices.filter(item=>{
        const itemDatas = item.plat ? item.plat.toUpperCase():''.toUpperCase()
        const valueData = value.toUpperCase()
        return itemDatas.indexOf(valueData) > -1;
      })
      setfilteredDatas(newData)
      setSearch(value)
    } else{
      setfilteredDatas(invoices)
      setSearch(value)
    }
    // console.log(filteredDatas); 
  }

  const renderItem=({item})=>{
    return(
      <View>
        <ReportListComponent
          fullname={item.client}
          invoiceDate={item.date}
          key={item._id}
          totalPrice={item.total}
          vehicle={item.vehicle}
          vehicleType={item.vehicleType}
          diagnosis={item.diagnosis}
          action={item.action}
          spareParts={item.spareParts}
          plat={item.plat}
          Klea={item.freonUse.klea}
          Bailian={item.freonUse.bailian}
          Dupoet={item.freonUse.dupoet}
          repairService={item.repairService}
          />
      </View>
    )
  }
  return(
    <View style={container}>
      <Gap height={7}/>
      <Header name="Daftar Nota" action="< kembali" navigation={navigation} page={true}/>
      <Gap height={10}/>
      <SafeAreaView style={{paddingHorizontal:14,paddingVertical:20}}>
        <Input value={search} width={365} underlineColorAndroid="transparent" placeholder="Cari Plat Disini..." onChangeText={value=>searchItem(value)}/>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          showsVerticalScrollIndicator={false}
          data={filteredDatas}
          keyExtractor={item=>item._id}
          renderItem={renderItem}
          ListFooterComponent={
            <Gap height={100}/>
          }
          />
      </SafeAreaView>
      {(invoices.length < 1 || filteredDatas.length < 1) && <Empty/>}
    </View>

  )
}

const style=StyleSheet.create({
  container:{ flex: 1,backgroundColor:'#fff'},
})

const {container} = style

export default ReportListPage
