import React from 'react';
import { Component } from 'react';
import { FormTextInput, View, Separator, LayoutAnimation, StyleSheet, Animated } from 'react-native';
import { CustomInput } from '../components/common';


interface SingUpScreenProps {

}

interface SingUpScreenState {
    username: string;
    password: string;
}

// private userNameTextInputAnim = new Animated.Value(0);

export default class SignUp extends Component<SingUpScreenProps, SingUpScreenState> {
    public state = {
        username: '',
        password: ''
    }

    public componentDidUpdate(prevProps, prevState) {
        if(prevState.username !== this.state.username) {
            console.log('State didn\'t change');
        }

        // if(prevState.username.length != this.state.username.length) {
        //     //LayoutAnimation.spring()
        //     this.animateUserNameTextInput();
        // }

    
    }

    private handleChangeUsername = (username: string) => {
        // if (username.length !== this.state.username.length) {
        //     LayoutAnimation.easeInEaseOut()
        // }
        this.setState({username}, () => {
            console.log(this.state.username)
        })
    }

    private handleChangePassword = (password: string) => {
        this.setState({password})
    }

    // private animateUsernameTextInput = () => {
    //     Animated.timing({
    //         this.userNameTextInputAnim, 
    //         {
    //             duration: 2000,
    //             toValue: this.state.username.lenght % 2 ? 0 : 1
    //         }
    //     }).start()
    // }


  render() {
    //   const usenameTextInputStyle = {
    //       transform: [
    //         {
    //             translateY: this.userNameTextInputAnim.interpolate({
    //                 inputRange: [0, 1],
    //                 outputRange: [0, 240]
    //             })
    //         }
    //       ]
    //   }

    return (
        <View>
            <Separator />
            {/* <Animated.Text style={usenameTextInputStyle} */}
            {/* <FormTextInput 
                value={this.state.username}
                onChangeText={this.handleChangeUsername}
            /> */}
            <CustomInput 
              value={this.state.username}    
              label="Enter Username"
              onChangeText={this.handleChangeUsername}/>
              {this.state.username && (
                  <React.Fragment>
                    <Separator />
                    <CustomInput 
                    value={this.state.password}    
                    label="Enter Password"
                    onChangeText={this.handleChangePassword}/>
                      </React.Fragment>
              )}
            
            {/* <FormTextInput 
                value={this.state.password}
                onChangeText={this.handleChangePassword}
            /> */}
            <Separator />
        </View>
      
    )
  }
};


const styles = StyleSheet.create({
    
})
