import React from 'react';
import { View,Text,Image ,Dimensions,StyleSheet,TouchableWithoutFeedback} from 'react-native';
import { Colors } from '../../theme/index';
import LinearGradient from 'react-native-linear-gradient';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import {useNavigation} from "@react-navigation/native"

const SnapshotInfo = ({resourceUrl,name,popularity,pic}) => {
    const navigation =useNavigation()

    const {
        nameStyle,
        FlexVCenter,
        FlexHSpaceBettwen,
        generalInfoStyle,
        lightText,
        tag,
        YellowText
     }=styles


    return <View style={{position:"relative",marginBottom:64}} >
      <TouchableWithoutFeedback onPress={e=>navigation.goBack()}  >
       <View style={{
        position:"absolute",
        top:0,
        left:0,
        zIndex:99,
        padding:16
        }} >
           <Icon 
           name="arrow-left"
           size={25}  
           color={Colors.green}
           />
          </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={e=>navigation.goBack()}  >
       <View style={{
        position:"absolute",
        top:0,
        right:0,
        zIndex:99,
        padding:16
        }} >
           <Icon 
           name="heart-box"
           size={25}  
           color={Colors.green}
           />
          </View>
      </TouchableWithoutFeedback>
    
     <Image 
      source={{ uri: `${resourceUrl}original${pic}` }} 
      style={{
        width,
        height:height/2,
      }} 
      />

     <View  style={generalInfoStyle}>
        <Text style={[nameStyle,{fontSize:30}]} >{name.split(" ")[0]}</Text>
       <Text style={[nameStyle,{fontSize:40}]} >{name.split(" ")[1]}</Text>
        <View style={{
           ...FlexHSpaceBettwen,
           paddingHorizontal:30,
           marginTop:16,
           width:"100%",
         

          }} 
          >
          
          <View  style={FlexVCenter}  >
              <View style={FlexHSpaceBettwen} >
                 <Icon
                   name={"star-circle"}
                   size={20}
                   color={Colors.green}
                  />
                  <Text style={YellowText}>9.0 </Text>
              </View>
             <Text style={lightText}>{popularity} </Text>
          </View>

          <View  style={FlexVCenter}  >
             <View style={{...FlexHSpaceBettwen,width:80}} >
                <Text style={{fontSize:20,color:Colors.white}}>20</Text>
                <Text style={{fontSize:20,color:Colors.white,fontFamily:"BodoniFLF-Roman"}}>of</Text>
                <Text style={{fontSize:20,color:Colors.white}}>129</Text>
             </View>
             <Text style={lightText}>watched titles</Text>
          </View>

          <View  style={FlexVCenter}  >
            <View style={tag}>
               <Text style={{fontSize:14,color:Colors.black} } >#top 20</Text>
            </View>
             <Text style={lightText}  >actors</Text>
          </View>
        
        </View>
     </View>
     <LinearGradient 
      colors={["#ffffff00", '#000']} 
      style={{  
      width:"100%",
      height:50,
      zIndex:0,
      position:"absolute",
      bottom:0,
      left:0,}}>
     </LinearGradient>


</View>
}

export default SnapshotInfo

const styles = StyleSheet.create({
    generalInfoStyle:{
      width:"100%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      position:"absolute",
      zIndex:99,
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
    YellowText:{
      fontSize:20,
      color:Colors.green,

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
      backgroundColor:Colors.green,
    }
  
  });
  