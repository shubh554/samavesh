import React,{useContext} from 'react'
import { StyleSheet, Text,SafeAreaView, View,Image ,TextInput,TouchableOpacity,KeyboardAvoidingView,ActivityIndicator} from 'react-native'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {Logincontext} from '../contexts/Logincontext';
import CheckBox from 'react-native-check-box'

GoogleSignin.configure({
    webClientId: '1097222311467-gv6u7kjb4n7a5uhshiltkv14lkqleiba.apps.googleusercontent.com',
  });

const SetPassword = ({navigation}) => {
    const [text, onChangeText] = React.useState("");
    const [text2, onChangeText2] = React.useState("");
    const [loading, setLoading] = React.useState(0);
    const [exists, setExists] = React.useState("");
    const [checked, setChecked] = React.useState(false);
    const {token} = useContext(Logincontext)
    const {setLogin} = useContext(Logincontext);

    console.log(token)
    
    const onGoogleButtonPress =async () =>{
         // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
    }

  const submit = () =>{
     // alert(text2)
      if(text && text2)
      {
        setLoading(1)  
        fetch(`https://codeedge.in/samavesh/api/setpassword?password=${text}&password_confirmation=${text2}`,
        {
           method:'post',
           headers:new Headers({
             Accept: 'application/json',
             Authorization: `Bearer ${token}`
 
           })
 
        }
        )
        .then((response)=>{
            return response.json()
        })
        .then((json)=>{
            setLoading(0)
            setLogin(1)
            json.success?navigation.navigate('HomeStack'):alert(json.errors.password[0])
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
      <Text style={styles.heading}>Set Your Password</Text>
   <View style={styles.inputContainer}>
    <TextInput
    style={styles.input}
    onChangeText={(text)=>{onChangeText(text)}}
    placeholder = "Enter Your Password"
    placeholderTextColor="#979797" 
    
    secureTextEntry={true}
    multiline={false}
    keyboardType="default"
    autoCapitalize={'none'}
  />
  </View>

  <View style={styles.inputContainer}>
 

 <TextInput
     style={styles.input}
     onChangeText={(text)=>{onChangeText2(text)}}
     placeholder = "Confirm Your Password"
     placeholderTextColor="#979797" 
     keyboardType="email-address"
   />
   </View>
   <View style={{flexDirection:'row',marginLeft:'5%'}}>
     <Text>I agree to terms & conditions</Text>
   <CheckBox
    style={{flex: 1, padding: 0}}
    onClick={()=>{setChecked(!checked)}}
    isChecked={checked}
    leftText={""}
/>
</View>
  <TouchableOpacity style={styles.button}
    onPress ={()=>{submit()}}
  >
      {!loading?<Text style={styles.buttonText}>Get Started !</Text>:
      <ActivityIndicator size="small" color="#ffffff" />}
 </TouchableOpacity>
 
  </View>

      
     </KeyboardAvoidingView>
    </SafeAreaView>
    )
}

export default SetPassword

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
        backgroundColor:'#D3D3D3',
        width:'100%',
        borderRadius:30,
        color:'#AC849C',
        marginBottom:25
      },
      heading:{
          fontSize:26,
          textAlign:'center',
          marginBottom:'10%',
          color:'#000000'
      },
      subHeading:{
          fontSize:14,
          textAlign:'center',
          marginTop:'2%',
          color:'#000000'
      },
      button:{
       width:'100%',
       height:56,
       backgroundColor:'#512536',
       borderRadius:30,
       marginTop:'5%',
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
          
      }
})
