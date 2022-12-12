import * as Progress from 'react-native-progress';

export default function ProgressIndicator(props) {
    return (
        <Progress.CircleSnail animating={true}
            style={{ margin: 15, fill: "transparent" }}
            size={70}
            color={["red", "blue", "yellow"]}
            thickness={4}
            duration={600} spinDuration={500}
        />
    )
}