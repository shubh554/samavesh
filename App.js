/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Otp from './screens/Otp';
import Home from './screens/Home';
import OnboardingScreen from './screens/OnboardingScreen';
import Details from './screens/Details';
import Booking from './screens/Booking';
import Confirmed from './screens/Confirmed';
import DrawerContent from './screens/DrawerContent';
import AllBookings from './screens/AllBookings';
import LoginEmail from './screens/LoginEmail';
import SetPassword from './screens/SetPassword';
import Header1 from './components/Header';
import Splash from './screens/Splash';
import LoginMobile from './screens/LoginMobile';
import {Logincontext} from './contexts/Logincontext'
import Userinfo from './screens/Userinfo';
import Confirm from './screens/Confirm';
import Wallet from './screens/Wallet';
import Profile from './screens/Profile';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



const App = () =>{
  const [mobile, setMobile] = React.useState('Enter Your Mobile Number');
  const [token, setToken] = React.useState(0);
  const [login, setLogin] = React.useState(0);
  const OnboardingStack = ()=>{
      return(  <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Splash" component={Splash} />
        <Stack.Screen options={{headerShown: false}} name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen options={{headerShown: false}} name="LoginEmail" component={LoginEmail} />
        <Stack.Screen options={{headerShown: false}} name="LoginMobile" component={LoginMobile} />
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="Otp" component={Otp} />
        <Stack.Screen options={{headerShown: false}} name="Userinfo" component={Userinfo} />
        <Stack.Screen options={{headerShown: false}} name="SetPassword" component={SetPassword} />
        </Stack.Navigator>)
  }

  const HomeStack = ()=>{
    return(  <Stack.Navigator>
  
      <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Stack.Screen options={{headerShown: false}} name="Details" component={Details} />
      <Stack.Screen options={{headerShown: false}} name="Booking" component={Booking} />
      <Stack.Screen options={{headerShown: false}} name="Confirmed" component={Confirmed} />
      <Stack.Screen options={{headerShown: false}} name="AllBookings" component={AllBookings} />
      <Stack.Screen options={{headerShown: false}} name="Confirm" component={Confirm} />
      <Stack.Screen options={{headerShown: false}} name="Wallet" component={Wallet} />
      <Stack.Screen options={{headerShown: false}} name="Profile" component={Profile} />
    </Stack.Navigator>)
  }

  return (

   <NavigationContainer>
       <Logincontext.Provider value={{mobile,setMobile,token,setToken,setLogin,login}}> 
     {!login?<Drawer.Navigator initialRouteName="Onboard" options={{headerShown: false}}  drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Onboard" component={OnboardingStack} options={{headerShown: false}} />
        <Drawer.Screen name="HomeStack" component={HomeStack} options={{headerShown: false}} />
     </Drawer.Navigator>
     :
    <Drawer.Navigator initialRouteName="HomeStack" options={{headerShown: false}}  drawerContent={props => <DrawerContent {...props} />}>
   <Drawer.Screen name="HomeStack" component={HomeStack} options={{headerShown: false}} />
</Drawer.Navigator>
     
  }
    </Logincontext.Provider>
   </NavigationContainer>
  

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
