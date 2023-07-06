import * as React from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image, Alert, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants';
// import LinearGradient from 'react-native-linear-gradient'
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../components/common/Logo';
import { globalStyles } from '../styles/global';
import MyAppText from '../components/common/MyAppText';

const LandingScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={globalStyles.container}>
            <LinearGradient
                colors={[' rgba(217, 217, 217, 0)', '#DB4060']}
                style={globalStyles.linearGradient}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >
                <View style={globalStyles.childContainer}>
                    <Logo />
                    <View style={globalStyles.contentContainer}>
                        <Image
                            style={styles.cakeImage}
                            source={require('../assets/images/cakes/cake.png')}
                        />

                        <MyAppText style={styles.text}>
                            Book yourself a cake now and arouse your taste buds for life
                        </MyAppText>

                        <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.loginButton}>
                            <MyAppText style={styles.loginButtonText}>Sign In</MyAppText>
                        </TouchableOpacity>

                        <MyAppText style={styles.signUpText}>Don't have an account? <Text style={{ color: "#DB4060" }} onPress={() => navigation.navigate('SignUp')}>Sign Up now</Text></MyAppText>
                    </View>
                </View>
            </LinearGradient>
        </SafeAreaView>


    );
};

const styles = StyleSheet.create({

    cakeImage: {
        width: 270,
        height: 313,
        marginTop: 35,
        resizeMode: 'contain'
    },
    text: {
        width: 300,
        fontWeight: 400,
        fontSize: 27,
        lineHeight: 34,
        marginTop: -15,
        textAlign: 'center',
    },

    // button 
    loginButton: {
        width: 300,
        height: 64,
        borderRadius: 50,
        backgroundColor: "#DB4060",
        justifyContent: 'center',
        marginTop: 30,

    },
    loginButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 20,
        alignItems: 'center'
    },

    signUpText: {
        textAlign: 'center',
        width: 245,
        fontSize: 15,
        fontWeight: 400,
        marginTop: 15,

    }
})


export default LandingScreen;