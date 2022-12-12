import { SafeAreaView, StyleSheet, TextInput, 
  Text, View, Button, Alert,ImageBackground } from "react-native";
import { useState } from "react";
import Auth from "../Token"

const image = { uri: "https://www.wallpaperflare.com/static/296/615/731/nba-basketball-logo-wallpaper.jpg" };

export default function Login({ navigation, route }) {

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
    
  const [authFail, setAuthFail] = useState(false);



  const authLogin = (username, password) => {
    return (username == Auth.user && password == Auth.pass);
  }

  const resetPass = () =>
  {
    Alert.alert("Please contact our customer support to reset your password.")
  }

  const logout = () => {
    navigation.navigate("Home");
    Auth.token = false;
  }

  const login = () => {
    if(authLogin(username, password)){
      Auth.token = true;
      setAuthFail(false);
      navigation.navigate("Home");
    }
    else {
      setAuthFail(true);
    }
  }

    return (
      
      <SafeAreaView style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {authFail 
          ? <Text style={styles.error}  > 
              Login Failed! Incorrect Username or Password 
            </Text>
          : null
        }
        { Auth.token
          ? 
            <View>
              <Text style={styles.midText}> You are already signed into an account</Text>
              <View style={styles.button}>
                <Button color="black"
                  title="Logout"
                  onPress={() => logout()} />
              </View>
            </View>
          :
            <View>
              <TextInput
                style={styles.input}
                onChangeText={setUsername}
                value={username}
                placeholder="email address"
                placeholderTextColor='grey'
                keyboardType="email-address"
                textContentType="emailAddress"
              />
              <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="password"
                placeholderTextColor='grey'
                secureTextEntry={true}
                color
                textContentType="password"
              />
              <View style={styles.leftText}>  
                <Text style={{color:'blue'}} 
                    onPress={() => resetPass()}>
                    Forgot password? 
                </Text>
              </View>
              <View style={styles.button}>
                <Button 
                    color="black"
                    title="Login"
                    onPress={() => login()}/>
              </View>
              <View style={styles.button}>  
                    <Button 
                    color="black"
                    title="Sign Up"
                    onPress={() => navigation.navigate("Register")}/>
              </View>
            </View>
        }
        </ImageBackground>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  leftText:{
    flexDirection:'row-reverse',
    textAlign:'left',
    margin:5,
  },
  error:{
    backgroundColor:'black',
    color:'red',
    padding:2,
    textAlign:'center'
  },
  midText:{
    backgroundColor:'black',
    fontSize:16,
    color:'white',
    textAlign:'center',
    padding:2,
  },
  container: {
    flex:1,
    margin:20,
    marginVertical:50,
  },
  input: {
    backgroundColor:'black',
    color:'white',
    margin: 10,
    borderWidth: 1,
    padding: 10,
    fontSize: 16
  },
  button: {
    margin:10,
    padding:10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});