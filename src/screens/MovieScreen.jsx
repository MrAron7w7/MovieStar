import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dimensions, TouchableOpacity } from 'react-native'
// Tamagui
import { Button, ScrollView, XStack } from 'tamagui'
import { ChevronLeft } from '@tamagui/lucide-icons'

// MaterialIcos
import { AntDesign } from '@expo/vector-icons'

// HeartAnimated

const MovieScreen = () => {
	// Dimension

	const { width, height } = Dimensions.get('screen')
	// Retroceder a HomeScreen
	const navigation = useNavigation()
	const handleBack = () => {
		navigation.goBack()
	}
	const { params: item } = useRoute()

	const [isFavorite, setIsfavorite] = useState(false)
	useEffect(() => {
		// Llamar a la pelicula con la API
	}, [item])
	return (
		<ScrollView
			contentContainerStyle={{
				paddingBottom: 10,
				flex: 1,
				backgroundColor: '#151615',
			}}
		>
			<SafeAreaView>
				<XStack jc={'space-between'} ai={'center'} px={'$4'} py={'$3'}>
					<Button
						icon={ChevronLeft}
						color={'white'}
						bg={'tomato'}
						size={'$3'}
						onPress={handleBack}
					/>
					
					<TouchableOpacity onPress={() => setIsfavorite(!isFavorite)}>
						<AntDesign
							name='heart'
							size={28}
							color={isFavorite ? 'white' : 'tomato'}
						/>
					</TouchableOpacity>
					
					
				</XStack>
			</SafeAreaView>
		</ScrollView>
	)
}

export default MovieScreen
