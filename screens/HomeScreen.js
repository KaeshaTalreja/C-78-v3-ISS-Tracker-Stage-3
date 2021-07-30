import * as React from 'react';
import {Text,View,SafeAreaView,StyleSheet,Platform,StatusBar,TouchableOpacity,Image,ImageBackground} from 'react-native';

export default class HomeScreen extends React.Component{
  render(){
    return(
      <View style={style.container}>
        <SafeAreaView style={style.droidSafeArea}/>
        <View style={style.titleBar}>
          <Text style={style.titleText}>ISS Tracker App</Text>
        </View>
        <ImageBackground
          source={require('../assets/bg_image.png')}
          style={style.backgroundImage}
        >
          <TouchableOpacity style={style.routeCard} onPress={()=>{
            this.props.navigation.navigate("Location")
          }}>
            <Text style={style.routeText} > ISS Location</Text>
            <Text style={style.knowMore}>Know more</Text>
            <Text style={style.bgDigit}>1</Text>
            <Image source={require('../assets/iss_icon.png')} style={style.iconImage}/>
          </TouchableOpacity>
          <TouchableOpacity style={style.routeCard} onPress={()=>{
            this.props.navigation.navigate("Meteor")
          }}>
        // { console.log(StatusBar.currentHeight)}
            <Text style={style.routeText}> Meteors</Text>
            <Text style={style.knowMore}>Know more</Text>
            <Text style={style.bgDigit}>2</Text>
            <Image source={require('../assets/meteor_icon.png')} style={style.iconImage}/>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    )
  }
}

const style=StyleSheet.create({
  container:{
    flex:1
  },
  titleBar:{
    flex:0.15,
    justifyContent:'center',
    alignItems:"center"
  },
  titleText:{
    fontSize:40,
    fontFamily:"Arial",
    fontWeight:"bolder",
    color:"white"
  },
  droidSafeArea:{
    marginTop: Platform.OS==="android"? StatusBar.currentHeight:0
  },
  backgroundImage:{
    flex:1,
    resizeMode:'cover'
  },
  iconImage:{
    position:'absolute',
    height:150,
    width:120,
    right:-20,
    top:-70,
    resizeMode:"contain"
  },
  routeCard:{
    flex:0.25,
    backgroundColor:'white',
    borderRadius:30,
    marginTop:50,
    marginLeft:50,
    marginRight:50,
  },
  routeText:{
    color:'black',
    paddingLeft:20,
    fontSize:25,
    fontWeight:"bold",
    marginTop:30
  },
  bgDigit:{
    position:'absolute',
    right:10,
    top:0,
    fontSize:90,
    color:"rgba(100,100,100,0.1)",
    zIndex:-1
  },
  knowMore:{
    color:'red',
    paddingLeft:50,
    fontSize:15
  }
})
