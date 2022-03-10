import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import {Logincontext} from '../contexts/Logincontext';
import { useFocusEffect } from '@react-navigation/native';
import Header1 from '../components/Header'

const AllBookings = ({navigation}) => {
  const {token} = React.useContext(Logincontext);
  const [bookings, setBookings] = React.useState(0);
  React.useEffect(() => {
     
    fetch(`https://codeedge.in/samavesh/api/user/myappointments`,
    {
       method:'get',
       headers:new Headers({
         Accept: 'application/json',
         Authorization: `Bearer ${token}`

       })}
    )
    .then((response)=>{
      return response.json()
    })
    .then((json)=>{
      //alert(json)
      setBookings(json.data)
    })
  
  },[]);
  
  return (
       
       <View style={styles.container}>
         <Header1 navigation={navigation}/>
         <Text style={{fontSize:22,textAlign:'center',color:'#000000'}}>My Bookings</Text>
 
        { bookings?bookings.map((item)=>{
         return <View style={styles.bookings}>
         <View style={styles.leftSection}>
         <Image
          style={{height:'100%',width:'100%'}}
          source={require('../assets/booking_list.png')}
          resizeMode = 'contain'
        />
         </View>
          <View style={styles.rightSection}>
          <Text style={{color:'#000000'}}>October 9, 2021</Text>
          <Text style={{color:'#000000'}}>{item.centerinfo.name}</Text>
          
          <TouchableOpacity style={{height:'20%',width:'80%',borderWidth:0,marginTop:'25%',borderRadius:5,alignItems:'center',justifyContent:'center',backgroundColor:'#AC849C'}}>
             <Text style={{color:'white'}}>{item.status}</Text>
          </TouchableOpacity>
         </View>
        </View>
       }):<Text>Loading</Text>} 
       </View>
    )
}

export default AllBookings

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
      container:{
          flex:1
      },
      searchBar:{
        width:'90%',
        marginRight:'5%',
        marginLeft:'5%',
        marginTop:-20
      },
      banner:{
        padding:0
      },
      filter:{
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingLeft:10,
        paddingRight:10
      },
      listContainer:{
        flex:1,
        height:'60%',
        borderWidth:0
  
      },
      listItem:{
         height:200,
         width:'90%',
         marginRight:'5%',
         marginLeft:'5%',
         borderWidth:0,
         marginTop:'5%',
         justifyContent:'flex-end',
         borderRadius:15,
  
      },
      listDetails:{
        height:'40%',
        width:'100%',
        borderWidth:0,
        paddingLeft:25,
        color:'#ffffff'
        
      },
      rating:{
        flexDirection:'row'
      },
      distance:{
        flexDirection:'row'
      },
      bookings:{
          height:120,
          width:'80%',
          marginLeft:'10%',
          marginRight:'10%',
          borderWidth:0,
          marginTop:'5%',
          flexDirection:'row'

      },
      leftSection:{
          width:'45%',
          height:'100%',
          borderWidth:0
      },
      rightSection:{
          width:'55%',
          height:'100%',
          borderWidth:0,
          padding:10
      }
})
