import * as React from 'react';

import { SafeAreaView, Text, StyleSheet, View, Image, Alert, TouchableOpacity, StatusBar, TouchableNativeFeedback, Keyboard, ImageBackground, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { COLORS } from '../constants';
// import LinearGradient from 'react-native-linear-gradient'
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../components/common/Logo';
import { globalStyles } from '../styles/global';
import MyAppText from '../components/common/MyAppText';
import { FONTS } from '../constants/theme';
import { NotificationIcon, SearchIcon, ViewAllIcon } from '../constants/icons';

const HomeScreen = ({ navigation }) => {
    const [rippleColor] = React.useState('#ffffff')

    return (
        <TouchableNativeFeedback
            activeOpacity={1} onPress={() => {
                Keyboard.dismiss();
            }}
            background={TouchableNativeFeedback.Ripple(
                rippleColor
            )}
        >
            <SafeAreaView style={globalStyles.container}>
                {/* <ImageBackground style=
                    {{
                        width: "100%",
                        height: "100%",
                        resizeMode: 'cover',
                    }} source={require('../assets/images/cakes/homePage2.png')}

                > */}
                <View style={styles.childContainer}>
                    <View style={styles.topNav}>
                        <MyAppText style={{ color: "#B3B3B3" }}>
                            Hi, Martin!
                        </MyAppText>

                        <NotificationIcon />
                    </View>

                    <MyAppText style={styles.headerText}>
                        Grab yourself some cake
                    </MyAppText>
                    <TextInput
                        style={{ backgroundColor: COLORS.white }}
                        // borderRadius={15}
                        outlineColor={COLORS.formOutlineColor}
                        outlineStyle={{ borderRadius: 15, borderWidth: 1.5 }}
                        placeholder='Or type what you are looking for'
                        placeholderTextColor={COLORS.placeholderTextColor}
                        mode="outlined"
                        activeOutlineColor={COLORS.primary}
                        right={
                            <TextInput.Icon
                                icon={() => (
                                    <SearchIcon iconColor={COLORS.placeholderTextColor} />
                                )}
                            />
                        }
                    />

                    <View style={{
                         flexDirection: 'row', alignItems: 'center', marginTop: 27, justifyContent:"space-between"
                    }}>
                        <MyAppText style={{
                            color: COLORS.black,
                            fontFamily: FONTS.semiBold,
                            fontSize: 20,
                            fontWeight: 600,
                            // lineHeight: "normal"
                        }}>
                            Popular cake shops
                        </MyAppText>

                        <ViewAllIcon />

                    </View>
                </View>

                {/* </ImageBackground> */}
            </SafeAreaView>
        </TouchableNativeFeedback>


    );
};

const styles = StyleSheet.create({

    childContainer: {
        marginTop: StatusBar.currentHeight,
        flex: 1,
        // borderColor: "red",
        // borderWidth: 2,
        margin: 20
    },
    topNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
        // borderColor: "red",
        // borderWidth: 1,
        alignItems: 'center'

    },
    bell: {
        width: 25,
        height: 30
    },
    headerText: {
        color: COLORS.black,
        fontFamily: FONTS.semiBold,
        fontSize: 35,
        fontStyle: 'normal',
        // fontWeight: 600,
        lineHeight: 40,
        // height:100,
        // letterSpacing: 0.37,
        marginVertical: 15


    },
    searchView: {
        borderWidth: 1.5,
        borderRadius: 15,
        color: "#B3B3B3",
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: "#D9D9D9",
        paddingHorizontal: 20,
        justifyContent: 'space-between'

    },

    searchIcon: {
        borderColor: "red",
        borderWidth: 1,
    },

    searchInput: {
        borderRadius: "15px",
        color: "#B3B3B3",
        fontFamily: FONTS.regular,
        fontSize: 15,
        fontStyle: "normal",
        height: 57,

        // fontWeight: 500,
        // lineHeight: "110%", /* 16.5px */
        letterSpacing: 0.10
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


export default HomeScreen;