import { StyleSheet, Text, SafeAreaView, View, 
  TextInput, Button, Alert, ImageBackground} from 'react-native';
  import { useState } from "react";
import Auth from "../Token"

const image = { uri: "https://www.wallpaperflare.com/static/296/615/731/nba-basketball-logo-wallpaper.jpg" };

export default function Register({ navigation, route }) {

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const regAccount = () =>{
    Alert.alert("Account created!");
    Auth.user = username;
    Auth.pass = password;
    navigation.navigate("Login");
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={username}
            placeholder="email address"
            keyboardType="email-address"
            textContentType="emailAddress"
            placeholderTextColor="grey"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="password"
            secureTextEntry={true}
            textContentType="password"
            placeholderTextColor="grey"
          />
          <View style={styles.spacer} />
          <View style={styles.button}>
            <Button 
                color="black"
                title="Register Account!"
                onPress={() => regAccount()}/>
          </View>
        </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex:1,
    margin:20,
    marginVertical:50,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor:'black',
    color:'white',
  },
  spacer:{
    margin:30,
    padding:30,
  },
  button: {
    margin:10,
    padding:20,
  },
  image: {
    flex: 1,
    justifyContent: "center",

  },
});