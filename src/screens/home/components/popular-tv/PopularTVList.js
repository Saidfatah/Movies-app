import React from 'react';
import { useFetch } from '../../../../hooks/index';
import { List, Loading } from '../../../../components/index';
import PopularTVItem from './PopularTVItem';

const PopularTVList = () => {
  const { response, loading } = useFetch({ path: 'tv/popular' });
  const { results: data } = response || {};

  return (loading
    ? <Loading />
    : (
      <List
        data={data}
        title="Popular TV Show"
        onViewAllPress={() => {}}
        keyExtractor={({ id }) => String(id)}
        renderItem={({ item }) => <PopularTVItem tvshow={item} />}
      />
    )
  );
};

export default PopularTVList;
