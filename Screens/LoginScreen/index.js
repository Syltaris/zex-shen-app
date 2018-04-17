import React, { Component } from 'react';
import {
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

    render() {
        return(
            <View style={styles.login_container_end}>
                <View style={styles.logo_container}>
                    <Image
                    style={styles.logo_style}
                    source={require('../../res/img/logo.png')} />
                </View>
                <Input
                placeholder='USERNAME'
                leftIcon={
                    <Icon
                    name='user'
                    type='entypo' />
                }
                />
                <Input
                placeholder='PASSWORD'
                leftIcon={
                    <Icon
                    name='lock'
                    type='entypo' />
                }
                />

                <View style={styles.login_button_container}>
                </View>
                <View style={styles.login_button_container}>

                </View>
                <View style={styles.login_button_container}>
                    <Button
                    large
                    buttonStyle= {styles.login_button_style}  
                    onPress={ () => {this.props.navigation.navigate('LoginDetails')}}      
                    title='LOGIN' />
                </View>
            </View>
        );
    }
}