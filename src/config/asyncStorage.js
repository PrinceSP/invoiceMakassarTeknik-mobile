import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveStorage = async(value)=>{
  try {
    await AsyncStorage.setItem('user',JSON.stringify(value))
    console.log('success store the datas')
  } catch (e) {
    console.log(e);
  }
}
