//----->react & next
import React from 'react'
import Head from "next/head"
import { GetServerSideProps } from 'next'
//----->components & services
import AttractionCard from '../components/AttractionCard'
import { Attraction } from '../interfaces/'
import { getAttractions } from '../services/webapi'

type designProps = {
	titleSize: string,
	titleColor: string
}

//Optional Design Feature: create a specific design for each hotel/city using dictionary
const hotelsDesignDic: { [key: string]: designProps } = {
	['default']: {
		titleSize: '1em',
		titleColor: 'black'
	},
	['london']: {
		titleSize: '1em',
		titleColor: 'pink'
	},
	['lisbon']: {
		titleSize: '0.8em',
		titleColor: 'green'
	}
};

//Please set wanted location's coordiantes
const params = {
	location: '38.7198852,-9.1402976',
	radius: '1500',
	keyword: 'attraction',
}

// getServerSideProps (Server-side Rendering): Fetches data on each request, to get the most updated attractions
export const getServerSideProps: GetServerSideProps = async () => {
	//uses getAttractions service to fetch the attractions from google's API
	const attractions = await getAttractions(params)
	// 'Home' component will receive attractions as a prop by returning it
	return {
		props: {
			attractions
		}
	}
}

type Props = {
	hotel?: string
	attractions?: Attraction[]
}

const Home = ({ attractions, hotel }: Props) => {
	const chosenHotel = hotel ? hotel : 'default' //handling customized design
	return <>
		<div style={{ textAlign: 'center', padding: '2em', fontFamily: 'Monospace' }}>
			<Head>
				<title>Bridgify</title>
			</Head>
			<h1 style={{ color: 'purple', paddingBottom: '0.5em', fontSize: '3em' }}>Bridgify!</h1>
			<div style={{ placeContent: 'center', display: 'flex', flexWrap: 'wrap' }}>
				{attractions.map((attr) => {
					return <AttractionCard
						key={attr.place_id}
						name={attr.name}
						number_of_reviews={attr.user_ratings_total}
						rating={attr.rating}
						types={attr.types}
						imgURL={ attr.imgURL}
						titleSize={hotelsDesignDic[chosenHotel].titleSize}
						titleColor={hotelsDesignDic[chosenHotel].titleColor}
					></AttractionCard>
				})}
			</div>
		</div>
	</>
}

export default Home