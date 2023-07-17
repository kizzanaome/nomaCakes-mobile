import * as React from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image, TouchableOpacity, StatusBar, TextInput, Alert } from 'react-native';
import { COLORS } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { globalStyles } from '../styles/global';
import MyAppText from '../components/common/MyAppText';

const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={globalStyles.container}>
            <LinearGradient
                colors={[' rgba(217, 217, 217, 0)', '#DB4060']}
                style={globalStyles.linearGradient}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >
                <View style={globalStyles.childContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
                        <Image style={styles.logo}
                            source={require('../assets/images/noma-logo.png')}
                        />
                    </TouchableOpacity>
                    <View style={globalStyles.contentContainer}>
                        <MyAppText style={styles.headerText}>
                            Login
                        </MyAppText>

                        <View style={globalStyles.inputView}>
                            <Image
                                style={globalStyles.inputIcons}
                                source={require('../assets/images/icons/mail.png')}
                            />
                            <TextInput
                                style={globalStyles.textInput}
                                placeholder='Email'
                                placeholderTextColor="rgba(0,0,0,0.24)"
                            />
                        </View>

                        <View style={globalStyles.inputView}>
                            <Image
                                style={globalStyles.inputIcons}
                                source={require('../assets/images/icons/padlock.png')}
                            />
                            <TextInput
                                style={globalStyles.textInput}
                                placeholder='Password'
                                placeholderTextColor="rgba(0,0,0,0.24)"
                            />
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={globalStyles.button} >
                            <MyAppText style={globalStyles.buttonText}>Login</MyAppText>
                        </TouchableOpacity>


                        <MyAppText style={styles.signupText}>Don't have an account <Text style={{ color: "#DB4060" }} onPress={() => navigation.navigate("SignUp")}>SignUp</Text></MyAppText>
                    </View>
                </View>
            </LinearGradient>
        </SafeAreaView>


    );
};

const styles = StyleSheet.create({


    headerText: {
        width: 300,
        fontWeight: "400",
        fontSize: 35,
        marginTop: 70,
        textAlign: 'center',
    },

    signupText: {
        textAlign: 'center',
        width: 245,
        fontSize: 15,
        fontWeight: 400,
        marginTop: 30,
    },

})


export default LoginScreen;