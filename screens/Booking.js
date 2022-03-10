import React ,{useContext}from 'react'
import { StyleSheet, Text, View,Image ,TextInput,TouchableOpacity,ActivityIndicator} from 'react-native'
import DatePicker from 'react-native-date-picker';
import {Logincontext} from '../contexts/Logincontext';
import Header1 from '../components/Header'


const Booking = ({navigation,route}) => {
  const [date, setDate] = React.useState(new Date());
  const [loading, setLoading] = React.useState(0);
  const [text, onChangeText] = React.useState("");
  const [text2, onChangeText2] = React.useState("");
  const {token} = useContext(Logincontext);
  console.log(token)
  const input = route.params
  //alert(input.id)]]

  //alert(date)

  const submit = async ()=>{
  //  alert(text)
    if(text.length == 10)
    { 
      if(text2)
      {
       let json = await fetch(`https://codeedge.in/samavesh/api/user/newappointment?title=no%20title&description=${text2}&time=22-10-2021&center_id=1`,
        {
           method:'post',
           headers:new Headers({
             Accept: 'application/json',
             Authorization: `Bearer ${token}`
          })}
        )
        .then((response)=>{
          return response.json()
        })
        if(json.success)
        {
          navigation.navigate('Confirm')
        }
      }
      else
      {
        alert('Please Enter The Description')
      }
      //navigation.navigate('Confirm')
    }
    else{
      alert('Enter A Valid Mobile Number!')
    }
  }

    return (
        <View style={styles.container}>
         <Header1 navigation={navigation}/>
         <Text style={{fontSize:25,marginLeft:10,textAlign:'center',color:'#000000'}}>Make An Appointment</Text>
         <View style={styles.loginBlock}>
        
       <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
       // onChangeText={(text)=>{onChangeText(text)}}
       onChangeText={(text)=>{onChangeText(text)}}
        placeholder = "Enter Your Mobile Number"
        placeholderTextColor="#000000" 
      />
    </View>

    
    <DatePicker date={date} onDateChange={setDate} mode={"date"}
    androidVariant = 'nativeAndroid'

    />
    <View style={styles.inputContainerLarge}>
      <TextInput
        style={styles.input}
        onChangeText={(text)=>{onChangeText2(text)}}
        placeholder = "Description (Optional)"
        placeholderTextColor="#000000" 
      />
    </View>
   

    
     

      <TouchableOpacity style={styles.button}
        onPress ={()=>{submit()}}
      >
          {!loading?<Text style={styles.buttonText}>Confirm</Text>:
          <ActivityIndicator size="small" color="#ffffff" />}
     </TouchableOpacity>

    
    
      </View>
         </View>
    )
}

export default Booking

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
          backgroundColor:'#FFFFFF'
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
        //backgroundColor:'#D3D3D3',
        width:'100%',
        borderRadius:30,
        color:'#AC849C',
        marginTop:'5%',
        borderWidth:1
      },
      inputContainerLarge:{
        height: 120,
        borderWidth: 0,
       // backgroundColor:'#D3D3D3',
        width:'100%',
        borderRadius:30,
        color:'#AC849C',
        marginTop:'5%',
        borderWidth:1
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
