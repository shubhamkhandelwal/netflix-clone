import React, { useEffect, useState } from 'react'
import VideoRow from '../VideoRow/VideoRow'
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'
import request from '../../request'
import axios from '../../Axios'

function HomeScreen() {
	let [genres, setGenres] = useState([])
	useEffect(() => {
		async function fetchGenre() {
			const response = await axios.get(request.fetchGenres)
			if (
				response &&
				response.data &&
				response.data.genres &&
				response.data.genres.length > 0
			) {
				setGenres(response.data.genres)
			}
			return response
		}
		fetchGenre().catch((error) => {
			console.log(error)
		})
	}, [])

	return (
		<div className='homeScreen'>
			<Navbar />
			<Banner />
			<VideoRow
				title='NETFLIX ORIGNALS'
				fetchUrl={request.fetchNetflixOrignals}
				islargeImage
			/>
			<VideoRow title='Trending' fetchUrl={request.fetchTrending} />
			<VideoRow title='Top Rated' fetchUrl={request.fetchTopRated} />
			{genres.map((genre) => {
				return (
					<VideoRow
						key={genre.id}
						title={genre.name}
						fetchUrl={`${request.fetchMovieForGenres}${genre.id}`}
					/>
				)
			})}
			<VideoRow />
		</div>
	)
}

export default HomeScreen
