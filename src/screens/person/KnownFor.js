import React from 'react'
import {View} from "react-native"
import MovieItem from './MovieItem'
import { List, Loading } from '../../components/index';


const KnownFor = ({knownFor,knownForLoading,resourceUrl}) => {

    if(knownForLoading || !knownFor)
       return <Loading />

    return <List
    data={knownFor}
    title="Known for"
    onViewAllPress={() => {}}
    keyExtractor={({ id }) => String(id)}
    renderItem={({ item }) => <MovieItem movie={item}  resourceUrl={resourceUrl} />}
  />
  
}

export default KnownFor
