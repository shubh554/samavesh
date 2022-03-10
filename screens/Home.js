import React,{useEffect,useContext} from 'react'
import { StyleSheet, Text, View,Image ,ScrollView,ImageBackground,TouchableOpacity} from 'react-native'
import { Searchbar } from 'react-native-paper';
import { List } from 'react-native-paper';
import CenterListItem from '../components/CenterListItem'
import Header from '../components/Header'
import {Logincontext} from '../contexts/Logincontext';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


export default function Home({navigation}) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [centers, setCenters] = React.useState(0);
  const {token,login} = useContext(Logincontext)

  

  const onChangeSearch = query => setSearchQuery(query); 
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  
  useEffect(() => {
    // Update the document title using the browser API
     fetch(`https://codeedge.in/samavesh/api/centers`)
     .then((response)=>{
       return response.json()
     })
     .then((json)=>{
      // alert(JSON.stringify(json))
         setCenters(json)
     })
  });
  
  return (
       <View style={styles.container}>
       <Header navigation={navigation}/>
       <View style={styles.banner}>
       <Image
        style={{width:'100%'}}
        source={require('../assets/banner.png')}
        resizeMode = 'contain'
      />
       </View>
      
      <View style={styles.searchBar}>
       <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    </View>

    <View style={styles.filter}>
    <View style={{width:'60%'}}>
    <List.Section >
      <List.Accordion
        title="Filters"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="Nearby" style={{fontSize:1}} />
        <List.Item title="Highest Rated" style={{fontSize:1}} />
     </List.Accordion>
     </List.Section>
     </View>
     </View>
    <ScrollView style={styles.listContainer}>
    {
      centers?  centers.map((item)=>{
        return <CenterListItem item={item} navigation ={navigation}/>
      }):<Text>Loading...</Text>
    }
      
     </ScrollView>
    </View>
    )
}

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
      color:'#ffffff'
      
    },
    rating:{
      flexDirection:'row'
    },
    distance:{
      flexDirection:'row'
    }

})
