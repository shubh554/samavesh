import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';


const OnboardingScreen = ({navigation}) => {
    return (
        
           <Onboarding
  pages={[
    {
      backgroundColor: '#D9A76A',
      image: <Image source={require('../assets/logo.png')} style={{height:200,width:200}}
      resizeMode='contain'
      />,
      title: 'Prefer Your Customized Dress With Perfect Fit ?',
      subtitle: '',
    },
    {
        backgroundColor: '#D9A76A',
        image: <Image source={require('../assets/logo.png')} style={{height:200,width:200}}
        resizeMode='contain'/>,
        title: 'Hassle By Tailors?',
        subtitle: '',
      },
      {
        backgroundColor: '#D9A76A',
        image: <Image source={require('../assets/logo.png')} style={{height:200,width:200}}
        resizeMode='contain'/>,
        title: 'The Solution Is Samavesh',
        subtitle: '',
      }
    
  ]}
  onSkip ={()=>{navigation.navigate('LoginEmail')}}
  onDone ={()=>{navigation.navigate('LoginEmail')}}
/> 
        
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({})
