import React from 'react'
import { useFonts } from 'expo-font'
import { TamaguiProvider } from 'tamagui'
import config from './tamagui.config'

// Screens
import AppNavigation from './src/Navigators/AppNavigation'
import { StatusBar } from 'expo-status-bar'
export default function App() {
	const [loaded] = useFonts({
		Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
		InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
	})
	if (!loaded) {
		return null
	}
	return (
		<TamaguiProvider config={config}>
			<AppNavigation />
      <StatusBar style="light" />
		</TamaguiProvider>
	)
}
