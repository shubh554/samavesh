import React,{useContext,useRef,useEffect} from 'react'
import { StyleSheet, Text,SafeAreaView, View,Image ,TextInput,TouchableOpacity,KeyboardAvoidingView,ActivityIndicator,Button,ScrollView} from 'react-native'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {Logincontext} from '../contexts/Logincontext';
import {Picker} from '@react-native-picker/picker';
import { List } from 'react-native-paper';
import DatePicker from 'react-native-neat-date-picker'

import dayjs from 'dayjs';

GoogleSignin.configure({
    webClientId: '1097222311467-gv6u7kjb4n7a5uhshiltkv14lkqleiba.apps.googleusercontent.com',
  });


const Userinfo = ({navigation}) => {
    const [text, onChangeText] = React.useState("");
    const [loading, setLoading] = React.useState(0);
    const [exists, setExists] = React.useState("");
    const [selectedLanguage, setSelectedLanguage] = React.useState();
    const [showDatePicker, setShowDatePicker] = React.useState(false);
    const {token} = useContext(Logincontext)
    const pickerRef = useRef();
    console.log(token)

    
    const {setMobile} = useContext(Logincontext)
    
    
    const onGoogleButtonPress =async () =>{
         // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
    }

    useEffect(() => {
      // Update the document title using the browser API
    //  alert(0)
    },[]);


    const openDatePicker = () => {
      setShowDatePicker(true)
    }
  
    const onCancel = () => {
      // You should close the modal in here
      setShowDatePicker(false)
    }
  
    const onConfirm = ( date ) => {
      // You should close the modal in here
      setShowDatePicker(false)
      console.log(date.getDate())
      
     
    }

    

    const open=()=> {
      pickerRef.current.focus();
    }
    
    const close=() => {
      pickerRef.current.blur();
    }


    

    const submit = () =>{
     
     // navigation.navigate('SetPassword');
     if(text)
     {
     // alert(token)
      setLoading(1)
      fetch(`https://codeedge.in/samavesh/api/usersetup?name=${text}&dob=11-11-1995&city=Ahemdabad&source=${selectedLanguage}`,
       {
          method:'post',
          headers:new Headers({
            Accept: 'application/json',
            Authorization: `Bearer ${token}`

          })

       }
       )
       .then((response)=>{
        return response.text()
       })
       .then((json)=>{
      // alert(JSON.stringify(json))
      
          setLoading(0)
        json.success?navigation.navigate('SetPassword'):navigation.navigate('SetPassword')
       }) 
     }
     
     
    }


    
    return (
       
       <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView>
             <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
        resizeMode = 'contain'
      />
       <View style={styles.loginBlock}>
          <Text style={styles.heading}>Enter Your Details</Text>
       <View style={styles.inputContainer}>
       <TouchableOpacity style={{width:'100%',height:35,borderWidth:1,marginBottom:15,borderRadius:30,borderColor:'#512536',justifyContent:'center'}}>
       <TextInput
        style={styles.input}
        onChangeText={(text)=>{onChangeText(text)}}
        placeholder = "Enter Your Name"
        placeholderTextColor="#512536"
        
      />
      </TouchableOpacity>
        <TouchableOpacity onPress={openDatePicker} style={styles.buttonSmall}><Text style={{color:'#ffffff'}}>Choose Your Date Of Birth</Text></TouchableOpacity>
      <DatePicker
        isVisible={showDatePicker}
        mode={'single'}
        onCancel={onCancel}
        onConfirm={onConfirm}
        colorOptions ={{
          headerColor:'#512536',
          weekDaysColor:'#512536',
          selectedDateColor:'#512536',
          selectedDateBackgroundColor:'#512536',
          confirmButtonColor:'#512536'
        }
         
        }
      />
       
           
           <TouchableOpacity style={styles.pickerContiner}
             onPress={open}
           >
            <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }
        numberOfLines={1}
        ref={pickerRef}
        itemStyle={{fontSize:1}}
        style={{fontSize:10}}
        dropdownIconColor={"#512536"}
        >
        <Picker.Item color={'#512536'}label="How Did You Come To Know About Us?" value="java" />
        <Picker.Item color={'#512536'} label="Instagram" value="Instagram" />
        <Picker.Item color={'#512536'} label="Facebook" value="WhatsApp Message" />
        <Picker.Item color={'#512536'} label="Word Of Mouth" value="Word Of Mouth" />
      </Picker>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
        onPress ={()=>{submit()}}
      >
          {!loading?<Text style={styles.buttonText}>Submit</Text>:
          <ActivityIndicator size="small" color="#ffffff" />}
     </TouchableOpacity>

     
     </View>
      </View>
    
        
         </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Userinfo

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#E5E5E5',
    },
    logo:{
        marginTop:'10%',
        height:200,
        width:200,
        marginLeft:'25%'
    },
    slogo:{
       
        height:40,
        width:40,
     },
    loginBlock:{
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
      
        width:'100%',
        borderRadius:30,
        color:'#512536'
      },
      heading:{
          fontSize:26,
          textAlign:'center',
          marginBottom:'10%',
          color:'#000000'
      },
      subHeading:{
          fontSize:17,
          textAlign:'center',
          marginTop:'10%',
          color:'#000000'
      },
      button:{
       width:'100%',
       height:56,
       backgroundColor:'#512536',
       borderRadius:30,
       marginTop:'10%',
       justifyContent:'center'
      },
      buttonSmall:{
        width:'100%',
        height:35,
        borderRadius:30,
        backgroundColor:'#512536',
        justifyContent:'center',
        alignItems:'center'
        
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
         marginTop:'20%',
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
      pickerContiner:{
        width:'100%',
        height:40,
        borderWidth:1,
        marginTop:15,
        borderRadius:30,
        justifyContent:'center',
        borderColor:'#512536'
      }
})
