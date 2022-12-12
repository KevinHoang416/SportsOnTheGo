import * as React from 'react';
import {Animated, View, StyleSheet, useWindowDimensions} from 'react-native';

export default function PlayerGallery({ navigation, route }) {
  const pictures = React.useMemo(() => ([
    'https://cdn.britannica.com/19/233519-050-F0604A51/LeBron-James-Los-Angeles-Lakers-Staples-Center-2019.jpg',
    'https://cdn.britannica.com/88/181288-050-212FB60C/Kevin-Durant-NBA.jpg',
    'https://cdn.britannica.com/09/188709-050-03BF34CB/Michael-Jordan.jpg',
    'https://cdn.britannica.com/88/163888-050-D9D34015/Dwyane-Wade-NBA-Miami-Heat.jpg',
    'https://cdn.britannica.com/85/207285-050-6547B1EC/Chris-Paul-2018.jpg',
    'https://cdn.britannica.com/99/190999-050-DE265806/Kobe-Bryant-Elias-Ayuso-Puerto-Rico-team-2007.jpg',
    'https://cdn.britannica.com/44/228344-050-9B21069E/American-basketball-player-Scottie-Pippen-1995.jpg',
    'https://cdn.britannica.com/37/198037-050-29AF9180/Charles-Barkley.jpg'
  ]), []);
  const scrollImage = React.useRef(new Animated.Value(0)).current;
  const {width} = useWindowDimensions();

  return (
    <>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollImage } } }],
          { useNativeDriver: true }
        )}
        horizontal
        renderItem={({item}) => {
          return (
            <>
              <View style={StyleSheet.absoluteFillObject}>
                <Animated.Image source={{ uri: item }} style={[StyleSheet.absoluteFillObject,{width}]} />
              </View>
              <View style={{width}}>
              </View>
            </>
          )
        }}
        data={pictures} />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#11"
  }
});
