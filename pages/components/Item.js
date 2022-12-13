import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Item = ({ item, navigation }) => {
  
  function formatter(str) {
    return str.match(/\d{2}:\d{2} [AP]M/)[0];
  }

  return (
    <TouchableOpacity
      style={styles.score}
      onPress={() => {
        navigation.navigate('Details', { data: item });
      }}>
      <Text style={{ alignSelf: 'center' }}>{item.shortName}</Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{ flexGrow: 1 }}>
          <View style={styles.scoreRow}>
            <View style={styles.rows}>
              <Image
                source={{ uri: item.competitions[0].competitors[1].team.logo }}
                style={styles.image}
              />
              <Text
                style={
                  item.competitions[0].competitors[1].winner
                    ? styles.winner
                    : styles.base
                }>
                {item.competitions[0].competitors[1].team.name}
              </Text>
            </View>
            <Text
              style={
                item.competitions[0].competitors[1].winner
                  ? styles.winner
                  : styles.base
              }>
              {item.competitions[0].competitors[1].score}
            </Text>
          </View>
          <View style={styles.scoreRow}>
            <View style={styles.rows}>
              <Image
                source={{ uri: item.competitions[0].competitors[0].team.logo }}
                style={styles.image}
              />
              <Text
                style={
                  item.competitions[0].competitors[0].winner
                    ? styles.winner
                    : styles.base
                }>
                {item.competitions[0].competitors[0].team.name}
              </Text>
            </View>
            <Text
              style={
                item.competitions[0].competitors[0].winner
                  ? styles.winner
                  : styles.base
              }>
              {item.competitions[0].competitors[0].score}
            </Text>
          </View>
        </View>
        <View style={styles.gameInfo}>
          <Text
            style={
              item.status.type.state == 'post' ||
              item.status.type.state == 'pre'
                ? styles.ended
                : styles.ongoing
            }>
            {item.status.type.completed
              ? item.status.type.description
              : item.status.type.state == 'pre'
              ? `${formatter(item.status.type.shortDetail)}\n${item.competitions[0].odds[0].details}`
              : `${item.status.displayClock} - ${item.status.period}`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 40,
  },
  score: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    marginVertical: 1,
    backgroundColor: '#ecf0f1',
  },
  scoreRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rows: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  winner: {
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 10,
    fontSize: 18,
  },
  base: {
    marginHorizontal: 10,
  },
  gameInfo: {
    paddingLeft: 10,
    width: 60,
  },
  ongoing: {
    fontWeight: 'bold',
    fontSize: 11,
    color: 'red',
    textAlign: 'center',
  },
  ended: {
    fontWeight: 'bold',
    fontSize: 9,
    color: 'black',
    textAlign: 'center',
  },
});

export default Item;
