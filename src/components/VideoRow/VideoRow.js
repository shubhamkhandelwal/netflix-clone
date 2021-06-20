import React, { useEffect, useState } from 'react'
import axios from '../../Axios'
import request from '../../request'
import './VideoRow.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

function VideoRow({ title, fetchUrl, islargeImage }) {
	const opts = {
		height: '400',
		width: '100%',
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	}
	let [movies, setMovies] = useState([])
	let [videoUrl, setVideoUrl] = useState('')

	useEffect(() => {
		async function fetchMovies() {
			const response = await axios.get(fetchUrl)
			if (response?.data?.results && response?.data?.results.length > 0) {
				setMovies(response?.data?.results)
			}
		}
		fetchMovies().catch((error) => {
			console.log(error)
		})
	}, [fetchUrl])

	function handleTrailer(movie) {
		if (videoUrl) {
			setVideoUrl('')
		} else {
			movieTrailer(movie?.title)
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search)
					setVideoUrl(urlParams.get('v'))
				})
				.catch((error) => {
					console.log(error)
				})
		}
	}
	return (
		<div className='video-row'>
			<h2 className='video-row__title'>{title}</h2>
			<div className='video-row__posters'>
				{movies.map((movie) => (
					<img
						key={movie.id}
						src={`${request.imageBaseUrl}${
							islargeImage ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.title}
						className={
							islargeImage ? 'video-row__poster-large' : 'video-row__poster'
						}
						onClick={() => handleTrailer(movie)}
					/>
				))}
			</div>
			{videoUrl && (
				<YouTube className='video-row_player' videoId={videoUrl} opts={opts} />
			)}
		</div>
	)
}

export default VideoRow
