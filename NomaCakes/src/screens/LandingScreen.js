import * as React from 'react';
import { SafeAreaView, Text, StyleSheet, ImageBackground, View, Image, Button, Alert, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants';
// import LinearGradient from 'react-native-linear-gradient'
import { LinearGradient } from 'expo-linear-gradient';

const LandingScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={[' rgba(217, 217, 217, 0)', '#DB4060']}
                style={styles.linearGradient}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >
                <Image style={styles.logo}
                    source={require('../assets/images/noma-logo.png')} />
                <View>
                    <Image
                        style={styles.cake}
                        source={require('../assets/images/cakes/cake.png')}
                    />
                    <Text style={styles.text}>Book yourself a cake now and arouse your taste buds for life </Text>

                    <TouchableOpacity onPress={() => Alert.alert("Signed in succesfully")} style={styles.button} >
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>

                    <Text style={styles.signupText}>Don't have an account? <Text style={{ color: "#DB4060" }} onPress={() => Alert.alert("Signed up succesfully")}>Sign Up now</Text></Text>
                </View>
            </LinearGradient>
        </SafeAreaView>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite,
        position: "absolute",
        width: 428,
        height: 926,
        left: -2,
        top: 0,
        borderColor: "red"
        // background: linear - gradient(253.85deg, #DB4060 - 21.73 %, rgba(217, 217, 217, 0) 95.87 %);
        // ImageBackground:
    },
    linearGradient: {
        flex: 1,
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%'
    },
    logo: {
        width: 232,
        height: 52,
        left: 60,
        top: 70,
        resizeMode: 'contain'
    },
    cake: {
        position: 'absolute',
        width: 270,
        height: 313,
        left: 50,
        top: 100,
        resizeMode: 'contain'
    },
    text: {
        width: 300,
        height: 109,
        left: 30,
        top: 390,
        // borderWidth:1,
        // borderColor:'red',
        // fontFamily:'Ubuntu'
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 30,
        lineHeight: 34,
        textAlign: 'center',
        color: "#5B1E3A"
    },
    button: {
        position: 'absolute',
        width: 300,
        height: 64,
        left: 35,
        top: 520,
        borderRadius: 50,
        backgroundColor: "#DB4060",
        padding: 20,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 20,
        alignItems: 'center'
    },

    signupText: {
        position: 'absolute',
        textAlign: 'center',
        width: 245,
        height: 17,
        left: 70,
        top: 605,
        fontSize: 15,
        fontWeight: 400,
        fontStyle: 'normal',
        lineHeight: 15
    }
})


export default LandingScreen;