import React, { Component } from 'react';
import {
  AsyncStorage,
  View,
  Modal,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { 
  Avatar,
  Card,
  Text,
  Button,

} from 'react-native-elements';

import MainHeader from '../../Components/MainHeader';
import BottomNav from '../../Components/BottomNav';
import styles from '../../Stylesheets/styles';

export default class NetworkScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilesData: [],

      showModal: false,
      profileToShow: undefined
    }

    this.loadProfiles = this.loadProfiles.bind(this);

    AsyncStorage.getItem('accessToken')
    .then(jwt =>
      fetch('http://13.250.45.171:1337/profile', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer `+ jwt
        }
      })
      .then(resp => resp.json())
      .then(respData => this.setState({profilesData: respData}))
      .catch(err => this.setState({profilesData: [
        {msg: 'error'},
      ]}))
    );
  }

  loadProfiles() {
    return this.state.profilesData && this.state.profilesData.map(profile => 
      <TouchableOpacity
      key={profile.name}
      onPress={() => {
        this.setState({
          showModal: true,
          profileToShow: profile
        })
      }}>
        <Card
        containerStyle={styles.card_profileItem}>
          <View 
          style={{flexDirection: 'row'}}>
            <View style={{width: '30%'}}>
              <Avatar
              large
              rounded
              source={{uri: 'https://source.unsplash.com/random/100x100'}}
              />
            </View>
            <View
            style={{paddingLeft: 20}}>
              <Text style={{fontWeight: 'bold'}}>{profile.name}{profile.shenRole ? ', SHEN ' + profile.shenRole : ''}</Text>
              <View
              style={{marginBottom: 0}}>
                <Text>Batch {profile.batchNo}</Text>
                <Text>{profile.major}</Text>
                <Text>{profile.companyName}</Text>
              </View>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
          <Modal
          transparent
          animationType="fade"
          visible={this.state.showModal}
          onRequestClose={() => this.setState({showModal: false})}
          >
            <View style={styles.modal_transparentBlack}>
              <Card>
                <Text style={styles.text_header}>{this.state.profileToShow && this.state.profileToShow.name}</Text>
                <Text>{this.state.profileToShow && this.state.profileToShow.major}</Text>
              </Card>
            </View>
          </Modal>
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