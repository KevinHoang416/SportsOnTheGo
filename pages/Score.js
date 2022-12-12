import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Item from './components/Item';
import Details from './components/Details';
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();

const Scores = ({ navigation, route }) => {
  [data, setData] = useState();

  useEffect(() => {
    const interval = setInterval(fetchData, 1 * 1000);
  }, []);

  const fetchData = () => {
    fetch(
      'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard'
    )
      .then((response) => response.json())
      .then((json) => setData(json.events));
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={({item}) => <Item item={item} navigation={navigation}/>} />
    </SafeAreaView>
  );
};

export default function Score() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Daily Scores" component={Scores} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    padding: 8,
  },
});
