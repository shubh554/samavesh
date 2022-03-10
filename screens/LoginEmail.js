import React,{useContext} from 'react'
import { StyleSheet, Text,SafeAreaView, View,Image ,TextInput,TouchableOpacity,KeyboardAvoidingView,ActivityIndicator} from 'react-native'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {Logincontext} from '../contexts/Logincontext';

GoogleSignin.configure({
    webClientId: '1097222311467-gv6u7kjb4n7a5uhshiltkv14lkqleiba.apps.googleusercontent.com',
  });


const LoginEmail = ({navigation}) => {
    const [text, onChangeText] = React.useState("");
    const [loading, setLoading] = React.useState(0);
    const [exists, setExists] = React.useState("");
    const {setMobile} = useContext(Logincontext)
    
    const onGoogleButtonPress =async () =>{
         // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
    }

    const submit = () =>{
     
     if(text.length >0)
      {
        setMobile(text)
        setLoading(1)
      //  console.log(`https://codeedge.in/samavesh/api/create?type=email&email=${text}`);
      
         fetch(`https://codeedge.in/samavesh/api/is_user?info=${text}`,{
             method :'Post',
             headers: {
                'Accept': 'application/json'
               
              }
         })
         .then((response)=>{
           return response.json()
         })
         .then((json)=>{
             if(json)
             {
              setLoading(0) 
              json.completed?alert('User Already Exists Please Login!'):navigation.navigate('Otp',{verified:json.verified,data:text,exists:json.exists,completed:json.completed});
             }
             else
             alert('Something Went Wrong!')
         })
      }
      
      else{
        alert('Email Field Cannot Be Empty')
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
          <Text style={styles.heading}>Sign Up</Text>
       <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={(text)=>{onChangeText(text)}}
        placeholder = "Enter Your Email"
        placeholderTextColor="#979797" 
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button}
        onPress ={()=>{submit()}}
      >
          {!loading?<Text style={styles.buttonText}>Get Otp</Text>:
          <ActivityIndicator size="small" color="#ffffff" />}
     </TouchableOpacity>
     <Text onPress={()=>{navigation.navigate('Login')}} style={styles.subHeading}><Text style={{color:'#512536', textDecorationLine: 'underline',  fontWeight: 'bold'}}>Click here</Text> if you already have an account</Text>
     <Text style={styles.subHeading}>or signup using</Text>
     </View>
      </View>
      <KeyboardAvoidingView style={styles.socialMedia}
      behavior ={'height'}
      >
   
   <TouchableOpacity
           style={{height:70,width:70}}
           onPress={()=>{navigation.navigate('LoginMobile')}}
          >
     <Image
        style={styles.slogo}
        source={require('../assets/call_icon.png')}
        resizeMode = 'contain'
      />
      </TouchableOpacity>
            <TouchableOpacity
           style={{height:70,width:70,marginTop:-15}}
           onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
          >
           <Image
        style={{height:70,width:70}}
        source={require('../assets/social_gmail.png')}
        resizeMode = 'contain'
    
      />
      </TouchableOpacity>
           <Image
        style={styles.slogo}
        source={require('../assets/social_facebook.png')}
        resizeMode = 'contain'
      />
         </KeyboardAvoidingView>
           <View style={styles.bottomMessage}>
          <Text style={{textAlign:'center',color:'#000000'}}>Signing up for an account means you agree 
to our <Text style={{color:'#000000'}}>Terms & Conditions</Text></Text>
         </View> 
         </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default LoginEmail

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
        color:'#AC849C'
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
