import * as React from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image, Alert, TouchableOpacity, StatusBar } from 'react-native';
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
                <View style={styles.childContainer}>
                    <Image style={styles.logo}
                        source={require('../assets/images/noma-logo.png')} />
                    <View style={styles.contentContainer}>
                        <Image
                            style={styles.cakeImage}
                            source={require('../assets/images/cakes/cake.png')}
                        />
                        <Text style={styles.text}>Book yourself a cake now and arouse your taste buds for life </Text>

                        <TouchableOpacity onPress={() => Alert.alert("Signed in succesfully")} style={styles.button} >
                            <Text style={styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>

                        <Text style={styles.signupText}>Don't have an account? <Text style={{ color: "#DB4060" }} onPress={() => Alert.alert("Signed up succesfully")}>Sign Up now</Text></Text>
                    </View>
                </View>
            </LinearGradient>
        </SafeAreaView>


    );
};

const styles = StyleSheet.create({
    // mainContainer
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        // background: linear - gradient(253.85deg, #DB4060 - 21.73 %, rgba(217, 217, 217, 0) 95.87 %);
        // ImageBackground:
    },
    // backgroundGradient
    linearGradient: {
        flex: 1,
        backgroundColor: COLORS.lightWhite,
        width: "100%",
        height: "100%",
        borderColor: 'green',
        borderWidth: 2,
        margin: 0,
        padding: 0,
        alignItems: 'center'
    },
    // holds all the content
    childContainer: {
        marginTop: StatusBar.currentHeight,
        flexDirection: 'column',
        alignItems: 'center',
    },

    logo: {
        width: 232,
        height: 52,
        marginTop: 10,
        resizeMode: 'contain'
    },
    contentContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    cakeImage: {
        width: 270,
        height: 313,
        marginTop: 35,
        resizeMode: 'contain'
    },
    text: {
        width: 300,
        // fontFamily:'Ubuntu'
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 27,
        lineHeight: 34,
        marginTop: -15,
        textAlign: 'center',
        color: "#5B1E3A"
    },

    // button 
    button: {
        width: 300,
        height: 64,
        borderRadius: 50,
        backgroundColor: "#DB4060",
        justifyContent: 'center',
        marginTop: 30
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
        textAlign: 'center',
        width: 245,
        height: 17,
        fontSize: 15,
        fontWeight: 400,
        fontStyle: 'normal',
        marginTop: 15,
        lineHeight: 15
    }
})


export default LandingScreen;