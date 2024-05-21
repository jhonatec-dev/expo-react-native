import { Image, StyleSheet } from "react-native";

export default function ImageViewer({ placeholderImage, selectedImage }) {
  const imgSource = selectedImage !== null ? { uri: selectedImage } : placeholderImage;
  return (
    <Image source={imgSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
