import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from '../Icon';
import {Colors} from "../../../theme/index"
const HeaderBack = () => {
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setTimeout(goBack, 0)}>
        <Icon large name="arrow-left" color={Colors.green} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    marginLeft: 16,
  },
});

export default HeaderBack;
