import { StyleSheet, View, ImageBackground, TouchableHighlight, Text } from 'react-native';
const image = { uri: "https://www.wallpaperflare.com/static/296/615/731/nba-basketball-logo-wallpaper.jpg" };

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <TouchableHighlight style={styles.button}
                underlayColor={"#323639"}
                onPress={() => navigation.navigate("Register")}>
            <Text style={styles.text}>Register</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
                underlayColor={"#323639"}
                onPress={() => navigation.navigate("Login")}>
            <Text style={styles.text}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
                underlayColor={"#323639"}
                onPress={() => navigation.navigate("PlayerGallery")}>
            <Text style={styles.text}>Player Gallery</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
                underlayColor={"#323639"}
                onPress={() => navigation.navigate("Score")}>
            <Text style={styles.text}>Score</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
                underlayColor={"#323639"}
                onPress={() => navigation.navigate("Search Teams")}>
            <Text style={styles.text}>Search Teams</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
                underlayColor={"#323639"}
                onPress={() => navigation.navigate("AboutUs")}>
            <Text style={styles.text}>About Us</Text>
        </TouchableHighlight>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  text: {
    fontSize: 22,
     color: "white"
  },
  button: {
        backgroundColor: "black",
        padding: 20,
        borderRadius: 5,
        margin: 5,
        flexDirection:'row',
        alignItems: "center",
        justifyContent: "center",
        textAlign:'center',
        shadowColor: "dimgray",
        shadowOpacity: 0.5,
        shadowOffset: { width: 4, height: 5 },
        
    },
  image: {
    flex: 1,
    justifyContent: "center"
  },

});
