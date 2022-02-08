import React,{useState,useContext} from 'react'
import {Text,FlatList,SafeAreaView,RefreshControl,View,StyleSheet} from 'react-native'
import {Header,Gap,ReportListComponent,Empty} from '../../components'
import { AuthContext } from "../../context/authContext";
import {useHandleCurrentInvoices} from '../../config'
import {wait} from '../../config'

const ReportListPage=({navigation})=>{
  const [refreshing,setRefreshing] = useState(false)
  const {user: currentUser} = useContext(AuthContext)
  const {invoices} = useHandleCurrentInvoices(`invoice/invoicesList/${currentUser._id}`,refreshing)

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
      {invoices.length < 1 &&<Empty/>}
    </View>

  )
}

const style=StyleSheet.create({
  container:{ flex: 1,backgroundColor:'#fff'},
})

const {container} = style

export default ReportListPage
