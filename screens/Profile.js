import React from 'react'
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { useFocusEffect } from '@react-navigation/native';
import {Logincontext} from '../contexts/Logincontext';


import Header1 from '../components/Header';

const Profile = ({navigation}) => {
  
    const [date, setDate] = React.useState(new Date());
    const [name, setName] = React.useState("");
    const {token} = React.useContext(Logincontext);
    
    useFocusEffect(() => {
        
 fetch(`https://codeedge.in/samavesh/api/user/userinfo`,
    {
           method:'get',
           headers:new Headers({
             Accept: 'application/json',
             Authorization: `Bearer ${token}`
 
           })})
           .then((response)=>{
               return response.json()
           })
           .then((json)=>{
             //  alert(json[0].dob)
             setName(json[0].name)
            
           })
        
      
      });

    return (
        <View style={{flex:1}}>
            <Header1 navigation={navigation}/>
             <Text style={{color:'#AC849C',fontSize:25,textAlign:'center',marginTop:'5%'}}>Your Profile</Text>
     <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder = {name}
        placeholderTextColor="#000000" 
        />
        </View>
      
        <View style={{marginLeft:'10%',marginTop:'5%'}}>
        <DatePicker date={date} onDateChange={setDate} mode={"date"}
    androidVariant = 'nativeAndroid'/>
        </View>
        {/* <TouchableOpacity style={styles.button}
       
      >
    <Text style={styles.buttonText}>Update</Text>
         
     </TouchableOpacity> */}
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    inputContainer:{
        height: 56,
        borderWidth: 0,
        backgroundColor:'#D3D3D3',
        width:'80%',
        borderRadius:30,
        color:'#AC849C',
        marginLeft:'10%',
        marginTop:'5%',
        paddingLeft:'5%'
      },
      button:{
        width:'80%',
        height:56,
        backgroundColor:'#AC849C',
        borderRadius:30,
        marginTop:'10%',
        marginLeft:'10%',
        justifyContent:'center'
       },
       buttonText:{
        color:'#ffffff',
        textAlign:'center',
        fontSize:20
    }

})
