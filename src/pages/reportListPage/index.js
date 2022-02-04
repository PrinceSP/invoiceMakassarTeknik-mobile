import React,{useEffect,useState,useContext,useCallback} from 'react'
import {Text,ScrollView,View,StyleSheet,RefreshControl} from 'react-native'
import {Header,Gap,ReportListComponent} from '../../components'
import { AuthContext } from "../../context/authContext";
import useHandleCurrentInvoices from '../../config/apiCalls'

const ReportListPage=({navigation})=>{
  const [refreshing,setRefreshing] = useState(false)
  const {user: currentUser} = useContext(AuthContext)
  const {invoices,isPending} = useHandleCurrentInvoices(refreshing,currentUser._id)

  const wait=(timeout)=>{
    return new Promise(resolve=>setTimeout(resolve,timeout))
  }
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(500).then(() => setRefreshing(false));
  }, []);

  console.log(invoices);
  return(
    <View style={container}>
      <Gap height={15}/>
      <Header name="Daftar Nota" action="< kembali" navigation={navigation} page={true}/>
      <Gap height={45}/>
      <ScrollView contentContainerStyle={{paddingHorizontal:14,paddingVertical:20}} refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={refreshing}/>
        }>
        {
          invoices.map(item=>(
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
              repairService={item.repairService}
              />
          ))
        }
      </ScrollView>
    </View>

  )
}

const style=StyleSheet.create({
  container:{ flex: 1,backgroundColor:'#fff'},
})

const {container} = style

export default ReportListPage
