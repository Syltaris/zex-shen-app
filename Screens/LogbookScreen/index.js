import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Button } from 'react-native-elements';

import MainHeader from '../../Components/MainHeader';
import BottomNav from '../../Components/BottomNav';
import styles from '../../Stylesheets/styles';

export default class LogbookScreen extends Component {
  render() {
    return (
          <View style={styles.container}>
              <MainHeader 
              title="LOGBOOK"
              navigation={this.props.navigation} />
              <View style={styles.containerReverse}>
                <View style={styles.container}>

                </View>
                <BottomNav navigation={this.props.navigation} />
              </View>
          </View>
    );
  }
}