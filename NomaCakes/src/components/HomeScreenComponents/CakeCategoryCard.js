import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { HomeCakeImage } from '../../constants/images'
import { StartIcon } from '../../constants/icons'
import MyAppText from '../common/MyAppText'
import { COLORS } from '../../constants'
import { FONTS } from '../../constants/theme'

function CakeCategoriesCard() {
    return (
        <View>
            <View style={{
                marginRight: 7
            }}>
                <HomeCakeImage />
                <View style={styles.abstractContent}>
                    <View style={{
                        position: "absolute",
                        alignItems: 'center',
                        textAlign: "center",
                        justifyContent: 'center',
                        right: 225,
                        bottom: 115,
                    }}
                    >
                        <StartIcon />

                    </View>
                    <MyAppText style={{
                        color: COLORS.white,
                        fontFamily: FONTS.semiBold,
                        fontSize: 17,
                        padding: 0,
                        position: "absolute",
                        alignItems: 'center',
                        textAlign: "center",
                        justifyContent: 'center',
                        right: 190,
                        bottom: 105,
                    }}>
                        5.0
                    </MyAppText>

                    <View style={{
                        backgroundColor: "#DB4060",
                        borderColor: '#DB4060',
                        borderWidth: 2,
                        padding: 2,
                        position: "absolute",
                        alignItems: 'center',
                        textAlign: "center",
                        justifyContent: 'center',
                        left: 180,
                        bottom: 120,
                        width: 60,
                        height: 30,
                        borderRadius: 5
                    }}>
                        <MyAppText style={{
                            color: COLORS.white,
                            fontFamily: FONTS.semiBold,
                            fontSize: 17,
                            padding: 0,
                            // position: "absolute",
                            // bottom: 125,
                            // color:"#DB4060",
                            // fontWeight: 600,
                            // lineHeight: "normal"
                        }}>
                            -35%
                        </MyAppText>
                    </View>
                    <MyAppText style={{
                        color: COLORS.white,
                        fontFamily: FONTS.semiBold,
                        fontSize: 17,
                        // fontWeight: 600,
                        // lineHeight: "normal"
                    }}>
                        Temptations
                    </MyAppText>
                    <MyAppText style={styles.abstractText}>Birthday</MyAppText>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    abstractContent: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 15
    },

    abstractText: {
        color: COLORS.white,
        //  borderColor:'red',
        // borderWidth:2,
        fontSize: 13
        // fontWeight:'bold'
    },

})

export default CakeCategoriesCard;