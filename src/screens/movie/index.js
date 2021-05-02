import React from 'react';
import { View, StyleSheet, ImageBackground} from 'react-native';
import {Loading,Container,HeaderBack} from '../../components/index';
import { Colors } from '../../theme/index';
import { useFetch, useRemoteConfig } from '../../hooks/index';
import { YOUTUBE_URL, THEMOVIEDB_RESOURCE_URL} from '../../constants/firebase-constants';
import ListOfActors from "./ListOfActors"
import Directors from "./Directors"
import Overview from "./Overview"
import Header from "./Header"
import CategoryRartings from "./CategoryRartings"



const Movie = ({ route: { params } }) => {
  const { id: movieId = 0 } = params;
  const youtubeUrl = useRemoteConfig({ key: YOUTUBE_URL });
  const resourceUrl = useRemoteConfig({ key: THEMOVIEDB_RESOURCE_URL });
  const { response, loading } = useFetch({
    path: `/movie/${movieId}?append_to_response=videos,credits`,
  });
  const {
    loadingContainer,
    backgroundContainer,
  } = styles;
  const {
    credits,
    title,
    videos,
    runtime,
    overview,
    genres = [],
    poster_path: pic,
    release_date: date,
    vote_average: rating,
  } = response || {};
  const { cast, crew } = credits || {};
  const duration = `${Math.floor(runtime / 60)}h ${runtime % 60}min`;


   if(loading)
    return  <View style={loadingContainer}>
      <Loading />
    </View>

    return  <ImageBackground source={{ uri: `${resourceUrl}original${pic}` }}  style={backgroundContainer}>
       <Container  opacity={.8} >
         <HeaderBack />
         <Header  {...{title,videos,youtubeUrl,date}} />
         <CategoryRartings  {...{genres,rating,duration}} />
         <Overview overview={overview} />
         <Directors crew={crew} />
         <ListOfActors cast={cast} />
       </Container>
  </ImageBackground>
  
};

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: Colors.black,
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 16,
  },
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
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black,
  },
});

export default Movie;
