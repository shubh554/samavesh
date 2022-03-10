import React from 'react'
import { View, Text ,Image} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';


const Confirm = ({navigation}) => {
   
    useFocusEffect(() => {
        
        const timer = setTimeout(() => {
            
            navigation.navigate('Home')
           
          }, 3500);
      });
   
    return (
        <View>
        <Image
    style={{width:'100%',height:'100%'}}
    source={require('../assets/tick.gif')}
  /> 
 </View>
    )
}

export default Confirm
