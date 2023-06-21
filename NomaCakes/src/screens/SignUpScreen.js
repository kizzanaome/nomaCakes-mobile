import * as React from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image, TouchableOpacity, StatusBar, TextInput, Alert } from 'react-native';
import { COLORS } from '../constants';
// import LinearGradient from 'react-native-linear-gradient'
import { LinearGradient } from 'expo-linear-gradient';
import { globalStyles } from '../styles/global';

const SignUpScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={globalStyles.container}>
            <LinearGradient
                colors={[' rgba(217, 217, 217, 0)', '#DB4060']}
                style={globalStyles.linearGradient}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >
                <View style={globalStyles.childContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image style={styles.logo}
                            source={require('../assets/images/noma-logo.png')}
                        />
                    </TouchableOpacity>
                    <View style={globalStyles.contentContainer}>
                        <Text style={styles.text}>
                            Sign Up
                        </Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Name'
                            placeholderTextColor="rgba(0,0,0,0.24)"
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder='Email'
                            placeholderTextColor="rgba(0,0,0,0.24)"
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder='Password'
                            placeholderTextColor="rgba(0,0,0,0.24)"
                        />

                        <TouchableOpacity onPress={() => Alert.alert("Signup in succesfully")} style={styles.button} >
                            <Text style={styles.buttonText}>Sign up</Text>
                        </TouchableOpacity>


                        <Text style={styles.signupText}>Already haven an account? <Text style={{ color: "#DB4060" }} onPress={() => Alert.alert("Logged in succesfully")}>Login</Text></Text>
                    </View>
                </View>
            </LinearGradient>
        </SafeAreaView>


    );
};

const styles = StyleSheet.create({


    text: {
        width: 300,
        // fontFamily:'Ubuntu'
        fontStyle: 'normal',
        fontWeight: "400",
        fontSize: 35,
        marginTop: 70,
        textAlign: 'center',
        color: "#5B1E3A"
    },
    textInput: {
        width: 376,
        marginTop: 20,
        borderBottomWidth: 1,
        paddingHorizontal: 50,
        paddingVertical: 20,
        fontSize: 23,
        fontStyle: 'normal',
        lineHeight: 26,
        borderBottomColor: 'rgba(0, 0, 0, 0.34)'




    },


    cakeImage: {
        width: 270,
        height: 313,
        marginTop: 35,
        resizeMode: 'contain'
    },


    // button 
    button: {
        width: 300,
        height: 64,
        borderRadius: 50,
        backgroundColor: "#DB4060",
        justifyContent: 'center',
        marginTop: 50
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


export default SignUpScreen;