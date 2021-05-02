import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from '../../../../components/index';
import { useRemoteConfig } from '../../../../hooks/index';
import { THEMOVIEDB_RESOURCE_URL } from '../../../../constants/firebase-constants';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../../theme/index';

const propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
  index:PropTypes.number
};

function PopularMovieItem({ movie,index }) {
  const { navigate } = useNavigation();
  const { id, title, poster_path: pic, release_date: date } = movie;
  const resourceUrl = useRemoteConfig({ key: THEMOVIEDB_RESOURCE_URL });

  return (
    <View  
   
    style={{ width: 130 ,elevation:12,shadowColor:Colors.green}}>
      <TouchableOpacity onPress={() => navigate('movie', { id })}>
       

        <LinearGradient 
         colors={['#000000bb', '#ffffff00']} 
        style={{
          position:"absolute",
          top:0,
          left:0,
          height:50,
          width:120,
          zIndex:99,
          borderRadiusTop: 5 
        }} >
           <Text color={Colors.green} extraLarge={true} bold={true} >{" #"+(index+1)}</Text>
        </LinearGradient>


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
  );
}

PopularMovieItem.propTypes = propTypes;

export default PopularMovieItem;
