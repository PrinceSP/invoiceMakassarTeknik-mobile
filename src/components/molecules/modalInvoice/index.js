import React,{useEffect,useState} from 'react'
import {View,Text,StyleSheet,Modal,ScrollView} from 'react-native'

const ModalInvoice = ({visible,children}) => {
  const [show,setShow] = useState(visible)
  useEffect(()=>{
    toggleModal()
  },[visible])

  const toggleModal = ()=>{
    if (visible) {
      setShow(true)
    }else{
      setShow(false)
    }
  }
  return (
    <Modal transparent visible={show}>
      <View style={modalBg}>
        {children}
      </View>
    </Modal>
  )
}

const style = StyleSheet.create({
  modalBg:{
    flex:1,
    backgroundColor:'rgba(114, 213, 255, 1)',
    alignItems:'center',
    justifyContent:'center'
  }
})

const {modalBg} = style


export default ModalInvoice
