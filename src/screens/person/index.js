import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Colors } from '../../theme/index';
import { Container, Loading,  } from '../../components/index';
import { useFetch, useRemoteConfig } from '../../hooks/index';
import { THEMOVIEDB_RESOURCE_URL } from '../../constants/firebase-constants';
import ActorImages from "./ActorImages"
import SnapshotInfo from "./SnapshotInfo"
import KnownFor from "./KnownFor"
import Bography from "./Bography"

const Person = ({ route: { params } }) => {
  const { id: personId = 0 } = params;
  const resourceUrl = useRemoteConfig({ key: THEMOVIEDB_RESOURCE_URL });
  const { response, loading } = useFetch({ path: `/person/${personId}` });
  const { response:knownFor, loading:knownForLoading } = useFetch({ path: `/person/${personId}/movie_credits` });
  const { response:images, loading:imagesLoading } = useFetch({ path: `/person/${personId}/images` });
  const { profile_path: pic } = response || {};

 
  const {
    loadingContainer,
  }=styles
  

  if(loading)
  return <View style={loadingContainer}>
     <Loading />
  </View>


  const{
    name,
    birthday,
    known_for_department,
    place_of_birth,
    popularity,
    deathday,
    biography
  }=response

  return  <Container >
        <View style={{
          position:"relative",
          backgroundColor:Colors.black,
          flex:1
          }} >
            <SnapshotInfo {...{resourceUrl,name,popularity,pic}} />
            <KnownFor {...{knownFor:knownFor && knownFor.cast ,resourceUrl,knownForLoading}} />
            <Bography  biography={biography} />
            <ActorImages {...{resourceUrl,images:images ?images.profiles:[]}} />
        </View>
  </Container>
};

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: Colors.black,
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black,
  },
  generalInfoStyle:{
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    bottom:-50,
    left:0,
  },
  nameStyle:{
    color:Colors.white,
    fontSize:30,
    fontFamily:"BodoniFLF-Bold"
  },
  lightText:{
    fontSize:14,
    color:Colors.lightGrey
  },
  FlexHSpaceBettwen:{
    display:"flex",
    flexDirection:"row",
    
    justifyContent:"space-between",
    alignItems:"center",
  },
  FlexVCenter:{
    display:"flex",
    flexDirection:"column",
  
    justifyContent:"center",
    alignItems:"center",
  },
  tag:{
    padding:2,
    paddingHorizontal:4,
    borderRadius:5,
    backgroundColor:Colors.lightGrey,
    }

});

export default Person;
