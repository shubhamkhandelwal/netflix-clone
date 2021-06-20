import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
	let [headerBackDrop, setHeaderBackDrop] = useState(false)
	useEffect(() => {
		document.addEventListener('scroll', (event) => {
			console.log(event)
			if (window?.scrollY > 180) {
				setHeaderBackDrop(true)
			} else {
				setHeaderBackDrop(false)
			}

			return document.addEventListener('scroll', (event) => {})
		})
	}, [])
	return (
		<div className={`navbar ${headerBackDrop ? 'backdrop' : ''}`}>
			<Link to='/'>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png'
					className='navbar__logo'
					alt='netflix logo'
				/>
			</Link>
			<Link to='/profile'>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
					className='navbar__avatar'
					alt='netflix avatar'
				/>
			</Link>
		</div>
	)
}

export default Navbar
