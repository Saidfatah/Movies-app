import React from 'react';
import { useFetch } from '../../../../hooks/index';
import { List, Loading, Person } from '../../../../components/index';

const PopularPersonList = () => {
  const { response, loading } = useFetch({ path: 'person/popular' });
  const { results: data } = response || {};

  return (loading
    ? <Loading />
    : (
      <List
        data={data}
        title="Popular Persons"
        onViewAllPress={() => {}}
        keyExtractor={({ id }) => String(id)}
        renderItem={({ item: { id, name, profile_path: profilePath } }) => (
          <Person
            id={id}
            name={name}
            profilePath={profilePath}
          />
        )}
      />
    )
  );
};

export default PopularPersonList;
