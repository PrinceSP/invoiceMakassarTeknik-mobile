import React, {useEffect,useState} from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import {Button} from '../../atoms'

const HomePostComponent = ({item,index})=>{
  const [isUser,setUser] = useState([])

  useEffect(()=>{
    const fetchData=()=>{
      fetch(`https://charlie-invoice.herokuapp.com/api/user?username=${item.sender}`)
      .then(res=>res.json())
      .then(res=>setUser(res))
      .catch((error)=>{
        setUser([])
      })
    }
    fetchData()
  },[])
  return(
    <View key={item.userId} style={listCont}>
      <View style={{flexDirection:'row',alignItems:'flex-start'}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image style={{height:45,width:45,borderRadius:45,marginRight:20}} source={{uri:`data:image/png;base64,${isUser.profilePicture}`}}/>
        </View>
        <View style={{width:240,flexDirection:'column',justifyContent:'flex-start'}}>
          <Text style={diagnosisText2}>{item.sender}</Text>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={name}>Konsumer: </Text>
            <Text style={diagnosisText}>{item.client}</Text>
          </View>
          <Text style={date}>{item.createdAt.split('T').pop().split('.').shift()}</Text>
        </View>
      </View>
    </View>
  )
}
const r = () => Math.random() * 256 >> 0;
const colors = `rgb(${r()}, ${r()}, ${r()})`;

const style = StyleSheet.create({
  listCont:{
    paddingHorizontal:15,paddingVertical:12,marginBottom:30,backgroundColor:'#fff',
    borderRadius:10,borderWidth:.3,borderLeftWidth:10,borderColor:"#FFB800",
    elevation: 20,shadowColor: "#61B6FF",shadowOpacity: 1,shadowRadius:10
  },
  firstSection:{flexDirection:'row',alignItems:'center',justifyContent:'space-between'},
  secondSection:{marginTop:16},
  diagnosisText:{color:'#0B2273',fontSize:20,fontFamily:'Poppins-Medium'},
  diagnosisText2:{color:'#444',fontSize:20,fontFamily:'Poppins-Medium'},
  name:{color:'#939394',fontSize:14.4,fontFamily:'Poppins-Medium'},
  date:{color:'#999',fontSize:14.4,fontFamily:'Poppins-Medium'},
})

const {diagnosisText2,listCont,firstSection,secondSection,diagnosisText,name,date} = style

export default HomePostComponent
