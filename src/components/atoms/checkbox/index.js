import React from 'react'
import {View} from 'react-native'
import CheckBox from '@react-native-community/checkbox';

const CheckBoxComponent = (props) => {
  return (
    <View>
      {Platform.OS === 'ios' ? (
        <CheckBox
          boxType="square"
          value={agree}
          onChange={() => setAgree(!agree)}
        />
      ) : (
        <CheckBox value={agree} onChange={() => setAgree(!agree)} />
      )}
    </View>
  )
}

export default CheckBoxComponent
