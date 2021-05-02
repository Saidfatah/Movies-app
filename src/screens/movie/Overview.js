import React from 'react';
import { View} from 'react-native';
import {Text} from '../../components/index';
import { Colors } from '../../theme/index';


const Overview = ({overview}) => {
    return <View style={{ marginHorizontal: 16 }}>
    <Text color={Colors.white}>Sinopsi</Text>
    <Text>{overview}</Text>
  </View>
}

export default Overview
