import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'

const Confirmed = () => {
    return (
        <View style={styles.container}>
        <View style={styles.header}>
        <Image
         style={styles.icon}
         source={require('../assets/hamburger.png')}
         resizeMode = 'contain'
       />
            
                 <Image
         style={styles.logo}
         source={require('../assets/logo.png')}
         resizeMode = 'contain'
       />
              <Image
         style={styles.icon}
         source={require('../assets/location.png')}
         resizeMode = 'contain'
       />
         </View>
         <Image
         style={{width:'100%',marginTop:'5%'}}
         source={require('../assets/confirmed.png')}
         resizeMode = 'contain'
       />
         </View>
    )
}

export default Confirmed

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
        padding:0
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
      },loginBlock:{
        height:'30%',
        width:'80%',
        marginLeft:'10%',
        marginRight:'10%',
        borderWidth:0
    },
    input: {
       
        padding: 10,
        height: 56,
      },
      inputContainer:{
        height: 56,
        borderWidth: 0,
        backgroundColor:'#D3D3D3',
        width:'100%',
        borderRadius:30,
        color:'#AC849C',
        marginTop:'5%'
      },
      heading:{
          fontSize:26,
          textAlign:'center',
          marginBottom:'10%'
      },
      subHeading:{
          fontSize:17,
          textAlign:'center',
          marginTop:'10%'
      },
      button:{
       width:'100%',
       height:56,
       backgroundColor:'#AC849C',
       borderRadius:30,
       marginTop:'10%',
       justifyContent:'center'
      },
      buttonText:{
          color:'#ffffff',
          textAlign:'center',
          fontSize:20
      },
      socialMedia:{
         height:'10%',
         width:'80%' ,
         marginLeft:'10%',
         marginRight:'10%',
         marginTop:'10%',
         borderWidth:0 ,
         flexDirection:'row',
         justifyContent:'space-between'        
      },
      bottomMessage:{
          height:'10%',
          width:'80%',
          marginLeft:'10%',
          marginRight:'10%',
          borderWidth:0,
          marginTop:'5%',
          color:'#828282'
          
      },
      loginBlock:{
        height:'30%',
        width:'80%',
        marginLeft:'10%',
        marginRight:'10%',
        borderWidth:0,
        marginTop:'15%'
    }
  
})
