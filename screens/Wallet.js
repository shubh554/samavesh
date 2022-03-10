import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native';
import Header from '../components/Header'
import { ScrollView } from 'react-native-gesture-handler';

const Wallet = ({navigation}) => {
    return (
        <View style={{flex:1}}>
        <Header navigation={navigation}/>
        <View style={styles.walletContainer}>
        <View style={styles.walletLeft}>
        <Image
        style={{width:'80%',height:'80%'}}
        source={require('../assets/wallet-color.png')}
        />    
       </View>
       <View style={styles.walletCenter}>
           <Text style={{fontSize:20,fontWeight:'bold',color:'#000000'}}>INR. 300</Text>
       </View>   
       <View style={styles.walletLeft}>
        <Image
        style={{width:'35%',height:'35%'}}
        source={require('../assets/plus.png')}
        />    
       </View> 
        </View>
        <Text style={{marginTop:'15%',marginLeft:'10%',fontSize:15,color:'#000000'}}>Recent Transactions</Text>
      
        <ScrollView style={{flex:1,marginLeft:'10%',marginTop:'5%'}}>
         <View style={styles.recentTransaction}>
         <View style={styles.walletLeft}>
        <Image
        style={{width:'50%',height:'50%'}}
        source={require('../assets/arrow-up.png')}
        />    
       </View>
       <View style={styles.walletCenter}>
           <Text style={{fontSize:20,fontWeight:'bold',color:'#000000'}}>INR. 300</Text>
       </View>   
       <View style={styles.walletLeft}>
        <Image
        style={{width:'33%',height:'31%'}}
        source={require('../assets/info.png')}
        />    
       </View> 
         </View>
         <View style={styles.recentTransaction}>
         <View style={styles.walletLeft}>
        <Image
        style={{width:'50%',height:'50%'}}
        source={require('../assets/arrow-down.png')}
        />    
       </View>
       <View style={styles.walletCenter}>
           <Text style={{fontSize:20,fontWeight:'bold',color:'#000000'}}>INR. 300</Text>
       </View>   
       <View style={styles.walletLeft}>
        <Image
        style={{width:'33%',height:'31%'}}
        source={require('../assets/info.png')}
        />    
       </View> 
         </View>
        </ScrollView>
        </View>
    )
}

export default Wallet

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:5,
        paddingRight:5
      
      },
      walletContainer:{
          height:'12%',
          width:'80%',
          borderWidth:0,
          marginLeft:'10%',
          flexDirection:'row',
          backgroundColor:'#F5F5F5',
          borderRadius:15
          
      },
      walletLeft:{
          height:'100%',
          width:'30%',
          borderWidth:0,
          alignItems:'center',
          justifyContent:'center'
      },
      walletCenter:{
        height:'100%',
        width:'40%',
        borderWidth:0,
        alignItems:'center',
        justifyContent:'center'
      },
      recentTransaction:{
        height:90,
        width:'80%',
        borderWidth:0,
        flexDirection:'row',
        backgroundColor:'#F5F5F5',
        borderRadius:15,
        marginTop:15
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