import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

const Logo = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
            <Image style={styles.logo}
                source={require('../../assets/images/noma-logo.png')}
            />
        </TouchableOpacity>
    );
};

export default Logo

const styles = StyleSheet.create({
    logo: {
        width: 232,
        height: 52,
        marginTop: 10,
        resizeMode: 'contain'
    },
})