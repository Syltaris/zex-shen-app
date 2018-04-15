import React, { Component } from 'react';
import {
  View,
  ScrollView
} from 'react-native';
import { 
  Avatar,
  Card,
  Text,
  Button
} from 'react-native-elements';

import MainHeader from '../../Components/MainHeader';
import BottomNav from '../../Components/BottomNav';
import styles from '../../Stylesheets/styles';

export default class NetworkScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilesData: []
    }

    this.loadProfiles = this.loadProfiles.bind(this);
  }

  componentWillMount() {
    fetch('http://13.250.47.34:1337/profile', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(respData => this.setState({profilesData: respData}))
    .catch(err => this.setState({profilesData: [
      {msg: 'error'},
    ]}))
  }

  loadProfiles() {
    return this.state.profilesData.map(profile => {
      return (
        <Card
        containerStyle={styles.card_profileItem}>
          <View style={{flexDirection: 'row'}}>
            <Avatar
            large
            rounded
            source={{uri: profile.avatar_uri}}
            style={{width: '10%', flexDirection: 'row'}}/>
            <View
            style={{paddingLeft: 20}}>
              <Text>{profile.name}</Text>
              <Text>Batch {profile.batch}</Text>
              <Text>{profile.major}</Text>
              <Text>SHEN {profile.shen_role}</Text>
            </View>
          </View>
        </Card>

      )
    })
  }

  render() {
    return (
          <View style={styles.container}>
              <MainHeader 
              title="SHEN NETWORK"
              navigation={this.props.navigation} />
              <View style={styles.containerReverse}>
                <View style={styles.container}>
                  <ScrollView
                  style={{width: '100%'}}>
                    {this.loadProfiles()}
                  </ScrollView>
                </View>
                <BottomNav navigation={this.props.navigation} />
              </View>
          </View>
    );
  }
}