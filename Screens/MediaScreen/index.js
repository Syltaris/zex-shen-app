import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Button } from 'react-native-elements';

import * as rssParser from 'react-native-rss-parser';

import MainHeader from '../../Components/MainHeader';
import BottomNav from '../../Components/BottomNav';
import styles from '../../Stylesheets/styles';

export default class MediaScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rss: 'Loading...don\'t forget to on your VPN...for now.',
    }

    this.post = this.post.bind(this);
  }

  componentWillMount() {
    this.post();
 }

  post() {
    fetch('https://medium.com/feed/@shennocshanghai')
    .then(resp => resp.text())
    .then(respData => rssParser.parse(respData))
    .then(data => this.setState({rss: data.title}))
    .catch(err => this.setState({rss: 'ERR'}))
  }

  render() {
    return (
          <View style={styles.container}>
              <MainHeader 
              title="POSTS"
              navigation={this.props.navigation} />
              <View style={styles.containerReverse}>
                <View style={styles.container}>

                <Text>{this.state.rss}</Text>

                </View>
                <BottomNav navigation={this.props.navigation} />
              </View>
          </View>
    );
  }
}