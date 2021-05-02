import React from 'react';
import {View} from 'react-native';
import {List,Person} from '../../components/index';



const Directors = ({crew}) => {
    return <View style={{ marginTop: 20 }}>
    <List
      title="Directors"
      keyExtractor={({ credit_id: id }) => String(id)}
      data={crew.filter(({ job }) => job === 'Director')}
      renderItem={({ item: { id, name, profile_path: profilePath } }) => (
        <Person id={id} name={name} profilePath={profilePath} />
      )}
    />
  </View>
}

export default Directors
