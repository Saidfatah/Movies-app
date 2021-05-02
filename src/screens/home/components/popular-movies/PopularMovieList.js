import React from 'react';
import { useFetch } from '../../../../hooks/index';
import { List, Loading } from '../../../../components/index';
import PopularMovieItem from './PopularMovieItem';

const PopularMovieList = () => {
  const { response, loading } = useFetch({ path: 'movie/popular' });
  const { results: data } = response || {};

  return (loading
    ? <Loading />
    : (
      <List
        data={data}
        title="Popular Movies"
        onViewAllPress={() => {}}
        keyExtractor={({ id }) => String(id)}
        renderItem={({ item,index }) => <PopularMovieItem movie={item} index={index} />}
      />
    )
  );
};

export default PopularMovieList;
