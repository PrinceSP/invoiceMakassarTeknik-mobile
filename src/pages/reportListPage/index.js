import React,{useEffect,useState,useContext,useCallback} from 'react'
import {Text,ScrollView,View,StyleSheet,RefreshControl} from 'react-native'
import {Header,Gap,ReportListComponent} from '../../components'
import { AuthContext } from "../../context/authContext";

const ReportListPage=({navigation})=>{
  const [invoices,setInvoices] = useState([])
  const [refreshing,setRefreshing] = useState(false)
  const {user: currentUser} = useContext(AuthContext)

  const wait=(timeout)=>{
    return new Promise(resolve=>setTimeout(resolve,timeout))
  }
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  useEffect(()=>{
    const fetchDatas = async ()=>{
      const res = await fetch(`https://charlie-invoice.herokuapp.com/api/invoice/postsList/${currentUser._id}`).then(res=>res.json())
      setInvoices(
        res.sort((p1,p2)=>{
          return new Date(p2.createdAt) - new Date(p1.createdAt)
        })
      )
    }
    fetchDatas()
  },[currentUser._id])
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
