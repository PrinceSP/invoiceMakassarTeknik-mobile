import React, {useState} from 'react'
import {View,Text,Dimensions,StyleSheet} from 'react-native'
import {Tab} from '../../atoms'

//get the screen dimensions
const {width} = Dimensions.get('screen')

const TabsContent = ({state,navigation})=>{
  const [selected,setSelected] = useState('Home')
  const {routes} = state
  const current = (currentTab) => {return (currentTab===selected ? '#a8a8a8':'none')}

  const handleChange = (active)=>{
    setSelected(active)
    navigation.navigate(active)
  }

  return(
      <View style={style.container}>
        {
          routes.map(route=>{
            return(
              <Tab tab={route}
                key={route.key}
                color={current(route.name)}
                onPress={()=>handleChange(route.name)}/>
            )
          })
        }
      </View>
  )
}

const style = StyleSheet.create({
  container:{
    height:60,
    position:'absolute',
    width,
    bottom:0,
    alignItems:'center',
    justifyContent:'space-around',
    flexDirection:'row',
    borderTopWidth:1,
    borderTopColor:'#ECECEC',
    backgroundColor:'#fff',
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "#8EBFF9",
    shadowOpacity: 1,
    shadowRadius:20,
    elevation: 10,
  }
})

export default TabsContent