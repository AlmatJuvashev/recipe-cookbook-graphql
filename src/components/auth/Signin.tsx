import React from 'react';
import { Component } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { gql } from 'apollo-boost';
import { Query, Mutation } from 'react-apollo';
import glamorous from 'glamorous-native';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CustomInput, CustomBtn } from '../common';


const LOG_IN = gql`
    mutation logIn($email: AUTH_PROVIDER_EMAIL) {
        signinUser(email: $email) {
            token
            user {
                id
                email
                password
            }
        }
    }
`;



const Container = glamorous.view({
    flex: 1,
    justifyContent: 'center',
    
  })



interface SignUpScreenProps {}
interface SingUpScreenState {
    id: any;
    email: string;
    password: string;
    disableBtn: boolean;
}

export default class SignInComponent extends Component<SignUpScreenProps, SingUpScreenState> {
    state = {
        id: '',
        email: '',
        password: '',
        disabledBtn: false
    }

    public componentDidUpdate(prevState, nextState)  {
        if (this.state.email.length > 3 && this.state.password > 3) {
            this.setState({disabledBtn: false})
        }
    }

    private createEmail = (email: string) => {
        this.setState({email}, () => {console.log(this.state.email)})
    }

    private createPassword = (password: string) => {
        this.setState({password}, () => {console.log(this.state.password)})
    }

    private signInToDatabase = (signinUser) => {
        console.log('YOU PRESSED LOGGED IN BUTTON')

        signinUser({
            variables: {
                email: {
                    email: this.state.email,
                    password: this.state.password
                }
            }
        })
        
    }

    private setToken = async ({token, id, email}) => {
        console.log('RECEIVED TOKEN', token)
        try {
            await AsyncStorage.setItem('token', token.toString());
          } catch (error) {
            console.log('Couldn\'t set token', error);
          }
        return this.props.navigation.navigate('Home', {id, email});
    }

  render() {
    return ( 
        <Mutation mutation={LOG_IN}>
            {(signinUser, {data: signinUserData, loading: loadingSignIn, error: signinError}) => {
                if (signinUserData) {
                    signinUser = signinUserData.signinUser;
                    this.setToken(signinUser);
                    
                }
                console.log('LOGED USER:::', signinUserData);
                console.log('ERROR LOGED', signinError);      
                return (
                    (loadingSignIn ? <ActivityIndicator /> :
                    (<Container>
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
                            name='Login'
                            onPress={() => this.signInToDatabase(signinUser)}/>
                    </Container>
                    )
                )) 
            }}
        </Mutation> 
    
    )
  }
};









