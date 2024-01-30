import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { useState } from 'react';
const PlaceholderImage = require('./assets/images/soleil.jpg');
import ImageViewer from './components/imageViewer';
import Button from './components/button';
import * as ImagePicker from 'expo-image-picker';


export default function App() {

  const [selectedImage, setSelectedImage] = useState(null);


  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('aucune image selectionné')
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} 
        selectedImage={selectedImage}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="choisir photo" onPress={pickImageAsync}></Button>
        <Button label={"utiliser cette photo"}></Button>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',

  },

  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',

  },
});
