import React from 'react';
import {
  View,
} from 'react-native';
import {List,Person} from '../../components/index';



const ListOfActors = ({cast}) => {
    return <View>
    <List
      data={cast}
      title="Actors"
      keyExtractor={({ cast_id: id }) => String(id)}
      renderItem={({ item }) => {
        const { id, name, character, profile_path: profilePath } = item;

        return (
          <Person
            id={id}
            name={name}
            character={character}
            profilePath={profilePath}
          />
        );
      }}
    />
  </View>
}

export default ListOfActors
