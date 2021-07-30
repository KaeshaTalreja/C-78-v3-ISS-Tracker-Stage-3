import 'react-native-gesture-handler';
import * as React from 'react';
import {Text,View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack=createStackNavigator();

import HomeScreen from './screens/HomeScreen';
import LocationScreen from './screens/LocationScreen';
import MeteorScreen from './screens/MeteorScreen';


export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" 
        screenOptions={{headerShown:false}}>
          <Stack.Screen component={HomeScreen} name="Home"/>
          <Stack.Screen component={LocationScreen} name="Location"/>
          <Stack.Screen component={MeteorScreen} name="Meteor"/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
