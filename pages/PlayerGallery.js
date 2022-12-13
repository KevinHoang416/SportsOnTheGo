import React, { useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Animated,
  useWindowDimensions,
  Image,ImageBackground
} from "react-native";

const background = { uri: "https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg?w=2000&t=st=1670897265~exp=1670897865~hmac=db50772987092c19a0849b383ba9fb287df8fa8c29efaed5f7df0881b477d994" };

const data = [
    {id:1, img:require("../assets/photo1.jpg"), title:"Lebron James", score:"4x Champion", pts:"Career 37,480 Points Scored",mvp:"4x MVP"},
    {id:2, img:require("../assets/photo2.jpg"), title:"Kevin Durant",score:"2x Champion", pts:"Career 26,336 Points Scored",mvp:"1x MVP"},
    {id:3, img:require("../assets/photo3.jpg"), title:"Michael Jordan",score:"6x Champion", pts:"Career 32,292 Points Scored",mvp:"5x MVP"},
    {id:4, img:require("../assets/photo4.jpg"), title:"Kobe Bryant",score:"5x Champion",pts:"Career 33,643 Points Scored",mvp:"1x MVP"},
    {id:5, img:require("../assets/photo5.jpg"), title:"Dwayne Wade",score:"3x Champion",pts:"Career 23,165 Points Scored",mvp:"0x MVP"},
    {id:6, img:require("../assets/photo6.jpg"), title:"Scottie Pippen",score:"6x Champion",pts:"Career 18,940 Points Scored",mvp:"0x MVP"},
]
export default function PlayerGallery({ navigation, route }) {
  const scrollX = useRef(new Animated.Value(0)).current;
  let { width: windowWidth, height:windowHeight } = useWindowDimensions();
  windowHeight=windowHeight-300;
  return (
    <SafeAreaView style={styles.container}>
           <ImageBackground source={background} resizeMode="cover" style={styles.backImage}>
          <View style={{height:windowHeight}}>
        <ScrollView
          horizontal={true}
          style={styles.scrollViewStyle}
          onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false}
              )}
          scrollEventThrottle={16}
        >
          {data.map((image, imageIndex) => {
            return (
              <Animated.View
                style={{ width: windowWidth,}}
              >
                <Image source={image.img} style={styles.portrait} />    
              </Animated.View>
            );
          })}
        </ScrollView>
      </View>            
      <View style={styles.area}>
              {data.map((image, imageIndex)=>{
                  const inputRange=[
                      windowWidth*(imageIndex-1),
                      windowWidth*(imageIndex),
                      windowWidth*(imageIndex+1),
                  ];
              return(
              <Animated.Text style={[styles.text, {transform:[
                  {translateY:scrollX.interpolate({
                      inputRange,
                      outputRange:[-500, -50, 0],
                  })}
              ]},{
                  opacity:scrollX.interpolate({
                      inputRange,
                      outputRange:[0, 1, 0]
                  })
              }, {
              }]}>
                  {image.title}
                  {'\n'}
                  {image.score}
                  {'\n'}
                  {image.mvp}
                  {'\n'}
                  {image.pts}
              </Animated.Text>
              );
              })}
          </View>
      </ImageBackground>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  portrait: {
    flex: 1,
    marginVertical: 1,
    width:350,
    alignSelf:"center",
    
  },
  area:{
      width:"100%",
      marginBottom:125,
  },
  text:{
      position:"absolute",
      fontSize:20,
      textAlign:"center",
      width:"100%",
      color:"white",
      margin: 16,
      bottom: -170,
  }, 
   backImage: {
    flex: 1,
    justifyContent: "center"
  },


});
