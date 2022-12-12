import Home from "./pages/Home";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import PlayerGallery from "./pages/PlayerGallery";
import Register from "./pages/Register";
import Score from "./pages/Score";
import SearchTeams from "./pages/SearchTeams";
import Team from "./pages/Team";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./redux/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
          />
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="AboutUs"
            component={AboutUs}
          />
          <Stack.Screen
            name="PlayerGallery"
            component={PlayerGallery}
          />
          <Stack.Screen
            name="Score"
            component={Score}
          />
          <Stack.Screen
            name="Search Teams"
            component={SearchTeams}
            options={{
              headerStyle: { backgroundColor: "#323639" },
              headerTintColor: 'white',
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Team Information"
            component={Team}
            options={{
              headerStyle: { backgroundColor: "#323639" },
              headerTintColor: 'white',
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}