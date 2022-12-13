import { SafeAreaView, StyleSheet, TextInput, 
  Text, View, Button, Alert,ImageBackground, TouchableHighlight } from "react-native";
import { useState } from "react";
import Auth from "./components/Token"

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
    Auth.token = false;
    Alert.alert("Logged out successfully")
    navigation.navigate("Home");
  }

  const login = () => {
    if(authLogin(username, password)){
      Auth.token = true;
      setAuthFail(false);
      Alert.alert(
        "Login Successful",
        "Welcome " + username + "!",
        [
          { text: "OK", onPress: () => navigation.navigate("Home") }
        ]
      );
    }
    else {
      setAuthFail(true);
      setUsername(null);
      setPassword(null);
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
              <View style={styles.spacer}>
                <TouchableHighlight style={styles.button}
                  underlayColor={"#323639"}
                  onPress={() => navigation.navigate("Home")}>
                  <Text style={styles.text}>Home</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}
                  underlayColor={"#323639"}
                  onPress={() => logout()}>
                  <Text style={styles.text}>Logout</Text>
                </TouchableHighlight>
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
                textContentType="password"
              />
              <View style={styles.leftText}>  
                <Text style={{color:'blue'}} 
                    onPress={() => resetPass()}>
                    Forgot password? 
                </Text>
              </View>
              <View style={styles.spacer}>
                <TouchableHighlight style={styles.button}
                  underlayColor={"#323639"}
                  onPress={() => login()}>
                  <Text style={styles.text}>Login</Text>
                </TouchableHighlight>
              

                <TouchableHighlight style={styles.button}
                  underlayColor={"#323639"}
                  onPress={() => navigation.navigate("Register")}>
                  <Text style={styles.text}>Sign-Up</Text>
                </TouchableHighlight>
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
    fontSize:14,
    margin:5,
  },
  error:{
    backgroundColor:'white',
    color:'red',
    padding:2,
    textAlign:'center',
    fontSize:16,
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
    fontSize: 16,
    borderRadius:5,
  },
   text: {
    fontSize: 20,
     color: "white"
  },
  button: {
        backgroundColor: "black",
        padding: 10,
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
    justifyContent: "center",
  },
  spacer:{
    margin:30,
    padding:30,
  },
});