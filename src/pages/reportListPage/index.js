import React,{useState,useContext} from 'react'
import {Text,FlatList,SafeAreaView,RefreshControl,View,StyleSheet} from 'react-native'
import {Header,Gap,ReportListComponent} from '../../components'
import { AuthContext } from "../../context/authContext";
import useHandleCurrentInvoices from '../../config/apiCalls'

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const ReportListPage=({navigation})=>{
  const [refreshing,setRefreshing] = useState(false)
  const {user: currentUser} = useContext(AuthContext)
  const {invoices} = useHandleCurrentInvoices(refreshing,`invoice/invoicesList/${currentUser._id}`)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  const renderItem=({item})=>{
    return(
      <View>
        <ReportListComponent
          fullname={item.client}
          invoiceDate={item.date}
          key={item._id}
          totalPrice={item.total.$numberDecimal}
          vehicle={item.vehicle}
          vehicleType={item.vehicleType}
          diagnosis={item.diagnosis}
          action={item.action}
          spareParts={item.spareParts}
          plat={item.plat}
          repairService={item.repairService.$numberDecimal}
          />
      </View>
    )
  }

  console.log(invoices);
  return(
    <View style={container}>
      <Gap height={7}/>
      <Header name="Daftar Nota" action="< kembali" navigation={navigation} page={true}/>
      <Gap height={25}/>
      <SafeAreaView style={{paddingHorizontal:14,paddingVertical:20}}>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          showsVerticalScrollIndicator={false}
          data={invoices}
          keyExtractor={item=>item._id}
          renderItem={renderItem}
          ListFooterComponent={
            <Gap height={100}/>
          }
          />
      </SafeAreaView>
    </View>

  )
}

const style=StyleSheet.create({
  container:{ flex: 1,backgroundColor:'#fff'},
})

const {container} = style

export default ReportListPage
