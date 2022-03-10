import React,{useContext,useEffect} from 'react'
import { StyleSheet, Text,SafeAreaView, View,Image ,TextInput,TouchableOpacity,KeyboardAvoidingView,ActivityIndicator} from 'react-native'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {Logincontext} from '../contexts/Logincontext';
import AsyncStorage from '@react-native-async-storage/async-storage';


GoogleSignin.configure({
    webClientId: '1097222311467-gv6u7kjb4n7a5uhshiltkv14lkqleiba.apps.googleusercontent.com',
  });


const Otp = ({navigation,route}) => {
    const [text, onChangeText] = React.useState("");
    const {mobile} = useContext(Logincontext)
    const [loading, setLoading] = React.useState(0);
    const [auth_id, setAuthId] = React.useState(0);
    const [otp, setOtp] = React.useState(0);
    const {setToken} = useContext(Logincontext)
   
    const input = route.params
   //alert(JSON.stringify(input))
    const onGoogleButtonPress =async () =>{
         // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
    }


    useEffect(() => {
  
    
     if(!otp)
     { if(!input.verified)
      {fetch(`https://codeedge.in/samavesh/api/create?type=email&email=${input.data}`,{
        method :'Post',
        headers: {
           'Accept': 'application/json'
          
         }
    })
      .then((response)=>{
        return response.json()
      })
      .then((json)=>{
       // alert(JSON.stringify(json))
        if(json.success)
        {
         alert('An OTP Has Been Sent To Your Mail') 
         setOtp(1)
         setAuthId(json.auth_id)
        }
      })}
      else{
        fetch(`https://codeedge.in/samavesh/api/loginbyotp?type=email&email=${input.data}`,{
        method :'Post',
        headers: {
           'Accept': 'application/json'
          
         }
    })
      .then((response)=>{
        return response.json()
      })
      .then((json)=>{
     // alert(JSON.stringify(json))
        if(json.success)
        {
          alert('An OTP Has Been Sent To Your Mail') 
          setOtp(1)
         setAuthId(json.auth_id)
        }
      })
      }}


    },[]);

    const submit = async() =>{
   
        setLoading(1)
      
      
      let data = await fetch(`https://codeedge.in/samavesh/api/verify?otp=${text}&auth_id=${auth_id}`,{
        method :'Post',
        headers: {
           'Accept': 'application/json'
          
         }
      })
      .then((response)=>{
        return response.json()
      })

      setLoading(0)

      if(data.success)
      {
        await setToken(data.token)
        await AsyncStorage.setItem(
                      'token',
                      data.token
                    );
                    
                    navigation.navigate('Userinfo')
                
                
      }
   
      else{
        alert('Incorrect OTP')
      }
    
    


    //       //input.exists?props.navigation.navigate('Home'):props.navigation.navigate('Userinfo');
  
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
          <Text style={styles.heading}>Enter The Otp</Text>
       <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={(text)=>{onChangeText(text)}}
        placeholder = ""
        placeholderTextColor="#979797" 
      />

      <TouchableOpacity style={styles.button}
        onPress ={()=>{submit()}}
      >
            {!loading?<Text style={styles.buttonText}>Submit</Text>:
          <ActivityIndicator size="small" color="#ffffff" />}
     </TouchableOpacity>

     <Text style={styles.subHeading}>or signup using</Text>
     </View>
      </View>

      <View style={styles.socialMedia}>
      <Image
        style={styles.slogo}
        source={require('../assets/social_email.png')}
        resizeMode = 'contain'
      />
          
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
         </View>
        


         <View style={styles.bottomMessage}>
          <Text style={{textAlign:'center',color:'#828282'}}>Signing up for an account means you agree 
to our <Text style={{color:'#828282'}}>Terms & Conditions</Text></Text>
         </View>
         </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Otp

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#E5E5E5'
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
