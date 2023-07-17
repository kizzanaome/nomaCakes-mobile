import * as React from 'react';
import { Text } from 'react-native';
import { COLORS, FONTS } from '../../constants/theme';

const MyAppText = (props) => {
    return (
        <Text style={{
            ...props.style,
            fontFamily: props?.style?.fontFamily || FONTS.regular,
            fontStyle: 'normal',
            color: props?.style?.color || COLORS.secondary
        }}>
            {props.children}
        </Text>
    );
};

export default MyAppText
