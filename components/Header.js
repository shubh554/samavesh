import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Header1 = ({navigation}) => {
    return (
        <View style={styles.header}>
       
        <TouchableOpacity
        style={styles.icon}
        onPress={()=>navigation.toggleDrawer()}
         >
        <Image
         style={styles.icon}
         source={require('../assets/hamburger.png')}
         resizeMode = 'contain'
        
       />
       </TouchableOpacity>
            
                 <Image
         style={styles.logo}
         source={require('../assets/logo.png')}
         resizeMode = 'contain'
       />
             <TouchableOpacity
        style={styles.icon}
        onPress={()=>navigation.navigate('Wallet')}
         >
              <Image
         style={styles.icon}
         source={require('../assets/wallet.png')}
         resizeMode = 'contain'
       />
       </TouchableOpacity>
         </View>
    )
}

export default Header1

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:5,
        paddingRight:5
      
      },
      logo:{
       
          height:110,
          width:110,
         
      },
      icon:{
       
        height:30,
        width:30,
       
    },
})
