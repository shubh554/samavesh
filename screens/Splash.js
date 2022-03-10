import React,{useEffect,useContext} from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Logincontext} from '../contexts/Logincontext';


const Splash = ({navigation}) => {
    const {setToken} = useContext(Logincontext);
    const {setLogin} = useContext(Logincontext);
    useFocusEffect(() => {
        setTimeout(async() => {
            login = await retrieveData()
        //alert(login)
        if(login){
        setToken(login)
        setLogin(1)
        navigation.navigate('HomeStack')
        }
        else{
            navigation.navigate('Onboarding')
        }
            }, 4500);
       
        
      
      });

      const retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('token');
          if (value !== null) {
            // We have data!!
            return value
          }
          else
          return 0;
        } catch (error) {
          return 0;
        }
      };
  
  
    return (
        <View>
            <Image
        style={{width:'100%',height:'100%'}}
        source={require('../assets/splash.gif')}
      /> 
   
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({})
