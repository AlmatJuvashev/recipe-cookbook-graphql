import React from 'react';
import { Form, Item, Input, Label } from 'native-base';


const CustomInput = (props) => {
    const {label, onChangeText, placeholder, value, secureTextEntry} = props;
    return (
        <Form>
            <Item floatingLabel>
                <Label>{label}</Label>
                <Input
                    secureTextEntry = {secureTextEntry} 
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    value={value}/>
            </Item>
        </Form>
    )
}

export { CustomInput }