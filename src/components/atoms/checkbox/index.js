import React from 'react'
import {View} from 'react-native'
import CheckBox from '@react-native-community/checkbox';

const CheckBoxComponent = (props) => {
  const [agree, setAgree] = React.useState(false);

  return (
    <View>
      {Platform.OS === 'ios' ? (
        <CheckBox
          boxType="square"
          value={agree}
          onChange={() => setAgree(!agree)}
          tintColor="#044"
        />
      ) : (
        <CheckBox value={agree} onChange={() => setAgree(!agree)} tintColors={{true:'blue', false:'#044'}}/>
      )}
    </View>
  )
}

export default CheckBoxComponent
