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

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Home' })],
});

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input_userName: '',
            error_userName: false,
            input_userPassword: '',
            error_userPassword: false,
            response: 'nah',
        }

        this.login = this.login.bind(this);

        this.updatePasswordInput = this.updatePasswordInput.bind(this);
        this.updateUsernameInput = this.updateUsernameInput.bind(this);
    }

    login() {
        fetch('http://13.250.47.34:1337/auth/local', {
            method: 'POST',
            body: JSON.stringify({
                identifier: this.state.input_userName,
                password: this.state.input_userPassword
            }),
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(resp => resp.json())
        .then(respData => {
            var jwt = respData.jwt;
            var user = respData.user;

            this.setState({error_userName: !user, error_userPassword: !jwt});

            if(!!jwt) {
                AsyncStorage.setItem('accessToken', jwt)
                .then(this.props.navigation.navigate('HomeScreen'));
            } 
        })
        .catch(err => this.setState({response: 'err'}))

    }

    updateUsernameInput(text) {this.setState({input_userName: text})}
    updatePasswordInput(text) {this.setState({input_userPassword: text})}

    render() {
        return(
            <View style={styles.login_container_end}>
                <View style={styles.logo_container}>
                    <Image
                    style={styles.logo_style}
                    source={require('../../res/img/logo.png')} />
                </View>
                <Input
                containerStyle={styles.login_input_field}
                placeholder='USERNAME'
                errorMessage={this.state.error_userName ? 'Please check your username.' : undefined}
                leftIcon={
                    <Icon
                    name='user'
                    type='entypo' />
                }
                onChangeText={this.updateUsernameInput}
                />
                <Input
                secureTextEntry
                containerStyle={styles.login_input_field}
                placeholder='PASSWORD'
                errorMessage={this.state.error_userPassword ? 'Please check your password.': undefined}
                leftIcon={
                    <Icon
                    name='lock'
                    type='entypo' />
                }
                onChangeText={this.updatePasswordInput}
                />

                <View style={styles.login_button_container}>
                </View>
                <View style={styles.login_button_container}>

                </View>
                <View style={styles.login_button_container}>
                    <Button
                    large
                    buttonStyle= {styles.login_button_style}  
                    onPress={this.login}      
                    title='LOGIN' />
                </View>
            </View>
        );
    }
}