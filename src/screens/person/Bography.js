import React from 'react'
import { View} from 'react-native';
import {Text} from '../../components/index';
import { Colors } from '../../theme/index';


const Bography = ({biography}) => {
    return (
        <View style={{ marginHorizontal: 16 }}>
        <Text color={Colors.white}>Biography</Text>
        <Text>{biography}</Text>
      </View>
    )
}

export default Bography
