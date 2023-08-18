import React from 'react'
import { Dimensions, TouchableWithoutFeedback } from 'react-native'

import Carousel from 'react-native-snap-carousel'

// Tamagui
import { Text, YStack, Image } from 'tamagui'

// Tamaño de la pantalla Image
const { width, height } = Dimensions.get('screen')
const MovieScroll = ({ data }) => {
	return (
		<YStack p={'$4'}>
			<Text fontSize={'$7'} p={'$2'}>
				Tendencia
			</Text>
			<Carousel
				data={data}
				renderItem={({ item }) => <MovieCard item={item} />}
				firstItem={1}
				inactiveSlideOpacity={0.6}
				sliderWidth={width}
				itemWidth={width * 0.62}
				slideStyle={{ display: 'flex', alignItems: 'center' }}
			/>
		</YStack>
	)
}

const MovieCard = ({ item }) => {
	return (
		<TouchableWithoutFeedback>
			<Image
				source={require('../image/Capitana.png')}
				style={{
					width: width * 0.6,
					height: height * 0.4,
					borderRadius: 10,
				}}
			/>
		</TouchableWithoutFeedback>
	)
}
export default MovieScroll
