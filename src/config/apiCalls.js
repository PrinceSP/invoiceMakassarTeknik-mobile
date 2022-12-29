import {useState,useEffect} from 'react'

const useHandleCurrentInvoices = (url)=>{
  const [invoices,setInvoices] = useState([])
  const [isPending,setIsPending] = useState(true)
  const [filteredDatas,setfilteredDatas] = useState([])
  const [refreshing,setRefreshing] = useState(false)

  const fetchData = ()=>{
    fetch(`https://charlie-invoice.herokuapp.com/api/${url}`)
    .then(res=>res.json())
    .then((res)=>{
      setInvoices(
        res.sort((p1,p2)=>{
          return new Date(p2.createdAt) - new Date(p1.createdAt)
        })
      )
      setfilteredDatas(
        res.sort((p1,p2)=>{
          return new Date(p2.createdAt) - new Date(p1.createdAt)
        })
      )
      setIsPending(false)
      setRefreshing(true)
    })
    .catch((error)=>{
      setDatas([])
      setfilteredDatas([])
      setIsPending(false)
    })
    .finally(()=>{
      setRefreshing(false)
    })
  }
  useEffect(()=>{
    let mounted = true
    if (mounted) {
      fetchData()
    }
    return ()=> mounted = false
  },[])

  return {invoices,isPending,filteredDatas,setfilteredDatas,fetchData,refreshing}
}

export default useHandleCurrentInvoices
