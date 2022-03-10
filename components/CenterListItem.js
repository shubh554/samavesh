import React from 'react'
import { StyleSheet, Text, View,Image ,ScrollView,ImageBackground,TouchableOpacity } from 'react-native'

const CenterListItem = (props) => {
    const {item,navigation} = props;
  //  console.warn(item)
    return (
       
        <View style={styles.listItem}>
        <ImageBackground  source={{uri:`https://codeedge.in/samavesh/${item.image}`}} resizeMode="cover" style={{flex:1,justifyContent:'flex-end',borderRadius:15}} imageStyle= 
{{borderRadius:15}}>
          <View style={styles.listDetails}>

       <View style={styles.rating}> 
        <Text style={{  color:'#ffffff'}}>{5}</Text>
         <Image
        style={{width:15}}
        source={require('../assets/star_icon.png')}
        resizeMode = 'contain'
      />
      </View>
      <Text style={{fontSize:22,  color:'#ffffff',}}>{item.name}</Text>
      <View style={styles.distance}> 
        <Text style={{  color:'#ffffff'}}>{"3 Kms Away"}</Text>
        <Text style={{marginLeft:'10%',  color:'#ffffff'}}>{"Rs. 350 to Rs. 500"}</Text>
        <TouchableOpacity style={{width:35,marginLeft:'15%',marginTop:'-4%'}}
        onPress = {()=>{navigation.navigate('Details',{item:item})}}
        >
                  <Image
        style={{width:35}}
        source={require('../assets/confirm_icon.png')}
        resizeMode = 'contain'
      />
      </TouchableOpacity>

      </View>
          </View>
          </ImageBackground>
        </View>
    )
}

export default CenterListItem

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
        color:'#ffffff',
        backgroundColor:'#512536'
        
      },
      rating:{
        flexDirection:'row'
      },
      distance:{
        flexDirection:'row',
  
        
      }
})
