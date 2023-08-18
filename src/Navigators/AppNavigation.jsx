import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'

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
				<Stack.Screen name='Search' component={SearchScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default AppNavigation
