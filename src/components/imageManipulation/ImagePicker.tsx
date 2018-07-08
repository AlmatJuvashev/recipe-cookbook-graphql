import React from 'react';

import {  Text, StyleSheet, Image, PixelRatio } from 'react-native';
import glamorous from 'glamorous-native';
import ImagePicker from 'react-native-image-picker';
import {photoUpload, photoUploadAxios} from './UploadPhoto';


const Container = glamorous.view({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
})

const UploadButton = glamorous.touchableOpacity({
  backgroundColor: 'lightgrey',
  height: 44,
  justifyContent: 'center',
  alignItems: 'center',
})


interface PickImageProps {}

interface PickImageState {
    ImageSource: any;
}


export default class PickImage extends React.Component<PickImageProps, PickImageState> {
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
            ///let source = { uri: response };
            ///const userObject = this.state.navigation.getParam;
            this.setState({
                ImageSource: response
            }, () => photoUpload(this.state.ImageSource));
        }      
    });
}

  render() {
    return (
        <Container>
            <UploadButton onPress={this.selectPhotoTapped.bind(this)}>
                    {this.state.ImageSource === null ? <Text>Select a Photo</Text> :
                    <Image style={styles.ImageContainer} source={this.state.ImageSource}/>}
            </UploadButton>
        </Container>
    )
  }
};

const styles = StyleSheet.create({
 
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#23147F'
 },

 ImageContainer: {
   borderRadius: 3,
   width: 100,
   height: 100,
   borderColor: '#23147F',
   borderWidth: 1 / PixelRatio.get(),
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#23147F', 
 },

});