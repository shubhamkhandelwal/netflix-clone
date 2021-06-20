import React, { useEffect, useState } from 'react'
import axios from '../../Axios'
import request from '../../request'
import './Banner.css'

function getRandomIndex(len) {
	return Math.floor(Math.random() * len - 1)
}

function truncateOverview(text, len) {
	return text?.length > len ? text.substring(0, len) : text
}

function Banner() {
	let [bannerMovie, setBannerMovie] = useState({})
	useEffect(() => {
		async function fetchBannerImage() {
			const response = await axios.get(request.fetchTrending)
			if (response?.data?.results && response?.data?.results.length > 0) {
				let movies = response.data.results
				console.log(movies)
				setBannerMovie(movies[getRandomIndex(movies.length)])
			}
		}
		fetchBannerImage()
	}, [])

	return (
		<header
			className='banner'
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url("${request.imageBaseUrl}${bannerMovie?.backdrop_path}")`,
				backgroundPosition: 'center center',
				backgroundRepeat: 'no-repeat',
			}}>
			<div className='banner__content'>
				<h1 className='banner__content-title'>
					{bannerMovie?.title || bannerMovie?.name || bannerMovie?.orignal_name}
				</h1>
				<div className='banner__content-buttons'>
					<button className='banner__content-button'>Play</button>
					<button className='banner__content-button'>More Info</button>
				</div>
				<div className='banner__content-description'>
					{truncateOverview(bannerMovie?.overview, 150)}
				</div>
			</div>
		</header>
	)
}

export default Banner
