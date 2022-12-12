import { StyleSheet, Text, Animated, TouchableHighlight } from 'react-native';

export default function TouchableButton(props) {
    const animatedValue = new Animated.Value(1);

    const onPressIn = () => {
        Animated.spring(animatedValue, {
            toValue: 1.5,
            useNativeDriver: true,
        }).start();
    };

    const onPressOut = () => {
        Animated.spring(animatedValue, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    return (
        <Animated.View style={[{ transform: [{ scale: animatedValue }] }]}>
            <TouchableHighlight style={styles.button}
                underlayColor={"#323639"}
                onPress={props.onPress}
                onPressIn={onPressIn}
                onPressOut={onPressOut}>
                <Text style={{ color: "white" }}>{props.text}</Text>
            </TouchableHighlight>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "dimgray",
        padding: 10,
        borderRadius: 5,
        margin: 5,
        height: 35,
        width: 100,
        alignItems: "center",
        shadowColor: "dimgray",
        shadowOpacity: 0.5,
        shadowOffset: { width: 4, height: 5 },
    }
})