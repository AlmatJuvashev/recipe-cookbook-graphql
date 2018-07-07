import React from 'react';
import glamorous from 'glamorous-native';


const Container = glamorous.view({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
})

const UploadButton = glamorous.touchableOpacity({
  backgroundColor: 'green',
  height: 44,
  justifyContent: 'center',
  alignItems: 'center',
})

export class ImageLoaderScreen extends React.Component {
  state = {
    ImageSource: null,
  }
  private handleUploadButtonPress = async () => {

  }

  render() {
    return (
      <Container>
        <UploadButton onPress={this.handleUpladButtonPress}>
          <Text>Upload File</Text>
        </UploadButton>
      </Container>
    )
  }
}
//import axios  from 'axios';

// export const photoUpload = () => {
//     let photo = new FormData();
//     const imageFile = require('../images/brunch-cocktail-5317.jpg')

//     console.log('imageFile: ', imageFile);

//     photo.append('photo', imageFile);  
//     axios.post('https://api.graph.cool/file/v1/cjj6o7yn93pge0110o567afux', photo, {
//         headers: {'Content-Type': 'multipart/form-data',}
//     }).then(response => {
//         console.log('file upload response',response)
//     }).catch(error => console.log('ERROR:::', error))
// };

// //////






export const photoUpload2 = () => {
    let photo = new FormData();
    //const imageFile = require('../images/brunch-cocktail-5317.jpg')
    photo.append('photo', imageFile);  

    console.log('imageFile: ', {uri: ImageSource});

    fetch('https://api.graph.cool/file/v1/cjj6o7yn93pge0110o567afuxhttps://api.graph.cool/file/v1/cjj6o7yn93pge0110o567afux', {
        method: 'POST',
        body: photo
      }).then(response => {
        return response.json()
      }).then(file => {
        const fileId = file.id
      })
};


