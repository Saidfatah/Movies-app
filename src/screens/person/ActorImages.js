import React from 'react';
import { View ,Image  } from 'react-native';
import {List} from '../../components/index';
import ActorImage from "./ActorImage"

const ActorImages = ({images,resourceUrl}) => {
    
    
    
    return  <View>
    <List
     data={images}
     title="Images"
     keyExtractor={({ file_path:id }) => String(id)}
     renderItem={({ item }) => {
       const {
        file_path
       } = item;

       return <ActorImage {...{resourceUrl,file_path}} />
     }}
   />
  </View>

}

export default ActorImages
