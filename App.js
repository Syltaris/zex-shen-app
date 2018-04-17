/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';

import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import MediaScreen from './Screens/MediaScreen';
import NetworkScreen from './Screens/NetworkScreen';
import LogbookScreen from './Screens/LogbookScreen';

import CustomDrawerComponent from './Components/CustomDrawerComponent';



export default RootNavigator = DrawerNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  MediaScreen: {
    screen: MediaScreen,
    navigationOptions: {
      header: null,
    },
  },
  NetworkScreen: {
    screen: NetworkScreen,
    navigationOptions: {
      header: null,
    },
  },
  LogbookScreen: {
    screen: LogbookScreen,
    navigationOptions: {
      header: null,
    },
  },
}, {
  contentComponent: CustomDrawerComponent,
})
