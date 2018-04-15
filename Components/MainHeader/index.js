import React from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import {
    Header,
    Icon
} from 'react-native-elements';

import MenuButton from '../../Components/pressables/MenuButton';
import { Colors } from '../../Stylesheets/styles';

export default MainHeader = (props) => {
    return (
        <View style={{width: '100%'}}>
            <Header
            backgroundColor={Colors.PRIMARY}
            leftComponent={<MenuButton navigation={props.navigation}/>}
            centerComponent={{ text: props.title, style: { color: '#fff' } }}
            rightComponent={
                <TouchableOpacity 
                onPress={() => {props.navigation.navigate('ProfileScreen')}}>
                    <Icon
                    name="face-profile"
                    type="material-community"
                    color={Colors.ICON_PRIMARY}/>
                </TouchableOpacity>}/>
        </View>
    );
}