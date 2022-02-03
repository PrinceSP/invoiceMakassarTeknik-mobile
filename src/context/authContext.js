import React, {createContext,useReducer,useState} from 'react'
import AuthReducer from './authReducer'
import AsyncStorage from '@react-native-async-storage/async-storage';

const INITIAL_STATE = {
  user:AsyncStorage.getItem('user')||null,
  isFetching:false,
  error:false
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children})=>{
  const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE)
  return(
    <AuthContext.Provider value={{user:state.user, isFetching:state.isFetching, error:state.error,dispatch}}>
      {children}
    </AuthContext.Provider>
  )
}
