import React,{useState} from 'react'
import { Image, View} from 'react-native';
import {Colors} from "../../theme/index"
import { Loading } from '../../components/index';


const ActorImage = ({resourceUrl,file_path}) => {
    const [imageLoading, setimageLoading] = useState(false)



    return <View style={{position:"relative"}} >
        <Image 
         source={{ uri: `${resourceUrl}original${file_path}` }} 
         onLoadStart={e=>setimageLoading(true)}
         onLoadEnd={e=>setimageLoading(false)}
         style={{
           width:100,
           height:100,
           borderRadius:25,
         }} 
        />
       <View style={{
           position:"absolute",
           zIndex:99,
           left:50-30,
           top:50-30
       }} >
           {imageLoading && <Loading />}
       </View>
         
    </View>
}

export default ActorImage
