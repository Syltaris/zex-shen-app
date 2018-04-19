import React, { Component } from 'react';
import {
    AsyncStorage,
    View,
    Text,
    Image
} from 'react-native';
import {
    Button,
    Icon,
    Input
} from 'react-native-elements';
import {
    NavigationActions
} from 'react-navigation';

import styles from '../../Stylesheets/styles';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);

        AsyncStorage.getItem('accessToken')
        .then(jwt => {
            if(!!jwt) {
                this.props.navigation.navigate('HomeScreen');
            } else {
                this.props.navigation.navigate('LoginScreen');
            }
        })
    }

    render() {
        return(
            <View style={styles.login_container_end}>
                <View style={styles.logo_container}>
                    <Image
                    style={styles.logo_style}
                    source={require('../../res/img/logo.png')} />
                </View>
            </View>
        );
    }
}