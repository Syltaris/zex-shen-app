import React from 'react';
import {
    AsyncStorage,
    View,
    Image,
    ScrollView
} from 'react-native';
import {
    Button
} from 'react-native-elements';
import {
    DrawerItems,
    SafeAreaView,
} from 'react-navigation';

import styles from '../../Stylesheets/styles';

export default CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView 
        style={styles.container_drawerItems} 
        forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.drawer_top}>
                <Image />
            </View>
            <Button
            title="Logout"
            onPress={() => 
                AsyncStorage.removeItem('accessToken')
                .then(props.navigation.navigate('LoginScreen'))
            }
            />
            <DrawerItems 
            {...props}
            items={props.items.filter((item) => item.routeName === 'Settings')}/>
        </SafeAreaView>
    </ScrollView>
);