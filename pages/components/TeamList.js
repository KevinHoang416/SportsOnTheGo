import { StyleSheet, Text, Image, TouchableOpacity, Animated } from 'react-native';

export default function TeamList(props) {
    const animatedValue = new Animated.Value(180);

    return (
        <Animated.View style={[styles.items, {
            transform: [{
                rotateY: animatedValue.interpolate({
                    inputRange: [180, 360], outputRange: ['0deg', '360deg']
                })
            }]
        }]}>
            <TouchableOpacity style={{ alignItems: "center" }}
                onPress={() => {
                    Animated.spring(animatedValue, {
                        toValue: 0,
                        tension: 5,
                        friction: 3,
                        useNativeDriver: true
                    }).start(props.onPress);
                }}>

                <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
                    {props.displayName + "\n"}
                </Text>
                <Text style={{ marginBottom: 10, color: "white" }}>
                    Abbreviation: {props.abbreviation + "\n"}
                </Text>

                <Image style={[styles.image,
                { backgroundColor: "#" + props.backgroundColor }]}
                    source={{ uri: props.uri }}
                />
            </TouchableOpacity>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    items: {
        margin: 8,
        marginBottom: 15,
        backgroundColor: "#323639",
        padding: 15,
        borderRadius: 10,
    },
    image: {
        height: 130,
        width: 130,
        borderRadius: 15
    },
});