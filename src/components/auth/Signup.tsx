import React from 'react';
import { Component } from 'react';
import { Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { gql } from 'apollo-boost';
import { Query, Mutation } from 'react-apollo';
import glamorous from 'glamorous-native';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { CustomInput, CustomBtn } from '../common';

const SIGN_UP = gql`
    mutation signUp($authProvider: AuthProviderSignupData!) {
        createUser(authProvider: $authProvider) {
            id
            email
            password
        }
    }
`;


const Container = glamorous.view({
    flex: 1,
    justifyContent: 'center',  
  })


const WarningMsg = glamorous.text({
    color: '#f44336',
    marginVertical: 25,
    textDecorationLine: 'underline',
    fontSize: 15,
    alignSelf: 'center',
})


interface SignUpScreenProps {}
interface SingUpScreenState {
    email: string;
    password: string;
    disableBtn: boolean;
}

export default class SignUpComponent extends Component<SignUpScreenProps, SingUpScreenState> {
    state = {
        email: '',
        password: '',
        disabledBtn: false
    }

    public componentDidUpdate(prevState, nextState) {
        console.log('Email:::', this.prevState, 'Password:::', this.nextState)
        // if (this.state.email.length > 3 && this.state.password.length > 3) {
        //     this.setState({disabledBtn: false});
        // }
    }

    private createEmail = (email: string) => {
        this.setState({email}, () => {console.log(this.state.email)})
    }

    private createPassword = (password: string) => {
        this.setState({password}, () => {console.log(this.state.password)})
    }

    private signUpToDatabase = (createUser) => {
        console.log('YOU PRESSED THE BUTTON')
        createUser({
            variables: {
                authProvider: {
                    email: {
                        email: this.state.email,
                        password: this.state.password
                    }
                }
            }
        })

    }

    private navigateToLoginScreen = () => {
        return this.props.navigation.navigate('SignIn')
    }

  render() {
    return (
        
        <Mutation mutation={SIGN_UP}>
            {(createUser, {data: signupUserData, loading: loadingSignup, error: signupError}) => {
                console.log('CREATED USER:::', signupUserData)
                console.log('ERROR', signupError);
                if (signupUserData) { 
                    return this.navigateToLoginScreen();
                }
                return (
                    (loadingSignup ? <ActivityIndicator />
                    : (
                        <Container>
                            <CustomInput 
                                value={this.state.titleInputValue}    
                                label="Email"
                                onChangeText={this.createEmail.bind(this)}/>
                            <CustomInput 
                                secureTextEntry
                                value={this.state.descriptionInputValue}        
                                label="Password"
                                onChangeText={this.createPassword.bind(this)}/>
    
                            <CustomBtn 
                                raised={true}
                                disabled={this.state.disabledBtn}
                                name='Sign Up'
                                onPress={() => this.signUpToDatabase(createUser)}/>
                            <TouchableOpacity onPress={this.navigateToLoginScreen}>
                                <WarningMsg>Already logged in?</WarningMsg>
                            </TouchableOpacity>
                        </Container>
                    ) 
                )) 
            }}
        </Mutation>
    
    )
  }
};









