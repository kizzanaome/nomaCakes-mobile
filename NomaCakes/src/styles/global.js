import { StyleSheet, StatusBar } from "react-native"
import { COLORS } from "../constants"

export const globalStyles = StyleSheet.create({

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


    contentContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },

})