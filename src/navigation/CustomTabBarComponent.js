import React from "react";
import {StyleSheet,TouchableOpacity,View,Text} from 'react-native'
import {Colors} from '../theme/index'
import LinearGradient from 'react-native-linear-gradient'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import FA from 'react-native-vector-icons/FontAwesome'
import IO from 'react-native-vector-icons/Ionicons'

const Icon=({label,focused})=>{
  const COLOR=focused?Colors.white:Colors.lightGrey
  const SIZE=focused?20:15

  if(label == "homeStack")
      return <IO name='home-outline' color={COLOR} size={SIZE} /> 
  if(label == "a")
      return <IO name='search'       color={COLOR} size={SIZE} /> 
  if(label == "profileStack")      
      return <FA name='user-o'       color={COLOR} size={SIZE} /> 
}

const CustomTabBarComponent = ({ state, descriptors, navigation ,options}) => {

  const focusedOptions = descriptors[state.routes[state.index].key].options;
 
  if (focusedOptions.tabBarVisible === false) return null;

  const gradient = {
    // start:{x:0, y:2} ,
    // end:{x:0, y: -1} ,
    colors:[Colors.black,Colors.black],
    style:styles.linearGradient,
  }
  
  
  const Icons=()=>{
    return state.routes.map((route, index) => {
      const { options } = descriptors[route.key];
      const label = options.tabBarLabel !== undefined 
      ? options.tabBarLabel 
      : options.title !== undefined  
        ? options.title: route.name;

       const isFocused = state.index === index;
      console.log({isFocused,label})

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      };

      return (
        <TouchableOpacity
          key={index}
          onPress={onPress}
          // onLongPress={onLongPress}
          style={{ flex:1}}
        >
          <View style={{justifyContent:'center',alignItems:'center'}}>
              <Icon  label={label} focused={isFocused} />
          </View>
        </TouchableOpacity>
      );
    })
  }
  
  return <View style={styles.bg} >
    <LinearGradient {...gradient} >
     <View style={{ flexDirection: 'row' }}>
       <Icons />
    </View>
  </LinearGradient>
  </View>
};


var styles = StyleSheet.create({
  linearGradient:{
      width:"100%",
      height:50,
      // borderTopLeftRadius:25,
      // borderTopRightRadius:25,
      padding:16,
      elevation:10,
      overflow:'hidden',
      justifyContent:'center',
      alignItems:'center',
  },
  bg:{
      width:"100%",
      position:"absolute",
      height:50,
      bottom:0,
      left:0,
      backgroundColor:"transparent",
      borderColor:Colors.green,
      borderTopWidth:1
  },
});
export default CustomTabBarComponent;






