import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import HomeScreen from '../screens/HomeScreen'
import MovieScreen from '../screens/MovieScreen'

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name='Home' component={HomeScreen} />
				<Stack.Screen name='MovieDetails' component={MovieScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default AppNavigation
