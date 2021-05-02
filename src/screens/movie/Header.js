import React from 'react';
import {
  View,
  Linking,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {Icon,Text} from '../../components/index';
import { Colors } from '../../theme/index';



const Header = ({title,youtubeUrl,videos,date}) => {
    const {
        headerContainer,
    } = styles;

    return <View style={headerContainer}>
    <View style={{ flex: 1 }}>
      <Text bold large color={Colors.white}>
        {title}
      </Text>
      <Text>{date.split('-')[0]}</Text>
    </View>
    {!!videos.length && (
      <TouchableOpacity
        onPress={() => Linking.openURL(`${youtubeUrl}${videos[0].key}`)}
      >
        <Icon large name="play-circle" color={Colors.green} />
      </TouchableOpacity>
    )}
  </View>
}

export default Header
const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 10,
      marginHorizontal: 16,
    },
  
  });