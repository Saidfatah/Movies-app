import React from 'react';
import {  Text } from 'react-native';
import {Colors} from "../../theme/index"

const Logo = () => {
   return <Text 
    style={{
      fontFamily:"BodoniFLF-Bold",
      color:Colors.green,
      fontSize:30,
      letterSpacing:10
    }}
   >AFLAMONA</Text>
};

export default Logo;
