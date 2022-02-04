import {useState,useEffect} from 'react'

const useHandleCurrentInvoices = (id)=>{
  const [invoices,setInvoices] = useState([])
  const [isPending,setIsPending] = useState(true)

  useEffect(()=>{
    const fetchData = ()=>{
      fetch(`https://charlie-invoice.herokuapp.com/api/invoice/invoicesList/${id}`)
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
    fetchData()
  },[])
  return {invoices,isPending}
}

export default useHandleCurrentInvoices
