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

export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input_userName: '',
            input_userEmail: '',
            input_userPassword: '',

            input_name: '',
            input_batchNo: 0,
            input_major: '',
            input_companyName: '',

            error_userName: false,        
            error_userEmail: false,
            error_userPassword: false,
            error_name: false,
            error_batchNo: false,
            error_major: false,
            error_companyName: false,

            response: {msg: 'nah'},
        }

        this.register = this.register.bind(this);

        this.updatePasswordInput = this.updatePasswordInput.bind(this);
        this.updateEmailInput = this.updateEmailInput.bind(this);
        this.updateUsernameInput = this.updateUsernameInput.bind(this);
        this.updateNameInput = this.updateNameInput.bind(this);
        this.updateBatchNoInput = this.updateBatchNoInput.bind(this);
        this.updateMajorInput = this.updateMajorInput.bind(this);
        this.updateCompanyNameInput = this.updateCompanyNameInput.bind(this);
    }

    register() {
        fetch('http://13.250.45.171:1337/auth/local/register', {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.input_userName,
                email: this.state.input_userEmail,
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
    updateEmailInput(text) {this.setState({input_userEmail: text})}
    updatePasswordInput(text) {this.setState({input_userPassword: text})}

    updateCompanyNameInput(text) {this.setState({input_companyName: text})}
    updateBatchNoInput(text) {this.setState({input_batchNo: text})}
    updateMajorInput(text) {this.setState({input_major: text})}
    updateNameInput(text) {this.setState({input_name: text})}


    render() {
        return(
            <View style={styles.login_container_end}>
                <View style={styles.login_input_field_group}>
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
                    containerStyle={styles.login_input_field}
                    placeholder='EMAIL'
                    errorMessage={this.state.error_userEmail ? 'Please check your email address.' : undefined}
                    leftIcon={
                        <Icon
                        name='email'
                        type='entypo' />
                    }
                    onChangeText={this.updateEmailInput}
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
                </View>

                <View style={styles.login_input_field_group}>
                    <Input
                    containerStyle={styles.login_input_field}
                    placeholder='NAME'
                    errorMessage={this.state.error_name ? 'Please check your name.' : undefined}
                    leftIcon={
                        <Icon
                        name='user'
                        type='entypo' />
                    }
                    onChangeText={this.updateNameInput}
                    />
                    <Input
                    containerStyle={styles.login_input_field}
                    placeholder='BATCH'
                    errorMessage={this.state.error_batchNo ? 'Please check your Batch No.' : undefined}
                    leftIcon={
                        <Icon
                        name='md-people'
                        type='ionicon' />
                    }
                    onChangeText={this.updateBatchNoInput}
                    />
                    <Input
                    secureTextEntry
                    containerStyle={styles.login_input_field}
                    placeholder='COMPANY NAME'
                    errorMessage={this.state.error_companyName ? 'Please check your company\'s name.': undefined}
                    leftIcon={
                        <Icon
                        name='briefcase'
                        type='entypo' />
                    }
                    onChangeText={this.updateCompanyNameInput}
                    />
                    <Input
                    secureTextEntry
                    containerStyle={styles.login_input_field}
                    placeholder='MAJOR'
                    errorMessage={this.state.error_major ? 'Please check your major.': undefined}
                    leftIcon={
                        <Icon
                        name='graduation-cap'
                        type='entypo' />
                    }
                    onChangeText={this.updateMajorInput}
                    />
                </View>

                <View style={styles.login_button_container}>
                    <Button
                    large
                    buttonStyle= {styles.login_button_style}  
                    onPress={this.register}      
                    title='SUBMIT' />
                </View>
            </View>
        );
    }
}