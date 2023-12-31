import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

// Icons exoi
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
// Tamagui
import { Text, XStack, ScrollView, View } from 'tamagui'
import MovieScroll from '../components/HomeComponets/MovieScroll'
import MovieList from '../components/HomeComponets/MovieList'

// Icons Tamagui

const HomeScreen = () => {
	const [trending, setTrending] = useState([1, 2, 3])
	const [upComing, setUpComing] = useState([1, 2, 3])
	const [topRated, setTopRated] = useState([1, 2, 3])
	return (
		<View flex={1} bg={'#151615'}>
			<SafeAreaView>
				<XStack ai={'center'} jc={'space-between'} px={'$4'} py={'$3'}>
					<TouchableOpacity>
						<Feather name='align-left' size={25} color='white' />
					</TouchableOpacity>
					<Text color={'white'} fontSize={'$9'} fontWeight={'bold'}>
						<Text color={'tomato'}>M</Text>ovie<Text color={'tomato'}>S</Text>
						tar
					</Text>
					<TouchableOpacity>
						<Feather name='search' size={25} color='white' />
					</TouchableOpacity>
				</XStack>
			</SafeAreaView>
			{/* Peliculas Carusel */}
			<ScrollView
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 10 }}
			>
				<MovieScroll data={trending} />

				{/* Peliculas en camino */}
				<MovieList title='Proximo' data={upComing} />

				{/* Peliculas valorados */}
				<MovieList title='Mejor Valorados' data={topRated} />
			</ScrollView>
		</View>
	)
}

export default HomeScreen
