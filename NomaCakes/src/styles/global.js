import { StyleSheet, StatusBar } from "react-native"
import { COLORS, FONTS } from "../constants/theme"

export const globalStyles = StyleSheet.create({

    // mainContainer
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor:"white"
        // background: linear - gradient(253.85deg, #DB4060 - 21.73 %, rgba(217, 217, 217, 0) 95.87 %);
        // ImageBackground: 
    },
    // backgroundGradient
    linearGradient: {
        flex: 1,
        backgroundColor: COLORS.white,
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

    //-------- input styling-----------
    inputView: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        paddingVertical: 10,
        marginHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.34)',

    },

    inputIcons: {
        margin: 0,
        width: '7%',
        resizeMode: 'contain'
    },


    textInput: {
        width: '70%',
        marginHorizontal: 20,
        marginVertical: 5,
        fontSize: 20,
        fontStyle: 'normal',
        lineHeight: 26,
        fontFamily: FONTS.light
    },

    //------ end input styling ---------

    //-------- Authentication button styling -------

    button: {
        width: 300,
        height: 64,
        borderRadius: 50,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        marginTop: 50
    },
    buttonText: {
        color: COLORS.white,
        textAlign: 'center',
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 20,
        alignItems: 'center',
    },

    //--------End Authentication button styling -------


})