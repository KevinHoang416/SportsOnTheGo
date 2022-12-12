import { StyleSheet, Text, View, SafeAreaView, Image, Linking } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TeamComponent from './components/TeamInfo';

export default function Team({ navigation, route }) {
    const item = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <TeamComponent
                displayName={item?.team.displayName}
                abbreviation={item?.team.abbreviation}
                location={item?.team.location}
                clubhouse={() => Linking.openURL(item?.team.links[0].href)}
                roster={() => Linking.openURL(item?.team.links[1].href)}
                statistics={() => Linking.openURL(item?.team.links[2].href)}
                schedule={() => Linking.openURL(item?.team.links[3].href)}
                depthChart={() => Linking.openURL(item?.team.links[4].href)}
                tickets={() => Linking.openURL(item?.team.links[5].href)}
                backgroundColor={item?.team.alternateColor}
                uri={item?.team.logos[0].href}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        flex: 1,
        backgroundColor: "slategrey",
    },
});
