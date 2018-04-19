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

            input_secretKey: '',
            
            errors: {
                error_userName: false,        
                error_userEmail: false,
                error_userPassword: false,
                error_name: false,
                error_batchNo: false,
                error_major: false,
                error_companyName: false,
                error_secretKey: false,
            },

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
        this.updateSecretKeyInput = this.updateSecretKeyInput.bind(this);
    }

    register() {
        var st = this.state;

        var errors = {
            error_userName: !(st.input_userName.length > 6),        
            error_userPassword: !(st.input_userPassword.length > 6),
            error_name: !(st.input_name.length > 2),
            error_batchNo: !(this.isInt(st.input_batchNo) && parseInt(st.input_batchNo) > 0),
            error_major: !(st.input_major.length > 5),
            error_companyName: !(st.input_companyName.length > 5),
            error_secretKey: !(st.input_secretKey === 'shen-nanigans')
        }

        this.setState({
            errors: errors
        });

        if(Object.keys(errors).map(x => errors[x]).every(x => x == false)) {
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
                    .then(
                        fetch('http://13.250.45.171:1337/profile', {
                            method: 'POST',
                            body: JSON.stringify({
                                name: st.input_name,
                                batchNo: st.input_batchNo,
                                major: st.input_major,
                                companyName: st.input_companyName,

                            }),
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer `+ jwt
                            },
                        })                
                        .then(this.props.navigation.navigate('HomeScreen'))
                    )
                } 
            })
            .catch(err => this.setState({response: 'err'}))           
        }
    }

    isInt(value) {
        var x;
        if (isNaN(value)) {
          return false;
        }
        x = parseFloat(value);
        return (x | 0) === x;
      }

    updateUsernameInput(text) {this.setState({input_userName: text})}
    updateEmailInput(text) {this.setState({input_userEmail: text})}
    updatePasswordInput(text) {this.setState({input_userPassword: text})}

    updateCompanyNameInput(text) {this.setState({input_companyName: text})}
    updateBatchNoInput(text) {this.setState({input_batchNo: text})}
    updateMajorInput(text) {this.setState({input_major: text})}
    updateNameInput(text) {this.setState({input_name: text})}

    updateSecretKeyInput(text) {this.setState({input_secretKey: text})}


    render() {
        return(
            <View style={styles.login_container_end}>
                <View style={styles.login_input_field_group}>   
                    <Text style={styles.text_header_light}>ACCOUNT</Text>
                    <Input
                    containerStyle={styles.login_input_field}
                    placeholder='USERNAME'
                    errorMessage={this.state.errors.error_userName ? 'Please check your username length.' : undefined}
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
                    errorMessage={this.state.errors.error_userEmail ? 'Please check your email address.' : undefined}
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
                    errorMessage={this.state.errors.error_userPassword ? 'Please check your password.': undefined}
                    leftIcon={
                        <Icon
                        name='lock'
                        type='entypo' />
                    }
                    onChangeText={this.updatePasswordInput}
                    />
                </View>

                <View style={styles.login_input_field_group}>
                    <Text style={styles.text_header_light}>PROFILE</Text>
                    <Input
                    containerStyle={styles.login_input_field}
                    placeholder='NAME'
                    errorMessage={this.state.errors.error_name ? 'Please check your name.' : undefined}
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
                    errorMessage={this.state.errors.error_batchNo ? 'Please check your Batch No. It must be a number.' : undefined}
                    leftIcon={
                        <Icon
                        name='md-people'
                        type='ionicon' />
                    }
                    onChangeText={this.updateBatchNoInput}
                    />
                    <Input
                    containerStyle={styles.login_input_field}
                    placeholder='COMPANY NAME'
                    errorMessage={this.state.errors.error_companyName ? 'Please check your company\'s name.': undefined}
                    leftIcon={
                        <Icon
                        name='briefcase'
                        type='entypo' />
                    }
                    onChangeText={this.updateCompanyNameInput}
                    />
                    <Input
                    containerStyle={styles.login_input_field}
                    placeholder='MAJOR'
                    errorMessage={this.state.errors.error_major ? 'Please check your major.': undefined}
                    leftIcon={
                        <Icon
                        name='graduation-cap'
                        type='entypo' />
                    }
                    onChangeText={this.updateMajorInput}
                    />
                </View>

                <View style={styles.login_input_field_group}>
                    <Text style={styles.text_header_light}>SECRET KEY</Text>
                    <Input
                    containerStyle={styles.login_input_field}
                    placeholder='SECRET KEY'
                    errorMessage={this.state.errors.error_secretKey ? 'Your secret key is wrong!.': undefined}
                    leftIcon={
                        <Icon
                        name='key'
                        type='entypo' />
                    }
                    onChangeText={this.updateSecretKeyInput}
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