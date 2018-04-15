import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import {
    Icon
} from 'react-native-elements';

import styles, { Colors } from '../../Stylesheets/styles';

export default class BottomNav extends Component {
    render() {
        return (
            <View style={styles.container_bottomNav}>
                <TouchableOpacity 
                style={styles.container_bottomNavButtons}
                onPress={() => {this.props.navigation.navigate('HomeScreen')}}>
                    <Icon
                    name="home"
                    type="entypo"
                    color={Colors.ICON_PRIMARY}/>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.container_bottomNavButtons}
                onPress={() => {this.props.navigation.navigate('MediaScreen')}}>
                    <Icon
                    name="md-paper"
                    type="ionicon"
                    color={Colors.ICON_PRIMARY}/>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.container_bottomNavButtons}
                onPress={() => {this.props.navigation.navigate('NetworkScreen')}}>
                    <Icon
                    name="network"
                    type="entypo"
                    color={Colors.ICON_PRIMARY}/>
                </TouchableOpacity>
            </View>
        );
    }
}