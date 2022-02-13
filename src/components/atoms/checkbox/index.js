import React from 'react'
import {TouchableWithoutFeedback} from 'react-native'
import CheckBox from '@react-native-community/checkbox';

const CheckBoxComponent = ({onPress}) => {
  const [isAgree, setAgree] = React.useState(false);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      {Platform.OS === 'ios' ? (
        <CheckBox
          boxType="circle"
          value={isAgree}
          onChange={() => setAgree(!agree)}
          tintColor="#044"
        />
      ) : (
        <CheckBox value={isAgree} onChange={() => setAgree(!isAgree)} tintColors={{true:'blue', false:'#044'}}/>
      )}
    </TouchableWithoutFeedback>
  )

  // return(
  //   <Switch
  //     trackColor={{ false: "#767577", true: "#81b0ff" }}
  //     thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
  //     ios_backgroundColor="#3e3e3e"
  //     onValueChange={toggleSwitch}
  //     value={isAgree}/>
  // )
}

export default CheckBoxComponent
