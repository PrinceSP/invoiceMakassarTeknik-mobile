import React from 'react'
import { Button, View,Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {WelcomeScreen,SplashScreen,Login,Feedback,ReportListPage,
  Register,Home,Profile,ReportPage,NotificationsPage,EditProfilePage} from '../pages'
import {DrawerContent,TabsContent} from '../components'
import {AuthContext} from '../context/authContext'

const {Navigator, Screen} = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

const BottomTabs = ()=>{
  const {user} = React.useContext(AuthContext)
  return(
    <Tab.Navigator initialRouteName="Home" screenOptions={() => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarVisible: false,
      })}
      tabBar={(props)=><TabsContent {...props}/>}>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Report" component={ReportPage}/>
      <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
  )
}
const Root=()=>{
  const {user} = React.useContext(AuthContext)

  return(
    <Drawer.Navigator initialRouteName="BottomTabs"
      drawerContent={props=><DrawerContent {...props}/>}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#FFFFFF',
          width: 300,
          borderTopRightRadius:20,
          borderBottomRightRadius:20,
        },
        focused:Boolean,
        drawerActiveBackgroundColor:'#abcdef'
      }}>
      <Drawer.Screen name="BottomTabs" component={BottomTabs} options={{headerShown:false}}/>
      <Drawer.Screen name="ReportListPage" component={ReportListPage} options={{headerShown:false}}/>
    </Drawer.Navigator>
  )
}

const Routes = ()=>{
  const {user} = React.useContext(AuthContext)
  return(
    <Navigator>
      <Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
      <Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Screen name="Register" component={Register} options={{headerShown:false}}/>
      <Screen name="EditProfile" component={EditProfilePage} options={{headerShown:false}}/>
      <Screen name="Root" component={Root} options={{headerShown:false}}/>
    </Navigator>
  )
}
export default Routes
