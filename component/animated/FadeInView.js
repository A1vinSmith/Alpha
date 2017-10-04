import React from 'react'
import { Animated } from 'react-native'

export default class FadeInView extends React.Component {
    state = {
        fadeAnimated: new Animated.Value(0),  // Initial value for opacity: 0
    };

    componentDidMount() {
        Animated.timing(                  // Animate over time
            this.state.fadeAnimated,            // The animated value to drive
            {
                toValue: 1,                   // Animate to opacity: 1 (opaque)
                duration: 3000,              // Make it take a while
            }
        ).start();                        // Starts the animation
    }

    render() {
        let { fadeAnimated } = this.state;

        return (
            <Animated.View                 // Special animate-able View
                style={{
                    ...this.props.style,
                    opacity: fadeAnimated,         // Bind opacity to animated value
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}