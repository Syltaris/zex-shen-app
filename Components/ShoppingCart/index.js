import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import{
    Button,
    Card
} from 'react-native-elements';

import styles from '../../Stylesheets/styles';

export default class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    render() {
        return(
            <Text></Text>
        );
    }
}