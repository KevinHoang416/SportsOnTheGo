import {
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import { useEffect } from 'react';

function formatter(str) {
  return str.match(/(0?[0-9]|1[0-9]|2[0-3]):[0-9]+\s[a-zA-Z]+/i)[0];
}

const Stats = ({ item, index, other }) => {
  return (
    <View style={styles.statsRow}>
      <Text
        style={
          item.displayValue > other[index].displayValue
            ? styles.statsFont.winner
            : styles.statsFont
        }>
        {item.displayValue}
      </Text>
      <Text style={{ textAlign: 'center' }}>{item.abbreviation}</Text>
      <Text
        style={
          item.displayValue < other[index].displayValue
            ? styles.statsFont.winner
            : styles.statsFont
        }>
        {other[index].displayValue}
      </Text>
    </View>
  );
};

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: data.shortName,
    });
  });

  return (
    <ScrollView style={{ marginTop: 20 }}>
      <View style={styles.scoreRow}>
        <View>
          <Image
            source={{ uri: data.competitions[0].competitors[1].team.logo }}
            style={styles.image}
          />
          <Text style={styles.abbreviation}>
            {data.competitions[0].competitors[1].team.abbreviation}
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text
            style={
              style={
              !data.competitions[0].competitors[1].winner &&
              data.status.type.state == 'post'
                ? styles.base
                : styles.winner
            }>
            {data.competitions[0].competitors[1].score}
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text
            style={
              data.status.type.state == 'post' ||
              data.status.type.state == 'pre'
                ? styles.ended
                : styles.ongoing
            }>
            {data.status.type.completed
              ? data.status.type.description
              : data.status.type.state == 'pre'
              ? `${formatter(data.status.type.shortDetail)}\n${
                  data.competitions[0].odds[0].details
                }`
              : `${data.status.displayClock} - ${data.status.period}`}
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text
            style={
              !data.competitions[0].competitors[0].winner &&
              data.status.type.state == 'post'
                ? styles.base
                : styles.winner
            }>
            {data.competitions[0].competitors[0].score}
          </Text>
        </View>
        <View>
          <Image
            source={{ uri: data.competitions[0].competitors[0].team.logo }}
            style={styles.image}
          />
          <Text style={styles.abbreviation}>
            {data.competitions[0].competitors[0].team.abbreviation}
          </Text>
        </View>
      </View>
      <Text style={styles.linescores.header}>Line Scores</Text>
      <View>
        <FlatList
          ListHeaderComponent={() => (
            <View style={styles.rows}>
              <Image
                source={{ uri: data.competitions[0].competitors[1].team.logo }}
                style={styles.image.small}
              />
              <Text style={styles.linescores.team}>
                {data.competitions[0].competitors[1].team.name}
              </Text>
            </View>
          )}
          data={data.competitions[0].competitors[1].linescores}
          renderItem={({ item }) => (
            <Text style={styles.linescores}>{item.value}</Text>
          )}
          horizontal
          ListFooterComponent={() => (
            <Text style={styles.linescores.final}>
              {data.competitions[0].competitors[1].score}
            </Text>
          )}
        />
        <FlatList
          ListHeaderComponent={() => (
            <View style={styles.rows}>
              <Image
                source={{ uri: data.competitions[0].competitors[0].team.logo }}
                style={styles.image.small}
              />
              <Text style={styles.linescores.team}>
                {data.competitions[0].competitors[0].team.name}
              </Text>
            </View>
          )}
          data={data.competitions[0].competitors[0].linescores}
          renderItem={({ item }) => (
            <Text style={styles.linescores}>{item.value}</Text>
          )}
          horizontal
          ListFooterComponent={() => (
            <Text style={styles.linescores.final}>
              {data.competitions[0].competitors[0].score}
            </Text>
          )}
        />
      </View>
      <View>
        <FlatList
          ListHeaderComponent={() => (
            <View style={styles.statsRow.header}>
              <Text style={styles.statsFont.header}>
                {data.competitions[0].competitors[1].team.name}
              </Text>
              <Text style={styles.statsFont.header}>Stats</Text>
              <Text style={styles.statsFont.header}>
                {data.competitions[0].competitors[0].team.name}
              </Text>
            </View>
          )}
          data={data.competitions[0].competitors[1].statistics}
          renderItem={({ item, index }) => (
            <Stats
              item={item}
              index={index}
              other={data.competitions[0].competitors[0].statistics}
            />
          )}
          ListFooterComponent={() => <View style={{ marginTop: 150 }} />}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 60,
    width: 60,

    small: {
      height: 25,
      width: 25,
      marginLeft: 10,
    },
  },
  rows: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  winner: {
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  base: {
    fontWeight: 'bold',
    fontSize: 18,
    marginHorizontal: 10,
    textAlign: 'center',
    color: 'silver',
  },
  ongoing: {
    fontWeight: 'bold',
    fontSize: 13,
    color: 'red',
    textAlign: 'center',
  },
  ended: {
    fontWeight: 'bold',
    fontSize: 13,
    color: 'black',
    textAlign: 'center',
  },
  abbreviation: {
    color: 'black',
    marginHorizontal: 10,
    fontSize: 10,
    textAlign: 'center',
  },
  linescores: {
    fontSize: 12,
    padding: 10,
    color: 'grey',

    final: {
      fontWeight: 'bold',
      color: 'black',
      fontSize: 12,
      padding: 10,
    },

    team: {
      fontWeight: 'bold',
      color: 'black',
      fontSize: 12,
      padding: 10,
      paddingLeft: 5,
      width: 160,
    },

    header: {
      fontWeight: 'bold',
      color: 'black',
      fontSize: 16,
      padding: 10,
      marginTop: 20,
    },
  },
  statsRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    borderBottomColor: 'silver',
    borderBottomWidth: 1,
    header: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
      marginTop: 50,
    },
  },
  statsFont: {
    winner: {
      fontWeight: 'bold',
      fontSize: 13,
      textAlign: 'center',
    },
    header: {
      fontWeight: 'bold',
      fontSize: 15,
      textAlign: 'center',
      width: 200,
    },
    color: 'grey',
    fontSize: 13,
    textAlign: 'center',
  },
});

export default Details;
