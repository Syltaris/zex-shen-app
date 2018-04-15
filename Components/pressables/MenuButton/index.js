import React from 'react';
import { 
    TouchableOpacity
} from 'react-native';
import {
    Icon,
} from 'react-native-elements';

export default MenuButton = (props) => {
    return (
        <TouchableOpacity
        onPress={() => props.navigation.navigate('DrawerOpen')}>
            <Icon
            name='menu'
            type='entypo'
            color='#fff'/>
        </TouchableOpacity>
    );
}