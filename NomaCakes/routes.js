import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { COLORS } from "./src/constants/theme";
import LandingScreen from './src/screens/LandingScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import LoginScreen from './src/screens/LoginScreen';
import * as Font from "expo-font";
import { useEffect, useState } from 'react';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator()

export default function Routes() {

    return (

        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: COLORS.white,
                        color: COLORS.white,
                    }
                }}
                name="Landing"
                component={LandingScreen}
            />

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="SignUp"
                component={SignUpScreen}
            />

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="Login"
                component={LoginScreen}
            />

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="Home"
                component={HomeScreen}
            />


        </Stack.Navigator>
    );
}

