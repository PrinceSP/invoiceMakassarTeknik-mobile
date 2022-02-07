import {useState,useEffect} from 'react'

const useHandleCurrentInvoices = (url)=>{
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

    const interval=setInterval(()=>{
      fetchData()
    },500)
    return ()=> clearInterval(interval)
  },[setInvoices,url])
  return {invoices,isPending}
}

export default useHandleCurrentInvoices
