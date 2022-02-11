import React from 'react'
import {TouchableWithoutFeedback} from 'react-native'
import CheckBox from '@react-native-community/checkbox';

const CheckBoxComponent = ({onPress}) => {
  const [agree, setAgree] = React.useState(false);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      {Platform.OS === 'ios' ? (
        <CheckBox
          boxType="circle"
          value={agree}
          onChange={() => setAgree(!agree)}
          tintColor="#044"
        />
      ) : (
        <CheckBox value={agree} onChange={() => setAgree(!agree)} tintColors={{true:'blue', false:'#044'}}/>
      )}
    </TouchableWithoutFeedback>
  )
}

export default CheckBoxComponent
