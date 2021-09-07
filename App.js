import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppHeader from './components/AppHeader';
import Constants from 'expo-constants';
import FacebookScreen from './screens/fbScreen';
import InstagramScreen from './screens/instaScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';


export default class App extends React.Component{
  render(){
  return (
    <View style={{flex:1}}>
        <AppHeader />
        <AppContainer />
      </View>
  );
  }
}

const TabNavigator= createBottomTabNavigator({
  Facebook: {screen: FacebookScreen},
  Instagram: {screen: InstagramScreen},
});

const AppContainer = createAppContainer(TabNavigator);

