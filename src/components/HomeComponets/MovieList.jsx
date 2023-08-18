import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
	Dimensions,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from 'react-native'
import { Image, ScrollView, Text, XStack, YStack } from 'tamagui'

const { width, height } = Dimensions.get('screen')
const MovieList = ({ title, data }) => {
	const movieName = 'Ant-Man and the Wasp: Quantumania'
	const navigation = useNavigation()
	return (
		<YStack>
			<XStack p={'$2.5'} ai={'center'} jc={'space-between'} flexDirection='row'>
				<Text fontSize={'$7'} p={'$2'}>
					{title}
				</Text>
				<TouchableOpacity>
					<Text color={'tomato'}>Ver Más</Text>
				</TouchableOpacity>
			</XStack>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{data.map((item, index) => {
					return (
						<TouchableWithoutFeedback
							key={index}
							onPress={() => navigation.navigate('MovieDetails', item)}
						>
							<YStack mr={'$4'} space={'$1'}>
								<Image
									source={require('../../image/war.webp')}
									style={{
										width: width * 0.33,
										height: height * 0.22,
										borderRadius: 10,
									}}
								/>
								<Text color={'gray'}>
									{movieName.length > 14
										? movieName.slice(0, 14) + '...'
										: movieName}
								</Text>
							</YStack>
						</TouchableWithoutFeedback>
					)
				})}
			</ScrollView>
		</YStack>
	)
}

export default MovieList
