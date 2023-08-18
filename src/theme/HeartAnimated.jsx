// Animated
import Animated, {
	useSharedValue,
	withTiming,
	Easing,
	useAnimatedStyle,
	withRepeat,
	withSequence,
} from 'react-native-reanimated'

const ANGLE = 10
const TIME = 100
const EASING = Easing.elastic(1.5)

const rotation = useSharedValue(0)

const animatedStyle = useAnimatedStyle(() => ({
	transform: [{ rotateZ: `${rotation.value}deg` }],
}))

const handlePress = () => {
	rotation.value = withSequence(
		// deviate left to start from -ANGLE
		withTiming(-ANGLE, { duration: TIME / 2, easing: EASING }),
		// wobble between -ANGLE and ANGLE 7 times
		withRepeat(
			withTiming(ANGLE, {
				duration: TIME,
				easing: EASING,
			}),
			7,
			true,
		),
		// go back to 0 at the end
		withTiming(0, { duration: TIME / 2, easing: EASING }),
	)
}

export { animatedStyle, handlePress }
