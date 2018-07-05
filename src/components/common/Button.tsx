import React  from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const CustomBtn = (props) => {
    const {name, raised, disabled, onPress} = props;
    const {styleBtnPrimary, disabledBtn} = styles;
    return (
        <Button 
            buttonStyle={styleBtnPrimary}
            disabledStyle={disabledBtn}
            raised={raised}
            disabled={disabled}
            title={name}
            onPress={onPress}/>
    )
}


const CustomBtn2 = (props) => {
    const {name, raised, disabled, onPress} = props;
    const {styleBtnSecondary, disabledBtn} = styles;
    return (
        <Button 
            buttonStyle={styleBtnSecondary}
            disabledStyle={disabledBtn}
            raised={raised}
            disabled={disabled}
            title={name}
            onPress={onPress}/>
    )
}

const styles = StyleSheet.create({
    styleBtnPrimary: {
        backgroundColor: '#23147F',
        marginTop: 15
    },
    styleBtnSecondary: {
        flex: 1,
        backgroundColor: '#4054B2',
        alignSelf: 'center',
    },
    disabledBtn: {
        backgroundColor: '#B6B4B6',
        // color: '#BBB9BC'
    }
})
export {CustomBtn, CustomBtn2};