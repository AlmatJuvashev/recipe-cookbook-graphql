import axios from 'axios'
const PHOTO_URL = 'https://api.graph.cool/file/v1/cjj6o7yn93pge0110o567afux';


export const photoUpload =  async (ImageSource) => {
    console.log(typeof ImageSource.uri);
    console.log('Received IMAGE SOURCE:::', ImageSource.uri);
    console.log('Received IMAGE SOURCE:::', ImageSource.fileName);
    
    let data = new FormData();
    data.append('data', {
      uri: ImageSource.uri, 
      name:  'image.png', 
      type: 'multipart/form-data'});
      
    console.log('DATA:::', data);
    try {
      const res = await fetch(PHOTO_URL, {
        method: 'POST',
        body: data,
      });
      const resJSON = res.json();
      console.log('RESPONSE', resJSON);
    } catch (err) {
      console.log('ERROR:::', err);
    }
};


export const photoUploadAxios =  (ImageSource) => {
  console.log(typeof ImageSource.uri);
    console.log('Received IMAGE SOURCE:::', ImageSource.uri);
    console.log('Received IMAGE SOURCE:::', ImageSource.fileName);
    
    let data = new FormData();
    data.append('imageFile: ', {
      uri: ImageSource.uri, 
      name:  ImageSource.fileName, 
      size: ImageSource.fileSize,
      type: 'multipart/form-data'
    });
    console.log('DATA:::', data);

  axios({
    method: 'post',
    url: PHOTO_URL,
    name: ImageSource.fileName,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
    data: ImageSource.uri,
  }).then(res => {
    console.log(`This is the GraphCool response ${res}`);
  }).catch(err => {
    console.log(`This is the error message ${err.message}`);
  });
}

