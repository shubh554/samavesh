import React from 'react'
import { StyleSheet, Text, View ,Image,TouchableOpacity,ScrollView} from 'react-native';
import Header from '../components/Header'
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Details = ({navigation,route}) => {
  //alert(JSON.stringify(props))
  const input = route.params
  //alert(JSON.stringify(input.item))
  
    return (
        <View style={styles.container}>
        <Header navigation={navigation}/>
         <View style={styles.banner}>
         <Image
         style={{width:windowWidth,height:200,borderRadius:20}}
         source={{uri:`https://codeedge.in/samavesh/${input.item.image}`}}
         
         resizeMode='contain'
       />
       </View>
       <Text style={styles.heading}>{input.item.name}</Text>
       <Text style={styles.subheading}><Icon name="location-arrow" size={20} color="#900" />{input.item.address}</Text>
       
       
       <View style={styles.actionButtons}>
       

       <TouchableOpacity style ={styles.bookingButton}
       onPress ={()=>{navigation.navigate('Booking',{id:input.item.id})}}
       >
           <Text style={{color:'#ffffff'}}>Book A Session</Text>
       </TouchableOpacity>
       </View>
       
       <Image
         style={{width:'100%',marginTop:'5%'}}
         source={require('../assets/review_image.png')}
         resizeMode = 'contain'
       />


         </View>
    )
}

export default Details

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
          flex:1,
          backgroundColor:'#ffffff'
      },
      searchBar:{
        width:'90%',
        marginRight:'5%',
        marginLeft:'5%',
        marginTop:-20
      },
      banner:{
        padding:0,
        borderWidth:0,
        width:'100%',
        marginBottom:'5%'
      },
      filter:{
        flexDirection:'row',
        justifyContent:'space-between',
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
      contactButton:{
          width:'35%',
          borderWidth:0,
          height:50,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#12B347',
          borderRadius:10
      },
      bookingButton:{
        width:'50%',
        borderWidth:0,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#512536',
        borderRadius:10
    },
      actionButtons:{
          flexDirection:'row',
          justifyContent:'space-evenly'
      },
      heading:{
        fontSize:30,
        textAlign:'center',
        marginBottom:'1%',
        color:'#512536'
      },
      subheading:{
        fontSize:15,
        textAlign:'left',
        marginBottom:'5%',
        color:'#000000',
        marginLeft:'10%',
        marginRight:'10%'
      }
})
