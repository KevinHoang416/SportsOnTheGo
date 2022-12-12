import { StyleSheet, Button, View, ImageBackground } from 'react-native';
const image = { uri: "https://www.wallpaperflare.com/static/296/615/731/nba-basketball-logo-wallpaper.jpg" };

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Button
          color="black"
          title="Login"
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          color="black"
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
        <Button
          color="black"
          title="About Us"
          onPress={() => navigation.navigate("AboutUs")}
        />
        <Button
          color="black"
          title="PlayerGallery"
          onPress={() => navigation.navigate("PlayerGallery")}
        />
        <Button
          color="black"
          title="Score"
          onPress={() => navigation.navigate("Score")}
        />
        <Button
          color="black"
          title="Search Teams"
          onPress={() => navigation.navigate("Search Teams")}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  buttonstyles: {
    color: "black"

  },
  image: {
    flex: 1,
    justifyContent: "center"
  },

});
