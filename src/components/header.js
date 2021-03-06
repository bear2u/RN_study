// Import Libaries
import React from 'react';
import { Text , View } from 'react-native';

// Make a componet
const Header = (props) => {
    const { textStyle , viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style = {textStyle} >
                {props.headerText} 
            </Text>
        </View>
    );
};

const styles = {
    viewStyle : {
        backgroundColor : '#CCCCCC',
        justifyContent : 'center',
        alignItems : 'center',
        height : 60,
        paddingTop : 15,
        shadowColor: '#000',
        shadowOffset : { width: 0 , height : 2 },
        shadowOpacity : 0.5,
        elevation : 2,
        position : 'relative'
    },
    textStyle : {
        fontSize : 20
    }
}

// Make the component
export default Header;