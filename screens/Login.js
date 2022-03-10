import React,{useContext} from 'react'
import { StyleSheet, Text,SafeAreaView, View,Image ,TextInput,TouchableOpacity,KeyboardAvoidingView,ActivityIndicator} from 'react-native'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {Logincontext} from '../contexts/Logincontext';
import AsyncStorage from '@react-native-async-storage/async-storage';

GoogleSignin.configure({
    webClientId: '1097222311467-gv6u7kjb4n7a5uhshiltkv14lkqleiba.apps.googleusercontent.com',
  });


const Login = ({navigation}) => {
    const [text, onChangeText] = React.useState("");
    const [text2, onChangeText2] = React.useState("");
    const {setToken} = useContext(Logincontext);
    const {setLogin} = useContext(Logincontext);
    const [loading, setLoading] = React.useState(0);
    
    const onGoogleButtonPress =async () =>{
         // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
    }

    const submit = async () =>{
       setLoading(1)
      if(text && text2)
      {
       let json = await fetch(`https://codeedge.in/samavesh/api/loginbypass?user=${text}&password=${text2}`,
        {
           method:'post',
        })
        .then((response)=>{
          return response.json()
        })
       //alert(JSON.stringify(json))
       setLoading(0)
       if(json.success)
       {
        await setToken(json.token)
        await setLogin(1)
        await AsyncStorage.setItem(
                      'token',
                      json.token
                    );
                    
                    navigation.navigate('HomeStack')
       }
       else{
         alert('Login Failed !')
       }
        
      }
      else{
        alert('Enter Your Details')
      }
    }



    return (
       
       <SafeAreaView style={styles.container}>
             <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
        resizeMode = 'contain'
      />
      
                <KeyboardAvoidingView style={styles.loginBlock}>
          <Text style={styles.heading}>Sign In</Text>
       <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={(text)=>{onChangeText(text)}}
        placeholder = "Enter Your Mobile Email / Mobile Number"
        placeholderTextColor="#979797" 
      
      />
        </View>
        <View style={[styles.inputContainer,{marginTop:15}]}>
      <TextInput
        style={styles.input}
        onChangeText={(text)=>{onChangeText2(text)}}
        placeholder = "Enter Your Password"
        placeholderTextColor="#979797" 
        secureTextEntry={true}
  
      />
        </View> 
      <TouchableOpacity style={styles.button}
        onPress ={()=>{submit()}}
      >
       {!loading?<Text style={styles.buttonText}>Submit</Text>:
          <ActivityIndicator size="small" color="#ffffff" />}
     </TouchableOpacity>

     <Text style={styles.subHeading}>or <Text onPress={()=>{navigation.navigate('LoginEmail')}} style={{color:'#512536', textDecorationLine: 'underline',  fontWeight: 'bold'}}>Sign Up</Text></Text>
   
      </KeyboardAvoidingView>
           </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#E5E5E5'
    },
    logo:{
        marginTop:'20%',
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
        backgroundColor:'#D3D3D3',
        width:'100%',
        borderRadius:30,
        color:'#AC849C'
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
          marginTop:'10%'
      },
      button:{
       width:'100%',
       height:56,
       backgroundColor:'#512536',
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
          
      }
})
