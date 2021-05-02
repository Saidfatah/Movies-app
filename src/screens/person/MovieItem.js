import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, View, TouchableOpacity } from 'react-native';
import { Text } from '../../components/index';


const MovieItem = ({movie ,resourceUrl}) => {
  const { navigate } = useNavigation();
  const { id, title, poster_path: pic, release_date: date } = movie;

    return <View style={{ width: 130 }}>
    <TouchableOpacity onPress={() => navigate('movie', { id })}>
      <Image
        style={{ width: 120, height: 170, borderRadius: 5 }}
        source={{ uri: `${resourceUrl}w342${pic}` }}
        resizeMode="stretch"
      />
      <View
        style={{ paddingHorizontal: 5, alignItems: 'center', marginTop: 8 }}
      >
        <Text small bold numberOfLines={1}>
          {title}
        </Text>
        <Text small>{date.split('-')[0]}</Text>
      </View>
    </TouchableOpacity>
  </View>
}

export default MovieItem
