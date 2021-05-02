import React from 'react';
import {View,StyleSheet} from 'react-native';
import {Icon,Text} from '../../components/index';
import { Colors } from '../../theme/index';


const CategoryRartings = ({genres,rating,duration}) => {
    const {
        infoContainer,
        ratingContainer,
    } = styles;


    return <View style={infoContainer}>
    <View style={{ flex: 1 }}>
      <Text color={Colors.white}>
        {genres.map(({ name }) => name).join(', ')}
      </Text>
      <Text color={Colors.white}>{duration.toString()}</Text>
    </View>
    <View style={ratingContainer}>
      <View style={{ marginRight: 5 }}>
        <Icon name="star" color={Colors.green} />
      </View>
      <Text color={Colors.white}>{rating.toString()}</Text>
    </View>
  </View>
}

export default CategoryRartings

const styles = StyleSheet.create({
 
    infoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 30,
      marginHorizontal: 16,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10,
    },
  });