import { StyleSheet, Text, View, Image, Animated, TouchableHighlight } from 'react-native';
import TouchableButton from './TouchableButton';

const TeamComponent = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
                    {props.displayName + "\n"}
                </Text>
                <Text style={{ marginTop: 10, color: "white" }}>
                    Abbreviation: {props.abbreviation + "\n"}
                </Text>
                <Text style={{ marginTop: 10, color: "white" }}>
                    Location: {props.location + "\n"}
                </Text>

                <View style={styles.buttonView}>
                    <TouchableButton
                        onPress={props.clubhouse}
                        text={"Clubhouse"}
                    />
                    <TouchableButton
                        onPress={props.roster}
                        text={"Roster"}
                    />
                    <TouchableButton
                        onPress={props.statistics}
                        text={"Statistics"}
                    />
                    <TouchableButton
                        onPress={props.schedule}
                        text={"Schedule"}
                    />
                    <TouchableButton
                        onPress={props.depthChart}
                        text={"Depth Chart"}
                    />
                    <TouchableButton
                        onPress={props.tickets}
                        text={"Tickets"}
                    />
                </View>

                <Image style={[styles.image, { backgroundColor: "#" + props.backgroundColor }]}
                    source={{ uri: props.uri }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    image: {
        width: 200,
        aspectRatio: 1,
        borderRadius: 15,
    },
    buttonView: {
        margin: 10,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "space-around",
        width: 250,
        backgroundColor: "#323639",
        padding: 10,
    },
    view: {
        padding: 20,
        margin: 10,
        backgroundColor: "#323639",
        borderRadius: 10,
        width: 250,
        alignItems: "center",
        paddingBottom: 25
    }
});

export default TeamComponent;