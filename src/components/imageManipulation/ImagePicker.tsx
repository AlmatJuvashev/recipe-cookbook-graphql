import React from 'react';
import { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, PixelRatio } from 'react-native';
import ImagePicker from 'react-native-image-picker';
// import { Image } from 'native-base';


export default class PickImage extends Component {
 public state = {
    ImageSource: null,
  }

  selectPhotoTapped() {

    const options = {
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
          skipBackup: true
        }
      };

      ImagePicker.showImagePicker(options, (response) => {

        console.log('Response = ', response);
        if(response.didCancel) {
            console.log('User cancelled photo picker');
        }
        else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
            console.log('User tapped custom button:', response.customButton);
        }
        else {
            let source = { uri: response.uri };

            this.setState({
                ImageSource: source
            }, () => console.log('IMAGE SOURCE:::', this.state.ImageSource));
        }      
    });
}

  render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                <View style={styles.ImageContainer}>
                    {this.state.ImageSource === null ? <Text>Select a Photo</Text> :
                    <Image style={styles.ImageContainer} source={this.state.ImageSource}/>
                }
                </View>
            </TouchableOpacity>
        </View>
  
    )
  }
};

const styles = StyleSheet.create({
 
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#FFF8E1'
 },

 ImageContainer: {
   borderRadius: 10,
   width: 250,
   height: 250,
   borderColor: '#9B9B9B',
   borderWidth: 1 / PixelRatio.get(),
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#CDDC39',
   
 },

});