import React from 'react';
import { View } from 'react-native';
import { Container } from '../../components/index';
import {
  PopularTVList,
  PopularMovieList,
  PopularPersonList,
} from './components/index';



const Home = () => (
  <Container>
       <View style={{ marginTop: 20 }} />
       <PopularMovieList />
       <PopularPersonList />
       <PopularTVList />
  </Container>
);

export default Home;
