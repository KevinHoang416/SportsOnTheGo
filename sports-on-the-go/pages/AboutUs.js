import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import TextAnimator from './TextAnimator'

function Kevin() {
  return (
    <ScrollView>
      <View style={styles.aboutContainer}>
        <Image
          style={styles.headerImage}
          source={{
            uri: "https://humber.ca/orientation/sites/default/files/digital-swag/giphy/HumberOrientation-Smiley.gif",
          }}
        />
        <Text style={styles.mainHeader}>
          <Text style={{ color: "#ffc3a0" }}>M</Text>
          <Text style={{ color: "#ffbea7" }}>e</Text>
          <Text style={{ color: "#ffb9ae" }}>e</Text>
          <Text style={{ color: "#ffb4b5" }}>t</Text>{" "}
          <Text style={{ color: "#ffafbd" }}>t</Text>
          <Text style={{ color: "#ffb4b5" }}>h</Text>
          <Text style={{ color: "#ffb9ae" }}>e</Text>{" "}
          <Text style={{ color: "#ffbea7" }}>t</Text>
          <Text style={{ color: "#ffc3a0" }}>e</Text>
          <Text style={{ color: "#ffbea7" }}>a</Text>
          <Text style={{ color: "#ffb9ae" }}>m</Text>
          <Text style={{ color: "#ffb4b5" }}>!</Text>
        </Text>
        <Text style={styles.paraStyle}>
          <Text style={{ color: "#cc2b5e" }}>W</Text>
          <Text style={{ color: "#c52965" }}>e</Text>{" "}
          <Text style={{ color: "#be296c" }}>w</Text>
          <Text style={{ color: "#b62b72" }}>o</Text>
          <Text style={{ color: "#ac2d78" }}>r</Text>
          <Text style={{ color: "#a32f7c" }}>k</Text>{" "}
          <Text style={{ color: "#983281" }}>t</Text>
          <Text style={{ color: "#8d3584" }}>o</Text>
          <Text style={{ color: "#813886" }}>g</Text>
          <Text style={{ color: "#753a88" }}>e</Text>
          <Text style={{ color: "#813886" }}>t</Text>
          <Text style={{ color: "#8d3584" }}>h</Text>
          <Text style={{ color: "#983281" }}>e</Text>
          <Text style={{ color: "#a32f7c" }}>r</Text>{" "}
          <Text style={{ color: "#ac2d78" }}>t</Text>
          <Text style={{ color: "#b62b72" }}>o</Text>{" "}
          <Text style={{ color: "#be296c" }}>d</Text>
          <Text style={{ color: "#c52965" }}>e</Text>
          <Text style={{ color: "#cc2b5e" }}>s</Text>
          <Text style={{ color: "#c52965" }}>i</Text>
          <Text style={{ color: "#be296c" }}>g</Text>
          <Text style={{ color: "#b62b72" }}>n</Text>
          <Text style={{ color: "#ac2d78" }}>,</Text>{" "}
          <Text style={{ color: "#a32f7c" }}>c</Text>
          <Text style={{ color: "#983281" }}>r</Text>
          <Text style={{ color: "#8d3584" }}>e</Text>
          <Text style={{ color: "#813886" }}>a</Text>
          <Text style={{ color: "#753a88" }}>t</Text>
          <Text style={{ color: "#813886" }}>e</Text>{" "}
          <Text style={{ color: "#8d3584" }}>a</Text>
          <Text style={{ color: "#983281" }}>n</Text>
          <Text style={{ color: "#a32f7c" }}>d</Text>{" "}
          <Text style={{ color: "#ac2d78" }}>p</Text>
          <Text style={{ color: "#b62b72" }}>r</Text>
          <Text style={{ color: "#be296c" }}>o</Text>
          <Text style={{ color: "#c52965" }}>d</Text>
          <Text style={{ color: "#cc2b5e" }}>u</Text>
          <Text style={{ color: "#c52965" }}>c</Text>
          <Text style={{ color: "#be296c" }}>e</Text>{" "}
          <Text style={{ color: "#b62b72" }}>w</Text>
          <Text style={{ color: "#ac2d78" }}>o</Text>
          <Text style={{ color: "#a32f7c" }}>r</Text>
          <Text style={{ color: "#983281" }}>k</Text>{" "}
          <Text style={{ color: "#8d3584" }}>t</Text>
          <Text style={{ color: "#813886" }}>h</Text>
          <Text style={{ color: "#753a88" }}>a</Text>
          <Text style={{ color: "#813886" }}>t</Text>{" "}
          <Text style={{ color: "#8d3584" }}>w</Text>
          <Text style={{ color: "#983281" }}>e</Text>{" "}
          <Text style={{ color: "#a32f7c" }}>a</Text>
          <Text style={{ color: "#ac2d78" }}>r</Text>
          <Text style={{ color: "#b62b72" }}>e</Text>{" "}
          <Text style={{ color: "#be296c" }}>p</Text>
          <Text style={{ color: "#c52965" }}>r</Text>
          <Text style={{ color: "#cc2b5e" }}>o</Text>
          <Text style={{ color: "#c52965" }}>u</Text>
          <Text style={{ color: "#be296c" }}>d</Text>{" "}
          <Text style={{ color: "#b62b72" }}>o</Text>
          <Text style={{ color: "#ac2d78" }}>f</Text>{" "}
          <Text style={{ color: "#a32f7c" }}>f</Text>
          <Text style={{ color: "#983281" }}>o</Text>
          <Text style={{ color: "#8d3584" }}>r</Text>{" "}
          <Text style={{ color: "#813886" }}>f</Text>
          <Text style={{ color: "#753a88" }}>o</Text>
          <Text style={{ color: "#813886" }}>l</Text>
          <Text style={{ color: "#8d3584" }}>k</Text>
          <Text style={{ color: "#983281" }}>s</Text>{" "}
          <Text style={{ color: "#a32f7c" }}>w</Text>
          <Text style={{ color: "#ac2d78" }}>e</Text>{" "}
          <Text style={{ color: "#b62b72" }}>b</Text>
          <Text style={{ color: "#be296c" }}>e</Text>
          <Text style={{ color: "#b62b72" }}>l</Text>
          <Text style={{ color: "#ac2d78" }}>i</Text>
          <Text style={{ color: "#a32f7c" }}>e</Text>
          <Text style={{ color: "#983281" }}>v</Text>
          <Text style={{ color: "#8d3584" }}>e</Text>{" "}
          <Text style={{ color: "#813886" }}>i</Text>
          <Text style={{ color: "#753a88" }}>n</Text>
          <Text style={{ color: "#813886" }}>.</Text>
        </Text>
        <View>
          <Image
            style={styles.imgStyle}
            source={{
              uri: "https://thumbs.gfycat.com/ShimmeringWhisperedBilby-max-1mb.gif",
            }}
          />
        </View>
        <View style={styles.aboutLayout}>
          <Text style={styles.paraStyle}>
            <Text style={{ color: "#de6262" }}>K</Text>
            <Text style={{ color: "#e16a64" }}>e</Text>
            <Text style={{ color: "#e57166" }}>v</Text>
            <Text style={{ color: "#e87869" }}>i</Text>
            <Text style={{ color: "#eb806b" }}>n</Text>{" "}
            <Text style={{ color: "#ed876e" }}>H</Text>
            <Text style={{ color: "#f08e72" }}>o</Text>
            <Text style={{ color: "#f39575" }}>a</Text>
            <Text style={{ color: "#f59c79" }}>n</Text>
            <Text style={{ color: "#f8a37e" }}>g</Text>{" "}
            <Text style={{ color: "#faaa82" }}>—</Text>{" "}
            <Text style={{ color: "#fdb187" }}>T</Text>
            <Text style={{ color: "#ffb88c" }}>e</Text>
            <Text style={{ color: "#fdb187" }}>a</Text>
            <Text style={{ color: "#faaa82" }}>m</Text>{" "}
            <Text style={{ color: "#f8a37e" }}>L</Text>
            <Text style={{ color: "#f59c79" }}>e</Text>
            <Text style={{ color: "#f39575" }}>a</Text>
            <Text style={{ color: "#f08e72" }}>d</Text>
          </Text>
          <Text style={styles.aboutSubHeader}>
            <Text style={{ color: "#7b4397" }}>A</Text>
            <Text style={{ color: "#953990" }}>b</Text>
            <Text style={{ color: "#ad2c84" }}>o</Text>
            <Text style={{ color: "#c01d73" }}>u</Text>
            <Text style={{ color: "#cf0f60" }}>t</Text>{" "}
            <Text style={{ color: "#d81149" }}>M</Text>
            <Text style={{ color: "#dc2430" }}>e</Text>
          </Text>
          <TextAnimator
            style={[styles.paraStyle, styles.aboutPara]}
            content="The name's Kevin Hoang. I am a tireless seeker of knowledge, occassional purveyor of wisdom and also, coincidentally, a graphic designer."
            duration={500}
          />
        </View>
        <Text style={styles.mainHeader}>
          <Text style={{ color: "#43cea2" }}>F</Text>
          <Text style={{ color: "#28c9a6" }}>o</Text>
          <Text style={{ color: "#00c4a9" }}>l</Text>
          <Text style={{ color: "#00bfad" }}>l</Text>
          <Text style={{ color: "#00bab0" }}>o</Text>
          <Text style={{ color: "#00b5b3" }}>w</Text>{" "}
          <Text style={{ color: "#00afb5" }}>m</Text>
          <Text style={{ color: "#00aab7" }}>e</Text>{" "}
          <Text style={{ color: "#00a4b9" }}>o</Text>
          <Text style={{ color: "#009eba" }}>n</Text>{" "}
          <Text style={{ color: "#0099bb" }}>S</Text>
          <Text style={{ color: "#0093bb" }}>o</Text>
          <Text style={{ color: "#008dba" }}>c</Text>
          <Text style={{ color: "#0087b9" }}>i</Text>
          <Text style={{ color: "#0081b7" }}>a</Text>
          <Text style={{ color: "#007ab4" }}>l</Text>{" "}
          <Text style={{ color: "#0074b1" }}>M</Text>
          <Text style={{ color: "#006ead" }}>e</Text>
          <Text style={{ color: "#0067a8" }}>d</Text>
          <Text style={{ color: "#0061a3" }}>i</Text>
          <Text style={{ color: "#185a9d" }}>a</Text>
        </Text>
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL("https://www.instagram.com/microsoft/?hl=en")
            }
          >
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL("https://discord.com/users/615342101085028368")
            }
          >
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn.logojoy.com/wp-content/uploads/20210422095037/discord-mascot.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL("https://github.com/KevinHoang416")}
          >
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
function Davin() {
  return (
    <ScrollView>
      <View style={styles.aboutContainer}>
        <Image
          style={styles.headerImage}
          source={{
            uri: "https://humber.ca/orientation/sites/default/files/digital-swag/giphy/HumberOrientation-Smiley.gif",
          }}
        />
        <Text style={styles.mainHeader}>
          <Text style={{ color: "#ffc3a0" }}>M</Text>
          <Text style={{ color: "#ffbea7" }}>e</Text>
          <Text style={{ color: "#ffb9ae" }}>e</Text>
          <Text style={{ color: "#ffb4b5" }}>t</Text>{" "}
          <Text style={{ color: "#ffafbd" }}>t</Text>
          <Text style={{ color: "#ffb4b5" }}>h</Text>
          <Text style={{ color: "#ffb9ae" }}>e</Text>{" "}
          <Text style={{ color: "#ffbea7" }}>t</Text>
          <Text style={{ color: "#ffc3a0" }}>e</Text>
          <Text style={{ color: "#ffbea7" }}>a</Text>
          <Text style={{ color: "#ffb9ae" }}>m</Text>
          <Text style={{ color: "#ffb4b5" }}>!</Text>
        </Text>
        <Text style={styles.paraStyle}>
          <Text style={{ color: "#cc2b5e" }}>W</Text>
          <Text style={{ color: "#c52965" }}>e</Text>{" "}
          <Text style={{ color: "#be296c" }}>w</Text>
          <Text style={{ color: "#b62b72" }}>o</Text>
          <Text style={{ color: "#ac2d78" }}>r</Text>
          <Text style={{ color: "#a32f7c" }}>k</Text>{" "}
          <Text style={{ color: "#983281" }}>t</Text>
          <Text style={{ color: "#8d3584" }}>o</Text>
          <Text style={{ color: "#813886" }}>g</Text>
          <Text style={{ color: "#753a88" }}>e</Text>
          <Text style={{ color: "#813886" }}>t</Text>
          <Text style={{ color: "#8d3584" }}>h</Text>
          <Text style={{ color: "#983281" }}>e</Text>
          <Text style={{ color: "#a32f7c" }}>r</Text>{" "}
          <Text style={{ color: "#ac2d78" }}>t</Text>
          <Text style={{ color: "#b62b72" }}>o</Text>{" "}
          <Text style={{ color: "#be296c" }}>d</Text>
          <Text style={{ color: "#c52965" }}>e</Text>
          <Text style={{ color: "#cc2b5e" }}>s</Text>
          <Text style={{ color: "#c52965" }}>i</Text>
          <Text style={{ color: "#be296c" }}>g</Text>
          <Text style={{ color: "#b62b72" }}>n</Text>
          <Text style={{ color: "#ac2d78" }}>,</Text>{" "}
          <Text style={{ color: "#a32f7c" }}>c</Text>
          <Text style={{ color: "#983281" }}>r</Text>
          <Text style={{ color: "#8d3584" }}>e</Text>
          <Text style={{ color: "#813886" }}>a</Text>
          <Text style={{ color: "#753a88" }}>t</Text>
          <Text style={{ color: "#813886" }}>e</Text>{" "}
          <Text style={{ color: "#8d3584" }}>a</Text>
          <Text style={{ color: "#983281" }}>n</Text>
          <Text style={{ color: "#a32f7c" }}>d</Text>{" "}
          <Text style={{ color: "#ac2d78" }}>p</Text>
          <Text style={{ color: "#b62b72" }}>r</Text>
          <Text style={{ color: "#be296c" }}>o</Text>
          <Text style={{ color: "#c52965" }}>d</Text>
          <Text style={{ color: "#cc2b5e" }}>u</Text>
          <Text style={{ color: "#c52965" }}>c</Text>
          <Text style={{ color: "#be296c" }}>e</Text>{" "}
          <Text style={{ color: "#b62b72" }}>w</Text>
          <Text style={{ color: "#ac2d78" }}>o</Text>
          <Text style={{ color: "#a32f7c" }}>r</Text>
          <Text style={{ color: "#983281" }}>k</Text>{" "}
          <Text style={{ color: "#8d3584" }}>t</Text>
          <Text style={{ color: "#813886" }}>h</Text>
          <Text style={{ color: "#753a88" }}>a</Text>
          <Text style={{ color: "#813886" }}>t</Text>{" "}
          <Text style={{ color: "#8d3584" }}>w</Text>
          <Text style={{ color: "#983281" }}>e</Text>{" "}
          <Text style={{ color: "#a32f7c" }}>a</Text>
          <Text style={{ color: "#ac2d78" }}>r</Text>
          <Text style={{ color: "#b62b72" }}>e</Text>{" "}
          <Text style={{ color: "#be296c" }}>p</Text>
          <Text style={{ color: "#c52965" }}>r</Text>
          <Text style={{ color: "#cc2b5e" }}>o</Text>
          <Text style={{ color: "#c52965" }}>u</Text>
          <Text style={{ color: "#be296c" }}>d</Text>{" "}
          <Text style={{ color: "#b62b72" }}>o</Text>
          <Text style={{ color: "#ac2d78" }}>f</Text>{" "}
          <Text style={{ color: "#a32f7c" }}>f</Text>
          <Text style={{ color: "#983281" }}>o</Text>
          <Text style={{ color: "#8d3584" }}>r</Text>{" "}
          <Text style={{ color: "#813886" }}>f</Text>
          <Text style={{ color: "#753a88" }}>o</Text>
          <Text style={{ color: "#813886" }}>l</Text>
          <Text style={{ color: "#8d3584" }}>k</Text>
          <Text style={{ color: "#983281" }}>s</Text>{" "}
          <Text style={{ color: "#a32f7c" }}>w</Text>
          <Text style={{ color: "#ac2d78" }}>e</Text>{" "}
          <Text style={{ color: "#b62b72" }}>b</Text>
          <Text style={{ color: "#be296c" }}>e</Text>
          <Text style={{ color: "#b62b72" }}>l</Text>
          <Text style={{ color: "#ac2d78" }}>i</Text>
          <Text style={{ color: "#a32f7c" }}>e</Text>
          <Text style={{ color: "#983281" }}>v</Text>
          <Text style={{ color: "#8d3584" }}>e</Text>{" "}
          <Text style={{ color: "#813886" }}>i</Text>
          <Text style={{ color: "#753a88" }}>n</Text>
          <Text style={{ color: "#813886" }}>.</Text>
        </Text>
        <View>
          <Image
            style={styles.imgStyle}
            source={{
              uri: "https://camo.githubusercontent.com/3601eb4fac4d9725a2ff9b068d3b1c1931496a0c99a9a1e9adc54971dd2c1138/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313136323037372f73637265656e73686f74732f333834383931342f6d656469612f37656437643563613037346234386233323831353065356132333165386431662e676966",
            }}
          />
        </View>
        <View style={styles.aboutLayout}>
          <Text style={styles.paraStyle}>
            <Text style={{ color: "#de6262" }}>D</Text>
            <Text style={{ color: "#df6563" }}>a</Text>
            <Text style={{ color: "#e16864" }}>v</Text>
            <Text style={{ color: "#e26c65" }}>i</Text>
            <Text style={{ color: "#e46f65" }}>n</Text>{" "}
            <Text style={{ color: "#e57266" }}>R</Text>
            <Text style={{ color: "#e67567" }}>i</Text>
            <Text style={{ color: "#e87869" }}>c</Text>
            <Text style={{ color: "#e97b6a" }}>k</Text>
            <Text style={{ color: "#ea7f6b" }}>e</Text>
            <Text style={{ color: "#eb826c" }}>t</Text>
            <Text style={{ color: "#ed856d" }}>t</Text>
            <Text style={{ color: "#ee886f" }}>s</Text>{" "}
            <Text style={{ color: "#ef8b70" }}>—</Text>{" "}
            <Text style={{ color: "#f08e72" }}>S</Text>
            <Text style={{ color: "#f19173" }}>t</Text>
            <Text style={{ color: "#f29475" }}>a</Text>
            <Text style={{ color: "#f39776" }}>t</Text>
            <Text style={{ color: "#f59a78" }}>s</Text>{" "}
            <Text style={{ color: "#f69d7a" }}>E</Text>
            <Text style={{ color: "#f7a07c" }}>n</Text>
            <Text style={{ color: "#f8a37e" }}>t</Text>
            <Text style={{ color: "#f9a67f" }}>h</Text>
            <Text style={{ color: "#faa981" }}>u</Text>
            <Text style={{ color: "#fbac83" }}>s</Text>
            <Text style={{ color: "#fcaf85" }}>i</Text>
            <Text style={{ color: "#fdb288" }}>a</Text>
            <Text style={{ color: "#feb58a" }}>s</Text>
            <Text style={{ color: "#ffb88c" }}>t</Text>
          </Text>
          <Text style={styles.aboutSubHeader}>
            <Text style={{ color: "#7b4397" }}>A</Text>
            <Text style={{ color: "#953990" }}>b</Text>
            <Text style={{ color: "#ad2c84" }}>o</Text>
            <Text style={{ color: "#c01d73" }}>u</Text>
            <Text style={{ color: "#cf0f60" }}>t</Text>{" "}
            <Text style={{ color: "#d81149" }}>M</Text>
            <Text style={{ color: "#dc2430" }}>e</Text>
          </Text>
          <TextAnimator
            style={[styles.paraStyle, styles.aboutPara]}
            content="I do the work I do because I love it. I like the industry. I like the people I meet. I like to talk shop. I embrace the nerd. I like to make the web a better place. Hopefully we cross paths in the real world someday and we can make it a better place together."
            duration={500}
          />
        </View>
        <Text style={styles.mainHeader}>
          <Text style={{ color: "#43cea2" }}>F</Text>
          <Text style={{ color: "#28c9a6" }}>o</Text>
          <Text style={{ color: "#00c4a9" }}>l</Text>
          <Text style={{ color: "#00bfad" }}>l</Text>
          <Text style={{ color: "#00bab0" }}>o</Text>
          <Text style={{ color: "#00b5b3" }}>w</Text>{" "}
          <Text style={{ color: "#00afb5" }}>m</Text>
          <Text style={{ color: "#00aab7" }}>e</Text>{" "}
          <Text style={{ color: "#00a4b9" }}>o</Text>
          <Text style={{ color: "#009eba" }}>n</Text>{" "}
          <Text style={{ color: "#0099bb" }}>S</Text>
          <Text style={{ color: "#0093bb" }}>o</Text>
          <Text style={{ color: "#008dba" }}>c</Text>
          <Text style={{ color: "#0087b9" }}>i</Text>
          <Text style={{ color: "#0081b7" }}>a</Text>
          <Text style={{ color: "#007ab4" }}>l</Text>{" "}
          <Text style={{ color: "#0074b1" }}>M</Text>
          <Text style={{ color: "#006ead" }}>e</Text>
          <Text style={{ color: "#0067a8" }}>d</Text>
          <Text style={{ color: "#0061a3" }}>i</Text>
          <Text style={{ color: "#185a9d" }}>a</Text>
        </Text>
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL("https://www.instagram.com/microsoft/?hl=en")
            }
          >
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL("https://discord.com/users/120155377777115139")
            }
          >
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn.logojoy.com/wp-content/uploads/20210422095037/discord-mascot.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL("https://github.com/Davin-Ricketts")}
          >
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
function Tyler() {
  return (
    <ScrollView>
      <View style={styles.aboutContainer}>
        <Image
          style={styles.headerImage}
          source={{
            uri: "https://humber.ca/orientation/sites/default/files/digital-swag/giphy/HumberOrientation-Smiley.gif",
          }}
        />
        <Text style={styles.mainHeader}>
          <Text style={{ color: "#ffc3a0" }}>M</Text>
          <Text style={{ color: "#ffbea7" }}>e</Text>
          <Text style={{ color: "#ffb9ae" }}>e</Text>
          <Text style={{ color: "#ffb4b5" }}>t</Text>{" "}
          <Text style={{ color: "#ffafbd" }}>t</Text>
          <Text style={{ color: "#ffb4b5" }}>h</Text>
          <Text style={{ color: "#ffb9ae" }}>e</Text>{" "}
          <Text style={{ color: "#ffbea7" }}>t</Text>
          <Text style={{ color: "#ffc3a0" }}>e</Text>
          <Text style={{ color: "#ffbea7" }}>a</Text>
          <Text style={{ color: "#ffb9ae" }}>m</Text>
          <Text style={{ color: "#ffb4b5" }}>!</Text>
        </Text>
        <Text style={styles.paraStyle}>
          <Text style={{ color: "#cc2b5e" }}>W</Text>
          <Text style={{ color: "#c52965" }}>e</Text>{" "}
          <Text style={{ color: "#be296c" }}>w</Text>
          <Text style={{ color: "#b62b72" }}>o</Text>
          <Text style={{ color: "#ac2d78" }}>r</Text>
          <Text style={{ color: "#a32f7c" }}>k</Text>{" "}
          <Text style={{ color: "#983281" }}>t</Text>
          <Text style={{ color: "#8d3584" }}>o</Text>
          <Text style={{ color: "#813886" }}>g</Text>
          <Text style={{ color: "#753a88" }}>e</Text>
          <Text style={{ color: "#813886" }}>t</Text>
          <Text style={{ color: "#8d3584" }}>h</Text>
          <Text style={{ color: "#983281" }}>e</Text>
          <Text style={{ color: "#a32f7c" }}>r</Text>{" "}
          <Text style={{ color: "#ac2d78" }}>t</Text>
          <Text style={{ color: "#b62b72" }}>o</Text>{" "}
          <Text style={{ color: "#be296c" }}>d</Text>
          <Text style={{ color: "#c52965" }}>e</Text>
          <Text style={{ color: "#cc2b5e" }}>s</Text>
          <Text style={{ color: "#c52965" }}>i</Text>
          <Text style={{ color: "#be296c" }}>g</Text>
          <Text style={{ color: "#b62b72" }}>n</Text>
          <Text style={{ color: "#ac2d78" }}>,</Text>{" "}
          <Text style={{ color: "#a32f7c" }}>c</Text>
          <Text style={{ color: "#983281" }}>r</Text>
          <Text style={{ color: "#8d3584" }}>e</Text>
          <Text style={{ color: "#813886" }}>a</Text>
          <Text style={{ color: "#753a88" }}>t</Text>
          <Text style={{ color: "#813886" }}>e</Text>{" "}
          <Text style={{ color: "#8d3584" }}>a</Text>
          <Text style={{ color: "#983281" }}>n</Text>
          <Text style={{ color: "#a32f7c" }}>d</Text>{" "}
          <Text style={{ color: "#ac2d78" }}>p</Text>
          <Text style={{ color: "#b62b72" }}>r</Text>
          <Text style={{ color: "#be296c" }}>o</Text>
          <Text style={{ color: "#c52965" }}>d</Text>
          <Text style={{ color: "#cc2b5e" }}>u</Text>
          <Text style={{ color: "#c52965" }}>c</Text>
          <Text style={{ color: "#be296c" }}>e</Text>{" "}
          <Text style={{ color: "#b62b72" }}>w</Text>
          <Text style={{ color: "#ac2d78" }}>o</Text>
          <Text style={{ color: "#a32f7c" }}>r</Text>
          <Text style={{ color: "#983281" }}>k</Text>{" "}
          <Text style={{ color: "#8d3584" }}>t</Text>
          <Text style={{ color: "#813886" }}>h</Text>
          <Text style={{ color: "#753a88" }}>a</Text>
          <Text style={{ color: "#813886" }}>t</Text>{" "}
          <Text style={{ color: "#8d3584" }}>w</Text>
          <Text style={{ color: "#983281" }}>e</Text>{" "}
          <Text style={{ color: "#a32f7c" }}>a</Text>
          <Text style={{ color: "#ac2d78" }}>r</Text>
          <Text style={{ color: "#b62b72" }}>e</Text>{" "}
          <Text style={{ color: "#be296c" }}>p</Text>
          <Text style={{ color: "#c52965" }}>r</Text>
          <Text style={{ color: "#cc2b5e" }}>o</Text>
          <Text style={{ color: "#c52965" }}>u</Text>
          <Text style={{ color: "#be296c" }}>d</Text>{" "}
          <Text style={{ color: "#b62b72" }}>o</Text>
          <Text style={{ color: "#ac2d78" }}>f</Text>{" "}
          <Text style={{ color: "#a32f7c" }}>f</Text>
          <Text style={{ color: "#983281" }}>o</Text>
          <Text style={{ color: "#8d3584" }}>r</Text>{" "}
          <Text style={{ color: "#813886" }}>f</Text>
          <Text style={{ color: "#753a88" }}>o</Text>
          <Text style={{ color: "#813886" }}>l</Text>
          <Text style={{ color: "#8d3584" }}>k</Text>
          <Text style={{ color: "#983281" }}>s</Text>{" "}
          <Text style={{ color: "#a32f7c" }}>w</Text>
          <Text style={{ color: "#ac2d78" }}>e</Text>{" "}
          <Text style={{ color: "#b62b72" }}>b</Text>
          <Text style={{ color: "#be296c" }}>e</Text>
          <Text style={{ color: "#b62b72" }}>l</Text>
          <Text style={{ color: "#ac2d78" }}>i</Text>
          <Text style={{ color: "#a32f7c" }}>e</Text>
          <Text style={{ color: "#983281" }}>v</Text>
          <Text style={{ color: "#8d3584" }}>e</Text>{" "}
          <Text style={{ color: "#813886" }}>i</Text>
          <Text style={{ color: "#753a88" }}>n</Text>
          <Text style={{ color: "#813886" }}>.</Text>
        </Text>
        <View>
          <Image
            style={styles.imgStyle}
            source={{
              uri: "https://media.tenor.com/lNtmoshuUI8AAAAj/bahroo-hacker.gif",
            }}
          />
        </View>
        <View style={styles.aboutLayout}>
          <Text style={styles.paraStyle}>
            <Text style={{ color: "#de6262" }}>T</Text>
            <Text style={{ color: "#df6563" }}>y</Text>
            <Text style={{ color: "#e16864" }}>l</Text>
            <Text style={{ color: "#e26c65" }}>e</Text>
            <Text style={{ color: "#e46f65" }}>r</Text>{" "}
            <Text style={{ color: "#e57266" }}>T</Text>
            <Text style={{ color: "#e67567" }}>a</Text>
            <Text style={{ color: "#e87869" }}>n</Text>
            <Text style={{ color: "#e97b6a" }}>n</Text>
            <Text style={{ color: "#ea7f6b" }}>a</Text>
            <Text style={{ color: "#eb826c" }}>h</Text>
            <Text style={{ color: "#ed856d" }}>i</Text>
            <Text style={{ color: "#ee886f" }}>l</Text>
            <Text style={{ color: "#ef8b70" }}>l</Text>{" "}
            <Text style={{ color: "#f29374" }}>—</Text>{" "}
            <Text style={{ color: "#f08e72" }}>S</Text>
            <Text style={{ color: "#f19173" }}>e</Text>
            <Text style={{ color: "#f29475" }}>c</Text>
            <Text style={{ color: "#f39776" }}>u</Text>
            <Text style={{ color: "#f59a78" }}>r</Text>
            <Text style={{ color: "#f69d7a" }}>i</Text>
            <Text style={{ color: "#f7a07c" }}>t</Text>
            <Text style={{ color: "#f8a37e" }}>y</Text>{" "}
            <Text style={{ color: "#f9a67f" }}>S</Text>
            <Text style={{ color: "#faa981" }}>p</Text>
            <Text style={{ color: "#fbac83" }}>e</Text>
            <Text style={{ color: "#fcaf85" }}>c</Text>
            <Text style={{ color: "#fdb288" }}>i</Text>
            <Text style={{ color: "#feb58a" }}>a</Text>
            <Text style={{ color: "#fcb086" }}>l</Text>
            <Text style={{ color: "#fdb388" }}>i</Text>
            <Text style={{ color: "#feb58a" }}>s</Text>
            <Text style={{ color: "#ffb88c" }}>t</Text>
          </Text>
          <Text style={styles.aboutSubHeader}>
            <Text style={{ color: "#7b4397" }}>A</Text>
            <Text style={{ color: "#953990" }}>b</Text>
            <Text style={{ color: "#ad2c84" }}>o</Text>
            <Text style={{ color: "#c01d73" }}>u</Text>
            <Text style={{ color: "#cf0f60" }}>t</Text>{" "}
            <Text style={{ color: "#d81149" }}>M</Text>
            <Text style={{ color: "#dc2430" }}>e</Text>
          </Text>
          <TextAnimator
            style={[styles.paraStyle, styles.aboutPara]}
            content="I am a freelance web designer. My weapons of choice are: React, React-Native, Django and MongoDB. I don't eat or sleep. I am a robot smashing, code hacking, web surfing mercenary."
            duration={500}
          />
        </View>
        <Text style={styles.mainHeader}>
          <Text style={{ color: "#43cea2" }}>F</Text>
          <Text style={{ color: "#28c9a6" }}>o</Text>
          <Text style={{ color: "#00c4a9" }}>l</Text>
          <Text style={{ color: "#00bfad" }}>l</Text>
          <Text style={{ color: "#00bab0" }}>o</Text>
          <Text style={{ color: "#00b5b3" }}>w</Text>{" "}
          <Text style={{ color: "#00afb5" }}>m</Text>
          <Text style={{ color: "#00aab7" }}>e</Text>{" "}
          <Text style={{ color: "#00a4b9" }}>o</Text>
          <Text style={{ color: "#009eba" }}>n</Text>{" "}
          <Text style={{ color: "#0099bb" }}>S</Text>
          <Text style={{ color: "#0093bb" }}>o</Text>
          <Text style={{ color: "#008dba" }}>c</Text>
          <Text style={{ color: "#0087b9" }}>i</Text>
          <Text style={{ color: "#0081b7" }}>a</Text>
          <Text style={{ color: "#007ab4" }}>l</Text>{" "}
          <Text style={{ color: "#0074b1" }}>M</Text>
          <Text style={{ color: "#006ead" }}>e</Text>
          <Text style={{ color: "#0067a8" }}>d</Text>
          <Text style={{ color: "#0061a3" }}>i</Text>
          <Text style={{ color: "#185a9d" }}>a</Text>
        </Text>
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL("https://www.instagram.com/microsoft/?hl=en")
            }
          >
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL("https://discord.com/users/231262407069007874")
            }
          >
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn.logojoy.com/wp-content/uploads/20210422095037/discord-mascot.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL("https://github.com/TyTannah")}
          >
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
function Aryan() {
  return (
    <ScrollView>
      <View style={styles.aboutContainer}>
        <Image
          style={styles.headerImage}
          source={{
            uri: "https://humber.ca/orientation/sites/default/files/digital-swag/giphy/HumberOrientation-Smiley.gif",
          }}
        />
        <Text style={styles.mainHeader}>
          <Text style={{ color: "#ffc3a0" }}>M</Text>
          <Text style={{ color: "#ffbea7" }}>e</Text>
          <Text style={{ color: "#ffb9ae" }}>e</Text>
          <Text style={{ color: "#ffb4b5" }}>t</Text>{" "}
          <Text style={{ color: "#ffafbd" }}>t</Text>
          <Text style={{ color: "#ffb4b5" }}>h</Text>
          <Text style={{ color: "#ffb9ae" }}>e</Text>{" "}
          <Text style={{ color: "#ffbea7" }}>t</Text>
          <Text style={{ color: "#ffc3a0" }}>e</Text>
          <Text style={{ color: "#ffbea7" }}>a</Text>
          <Text style={{ color: "#ffb9ae" }}>m</Text>
          <Text style={{ color: "#ffb4b5" }}>!</Text>
        </Text>
        <Text style={styles.paraStyle}>
          <Text style={{ color: "#cc2b5e" }}>W</Text>
          <Text style={{ color: "#c52965" }}>e</Text>{" "}
          <Text style={{ color: "#be296c" }}>w</Text>
          <Text style={{ color: "#b62b72" }}>o</Text>
          <Text style={{ color: "#ac2d78" }}>r</Text>
          <Text style={{ color: "#a32f7c" }}>k</Text>{" "}
          <Text style={{ color: "#983281" }}>t</Text>
          <Text style={{ color: "#8d3584" }}>o</Text>
          <Text style={{ color: "#813886" }}>g</Text>
          <Text style={{ color: "#753a88" }}>e</Text>
          <Text style={{ color: "#813886" }}>t</Text>
          <Text style={{ color: "#8d3584" }}>h</Text>
          <Text style={{ color: "#983281" }}>e</Text>
          <Text style={{ color: "#a32f7c" }}>r</Text>{" "}
          <Text style={{ color: "#ac2d78" }}>t</Text>
          <Text style={{ color: "#b62b72" }}>o</Text>{" "}
          <Text style={{ color: "#be296c" }}>d</Text>
          <Text style={{ color: "#c52965" }}>e</Text>
          <Text style={{ color: "#cc2b5e" }}>s</Text>
          <Text style={{ color: "#c52965" }}>i</Text>
          <Text style={{ color: "#be296c" }}>g</Text>
          <Text style={{ color: "#b62b72" }}>n</Text>
          <Text style={{ color: "#ac2d78" }}>,</Text>{" "}
          <Text style={{ color: "#a32f7c" }}>c</Text>
          <Text style={{ color: "#983281" }}>r</Text>
          <Text style={{ color: "#8d3584" }}>e</Text>
          <Text style={{ color: "#813886" }}>a</Text>
          <Text style={{ color: "#753a88" }}>t</Text>
          <Text style={{ color: "#813886" }}>e</Text>{" "}
          <Text style={{ color: "#8d3584" }}>a</Text>
          <Text style={{ color: "#983281" }}>n</Text>
          <Text style={{ color: "#a32f7c" }}>d</Text>{" "}
          <Text style={{ color: "#ac2d78" }}>p</Text>
          <Text style={{ color: "#b62b72" }}>r</Text>
          <Text style={{ color: "#be296c" }}>o</Text>
          <Text style={{ color: "#c52965" }}>d</Text>
          <Text style={{ color: "#cc2b5e" }}>u</Text>
          <Text style={{ color: "#c52965" }}>c</Text>
          <Text style={{ color: "#be296c" }}>e</Text>{" "}
          <Text style={{ color: "#b62b72" }}>w</Text>
          <Text style={{ color: "#ac2d78" }}>o</Text>
          <Text style={{ color: "#a32f7c" }}>r</Text>
          <Text style={{ color: "#983281" }}>k</Text>{" "}
          <Text style={{ color: "#8d3584" }}>t</Text>
          <Text style={{ color: "#813886" }}>h</Text>
          <Text style={{ color: "#753a88" }}>a</Text>
          <Text style={{ color: "#813886" }}>t</Text>{" "}
          <Text style={{ color: "#8d3584" }}>w</Text>
          <Text style={{ color: "#983281" }}>e</Text>{" "}
          <Text style={{ color: "#a32f7c" }}>a</Text>
          <Text style={{ color: "#ac2d78" }}>r</Text>
          <Text style={{ color: "#b62b72" }}>e</Text>{" "}
          <Text style={{ color: "#be296c" }}>p</Text>
          <Text style={{ color: "#c52965" }}>r</Text>
          <Text style={{ color: "#cc2b5e" }}>o</Text>
          <Text style={{ color: "#c52965" }}>u</Text>
          <Text style={{ color: "#be296c" }}>d</Text>{" "}
          <Text style={{ color: "#b62b72" }}>o</Text>
          <Text style={{ color: "#ac2d78" }}>f</Text>{" "}
          <Text style={{ color: "#a32f7c" }}>f</Text>
          <Text style={{ color: "#983281" }}>o</Text>
          <Text style={{ color: "#8d3584" }}>r</Text>{" "}
          <Text style={{ color: "#813886" }}>f</Text>
          <Text style={{ color: "#753a88" }}>o</Text>
          <Text style={{ color: "#813886" }}>l</Text>
          <Text style={{ color: "#8d3584" }}>k</Text>
          <Text style={{ color: "#983281" }}>s</Text>{" "}
          <Text style={{ color: "#a32f7c" }}>w</Text>
          <Text style={{ color: "#ac2d78" }}>e</Text>{" "}
          <Text style={{ color: "#b62b72" }}>b</Text>
          <Text style={{ color: "#be296c" }}>e</Text>
          <Text style={{ color: "#b62b72" }}>l</Text>
          <Text style={{ color: "#ac2d78" }}>i</Text>
          <Text style={{ color: "#a32f7c" }}>e</Text>
          <Text style={{ color: "#983281" }}>v</Text>
          <Text style={{ color: "#8d3584" }}>e</Text>{" "}
          <Text style={{ color: "#813886" }}>i</Text>
          <Text style={{ color: "#753a88" }}>n</Text>
          <Text style={{ color: "#813886" }}>.</Text>
        </Text>
        <View>
          <Image
            style={styles.imgStyle}
            source={{
              uri: "https://miro.medium.com/max/1360/1*IRGHmiGsa16stedQvIaZfw.gif",
            }}
          />
        </View>
        <View style={styles.aboutLayout}>
          <Text style={styles.paraStyle}>
            <Text style={{ color: "#de6262" }}>A</Text>
            <Text style={{ color: "#e06763" }}>r</Text>
            <Text style={{ color: "#e36d65" }}>y</Text>
            <Text style={{ color: "#e57266" }}>a</Text>
            <Text style={{ color: "#e77768" }}>n</Text>{" "}
            <Text style={{ color: "#e97c6a" }}>T</Text>
            <Text style={{ color: "#eb816c" }}>a</Text>
            <Text style={{ color: "#ed866e" }}>r</Text>
            <Text style={{ color: "#ef8b70" }}>i</Text>
            <Text style={{ color: "#f19173" }}>q</Text>{" "}
            <Text style={{ color: "#f39676" }}>—</Text>{" "}
            <Text style={{ color: "#f59b78" }}>A</Text>
            <Text style={{ color: "#f79f7b" }}>n</Text>
            <Text style={{ color: "#f8a47e" }}>a</Text>
            <Text style={{ color: "#faa981" }}>l</Text>
            <Text style={{ color: "#fcae85" }}>y</Text>
            <Text style={{ color: "#fdb388" }}>s</Text>
            <Text style={{ color: "#ffb88c" }}>t</Text>
          </Text>
          <Text style={styles.aboutSubHeader}>
            <Text style={{ color: "#7b4397" }}>A</Text>
            <Text style={{ color: "#953990" }}>b</Text>
            <Text style={{ color: "#ad2c84" }}>o</Text>
            <Text style={{ color: "#c01d73" }}>u</Text>
            <Text style={{ color: "#cf0f60" }}>t</Text>{" "}
            <Text style={{ color: "#d81149" }}>M</Text>
            <Text style={{ color: "#dc2430" }}>e</Text>
          </Text>
          <TextAnimator
            style={[styles.paraStyle, styles.aboutPara]}
            content="Hello, my name is Aryan. I'm an analyst, designer and an illustrator. Occassionally, I've been known to wear the 'musician' hat too."
            duration={500}
          />
        </View>
        <Text style={styles.mainHeader}>
          <Text style={{ color: "#43cea2" }}>F</Text>
          <Text style={{ color: "#28c9a6" }}>o</Text>
          <Text style={{ color: "#00c4a9" }}>l</Text>
          <Text style={{ color: "#00bfad" }}>l</Text>
          <Text style={{ color: "#00bab0" }}>o</Text>
          <Text style={{ color: "#00b5b3" }}>w</Text>{" "}
          <Text style={{ color: "#00afb5" }}>m</Text>
          <Text style={{ color: "#00aab7" }}>e</Text>{" "}
          <Text style={{ color: "#00a4b9" }}>o</Text>
          <Text style={{ color: "#009eba" }}>n</Text>{" "}
          <Text style={{ color: "#0099bb" }}>S</Text>
          <Text style={{ color: "#0093bb" }}>o</Text>
          <Text style={{ color: "#008dba" }}>c</Text>
          <Text style={{ color: "#0087b9" }}>i</Text>
          <Text style={{ color: "#0081b7" }}>a</Text>
          <Text style={{ color: "#007ab4" }}>l</Text>{" "}
          <Text style={{ color: "#0074b1" }}>M</Text>
          <Text style={{ color: "#006ead" }}>e</Text>
          <Text style={{ color: "#0067a8" }}>d</Text>
          <Text style={{ color: "#0061a3" }}>i</Text>
          <Text style={{ color: "#185a9d" }}>a</Text>
        </Text>
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL("https://www.instagram.com/microsoft/?hl=en")
            }
          >
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL("https://discord.com/users/604445845907177546")
            }
          >
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn.logojoy.com/wp-content/uploads/20210422095037/discord-mascot.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL("https://github.com/AryanTariq")}
          >
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
function Ratin() {
  return (
    <ScrollView>
      <View style={styles.aboutContainer}>
        <Image
          style={styles.headerImage}
          source={{
            uri: "https://humber.ca/orientation/sites/default/files/digital-swag/giphy/HumberOrientation-Smiley.gif",
          }}
        />
        <Text style={styles.mainHeader}>
          <Text style={{ color: "#ffc3a0" }}>M</Text>
          <Text style={{ color: "#ffbea7" }}>e</Text>
          <Text style={{ color: "#ffb9ae" }}>e</Text>
          <Text style={{ color: "#ffb4b5" }}>t</Text>{" "}
          <Text style={{ color: "#ffafbd" }}>t</Text>
          <Text style={{ color: "#ffb4b5" }}>h</Text>
          <Text style={{ color: "#ffb9ae" }}>e</Text>{" "}
          <Text style={{ color: "#ffbea7" }}>t</Text>
          <Text style={{ color: "#ffc3a0" }}>e</Text>
          <Text style={{ color: "#ffbea7" }}>a</Text>
          <Text style={{ color: "#ffb9ae" }}>m</Text>
          <Text style={{ color: "#ffb4b5" }}>!</Text>
        </Text>
        <Text style={styles.paraStyle}>
          <Text style={{ color: "#cc2b5e" }}>W</Text>
          <Text style={{ color: "#c52965" }}>e</Text>{" "}
          <Text style={{ color: "#be296c" }}>w</Text>
          <Text style={{ color: "#b62b72" }}>o</Text>
          <Text style={{ color: "#ac2d78" }}>r</Text>
          <Text style={{ color: "#a32f7c" }}>k</Text>{" "}
          <Text style={{ color: "#983281" }}>t</Text>
          <Text style={{ color: "#8d3584" }}>o</Text>
          <Text style={{ color: "#813886" }}>g</Text>
          <Text style={{ color: "#753a88" }}>e</Text>
          <Text style={{ color: "#813886" }}>t</Text>
          <Text style={{ color: "#8d3584" }}>h</Text>
          <Text style={{ color: "#983281" }}>e</Text>
          <Text style={{ color: "#a32f7c" }}>r</Text>{" "}
          <Text style={{ color: "#ac2d78" }}>t</Text>
          <Text style={{ color: "#b62b72" }}>o</Text>{" "}
          <Text style={{ color: "#be296c" }}>d</Text>
          <Text style={{ color: "#c52965" }}>e</Text>
          <Text style={{ color: "#cc2b5e" }}>s</Text>
          <Text style={{ color: "#c52965" }}>i</Text>
          <Text style={{ color: "#be296c" }}>g</Text>
          <Text style={{ color: "#b62b72" }}>n</Text>
          <Text style={{ color: "#ac2d78" }}>,</Text>{" "}
          <Text style={{ color: "#a32f7c" }}>c</Text>
          <Text style={{ color: "#983281" }}>r</Text>
          <Text style={{ color: "#8d3584" }}>e</Text>
          <Text style={{ color: "#813886" }}>a</Text>
          <Text style={{ color: "#753a88" }}>t</Text>
          <Text style={{ color: "#813886" }}>e</Text>{" "}
          <Text style={{ color: "#8d3584" }}>a</Text>
          <Text style={{ color: "#983281" }}>n</Text>
          <Text style={{ color: "#a32f7c" }}>d</Text>{" "}
          <Text style={{ color: "#ac2d78" }}>p</Text>
          <Text style={{ color: "#b62b72" }}>r</Text>
          <Text style={{ color: "#be296c" }}>o</Text>
          <Text style={{ color: "#c52965" }}>d</Text>
          <Text style={{ color: "#cc2b5e" }}>u</Text>
          <Text style={{ color: "#c52965" }}>c</Text>
          <Text style={{ color: "#be296c" }}>e</Text>{" "}
          <Text style={{ color: "#b62b72" }}>w</Text>
          <Text style={{ color: "#ac2d78" }}>o</Text>
          <Text style={{ color: "#a32f7c" }}>r</Text>
          <Text style={{ color: "#983281" }}>k</Text>{" "}
          <Text style={{ color: "#8d3584" }}>t</Text>
          <Text style={{ color: "#813886" }}>h</Text>
          <Text style={{ color: "#753a88" }}>a</Text>
          <Text style={{ color: "#813886" }}>t</Text>{" "}
          <Text style={{ color: "#8d3584" }}>w</Text>
          <Text style={{ color: "#983281" }}>e</Text>{" "}
          <Text style={{ color: "#a32f7c" }}>a</Text>
          <Text style={{ color: "#ac2d78" }}>r</Text>
          <Text style={{ color: "#b62b72" }}>e</Text>{" "}
          <Text style={{ color: "#be296c" }}>p</Text>
          <Text style={{ color: "#c52965" }}>r</Text>
          <Text style={{ color: "#cc2b5e" }}>o</Text>
          <Text style={{ color: "#c52965" }}>u</Text>
          <Text style={{ color: "#be296c" }}>d</Text>{" "}
          <Text style={{ color: "#b62b72" }}>o</Text>
          <Text style={{ color: "#ac2d78" }}>f</Text>{" "}
          <Text style={{ color: "#a32f7c" }}>f</Text>
          <Text style={{ color: "#983281" }}>o</Text>
          <Text style={{ color: "#8d3584" }}>r</Text>{" "}
          <Text style={{ color: "#813886" }}>f</Text>
          <Text style={{ color: "#753a88" }}>o</Text>
          <Text style={{ color: "#813886" }}>l</Text>
          <Text style={{ color: "#8d3584" }}>k</Text>
          <Text style={{ color: "#983281" }}>s</Text>{" "}
          <Text style={{ color: "#a32f7c" }}>w</Text>
          <Text style={{ color: "#ac2d78" }}>e</Text>{" "}
          <Text style={{ color: "#b62b72" }}>b</Text>
          <Text style={{ color: "#be296c" }}>e</Text>
          <Text style={{ color: "#b62b72" }}>l</Text>
          <Text style={{ color: "#ac2d78" }}>i</Text>
          <Text style={{ color: "#a32f7c" }}>e</Text>
          <Text style={{ color: "#983281" }}>v</Text>
          <Text style={{ color: "#8d3584" }}>e</Text>{" "}
          <Text style={{ color: "#813886" }}>i</Text>
          <Text style={{ color: "#753a88" }}>n</Text>
          <Text style={{ color: "#813886" }}>.</Text>
        </Text>
        <View>
          <Image
            style={styles.imgStyle}
            source={{
              uri: "https://c.tenor.com/8ZpbRdXPnd4AAAAM/programming-crazy.gif",
            }}
          />
        </View>
        <View style={styles.aboutLayout}>
          <Text style={styles.paraStyle}>
            <Text style={{ color: "#de6262" }}>R</Text>
            <Text style={{ color: "#e06763" }}>a</Text>
            <Text style={{ color: "#e36d65" }}>t</Text>
            <Text style={{ color: "#e57266" }}>i</Text>
            <Text style={{ color: "#e77768" }}>n</Text>{" "}
            <Text style={{ color: "#e97c6a" }}>Z</Text>
            <Text style={{ color: "#eb816c" }}>a</Text>
            <Text style={{ color: "#ed866e" }}>m</Text>
            <Text style={{ color: "#ef8b70" }}>a</Text>
            <Text style={{ color: "#f19173" }}>n</Text>{" "}
            <Text style={{ color: "#f39676" }}>—</Text>{" "}
            <Text style={{ color: "#f59b78" }}>D</Text>
            <Text style={{ color: "#f79f7b" }}>e</Text>
            <Text style={{ color: "#f8a47e" }}>s</Text>
            <Text style={{ color: "#faa981" }}>i</Text>
            <Text style={{ color: "#fcae85" }}>g</Text>
            <Text style={{ color: "#fdb388" }}>n</Text>
            <Text style={{ color: "#ffb88c" }}>e</Text>
            <Text style={{ color: "#ffb88c" }}>r</Text>
          </Text>
          <Text style={styles.aboutSubHeader}>
            <Text style={{ color: "#7b4397" }}>A</Text>
            <Text style={{ color: "#953990" }}>b</Text>
            <Text style={{ color: "#ad2c84" }}>o</Text>
            <Text style={{ color: "#c01d73" }}>u</Text>
            <Text style={{ color: "#cf0f60" }}>t</Text>{" "}
            <Text style={{ color: "#d81149" }}>M</Text>
            <Text style={{ color: "#dc2430" }}>e</Text>
          </Text>
          <TextAnimator
            style={[styles.paraStyle, styles.aboutPara]}
            content="Ratin Zaman is a well-seasoned (mostly salty) designer, an annoyingly enthusiastic music fan, a gold-medalist couch potato, a hopeful landscape gardener, and a work in progress."
            duration={500}
          />
        </View>
        <Text style={styles.mainHeader}>
          <Text style={{ color: "#43cea2" }}>F</Text>
          <Text style={{ color: "#28c9a6" }}>o</Text>
          <Text style={{ color: "#00c4a9" }}>l</Text>
          <Text style={{ color: "#00bfad" }}>l</Text>
          <Text style={{ color: "#00bab0" }}>o</Text>
          <Text style={{ color: "#00b5b3" }}>w</Text>{" "}
          <Text style={{ color: "#00afb5" }}>m</Text>
          <Text style={{ color: "#00aab7" }}>e</Text>{" "}
          <Text style={{ color: "#00a4b9" }}>o</Text>
          <Text style={{ color: "#009eba" }}>n</Text>{" "}
          <Text style={{ color: "#0099bb" }}>S</Text>
          <Text style={{ color: "#0093bb" }}>o</Text>
          <Text style={{ color: "#008dba" }}>c</Text>
          <Text style={{ color: "#0087b9" }}>i</Text>
          <Text style={{ color: "#0081b7" }}>a</Text>
          <Text style={{ color: "#007ab4" }}>l</Text>{" "}
          <Text style={{ color: "#0074b1" }}>M</Text>
          <Text style={{ color: "#006ead" }}>e</Text>
          <Text style={{ color: "#0067a8" }}>d</Text>
          <Text style={{ color: "#0061a3" }}>i</Text>
          <Text style={{ color: "#185a9d" }}>a</Text>
        </Text>
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL("https://www.instagram.com/microsoft/?hl=en")
            }
          >
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL("https://discord.com/users/827871907806314496")
            }
          >
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn.logojoy.com/wp-content/uploads/20210422095037/discord-mascot.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL("https://github.com/ZeRav3n")}
          >
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
export default function AboutUs() {
  const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator>
        <Tab.Screen
          name="Kevin"
          component={Kevin}
          options={{
            tabBarLabel: "Team Lead",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="chess-king" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Davin"
          component={Davin}
          options={{
            tabBarLabel: "Stats Enthusiast",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-stats-chart" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Tyler"
          component={Tyler}
          options={{
            tabBarLabel: "Security Specialist",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="security" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Aryan"
          component={Aryan}
          options={{
            tabBarLabel: "Analyst",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-analytics" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Ratin"
          component={Ratin}
          options={{
            tabBarLabel: "Designer",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="antdesign" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  aboutContainer: {
    display: "flex",
    alignItems: "center",
    paddingTop: 30,
    flex: 1,
    backgroundColor: "#fff",
  },
  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  headerImage: {
    width: "50%",
    height: 100,
    aspectRatio: 2,
  },
  mainHeader: {
    fontSize: 18,
    color: "#000",
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: 0,
    marginBottom: 0,
  },
  paraStyle: {
    fontSize: 18,
    paddingBottom: 30,
    fontFamily: "Roboto",
    textAlign: "center",
  },
  aboutLayout: {
    paddingHorizontal: 30,
    marginVertical: 30,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: "#000",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    fontFamily: "Roboto",
    alignSelf: "center",
  },
  aboutPara: {
    color: "#000",
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 20,
    marginBottom: "10%",
  },
  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
  buttonStyle: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
