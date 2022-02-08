import {useState,useEffect} from 'react'

const useHandleCurrentInvoices = (url,isRefreshing)=>{
  const [invoices,setInvoices] = useState([])
  const [isPending,setIsPending] = useState(true)

  const fetchData = ()=>{
    fetch(`https://charlie-invoice.herokuapp.com/api/${url}`)
    .then(res=>res.json())
    .then((res)=>{
      setInvoices(
        res.sort((p1,p2)=>{
          return new Date(p2.createdAt) - new Date(p1.createdAt)
        })
      )
      setIsPending(false)
    })
    .catch((error)=>{
      setIsPending(false)
    })
  }
  useEffect(()=>{

    fetchData()

    const interval=isRefreshing&&setTimeout(()=>{
      fetchData()
    },100)
  },[setInvoices,url,isRefreshing])
  return {invoices,isPending}
}

export default useHandleCurrentInvoices
