import React from 'react'
import Navbar from '../Navbar/Navbar'
import Plan from '../Plan/Plan'
import './UserProfile.css'
import { useSelector } from 'react-redux'
import { auth } from '../../config/firebase'

function UserProfile() {
	const { user } = useSelector((state) => state.user)

	function handleSignOut(e) {
		auth.signOut()
	}
	return (
		<div className='userProfile'>
			<Navbar />
			<div className='userProfile__edit-profile'>
				<h1>Edit Profile</h1>
				<div className='userProfile__body'>
					<img
						src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
						alt='netflix avatar'
					/>
					<div className='userProfile__details'>
						<input type='text' value={user?.email} disabled />
						<h3> Plans (Current Plan : premium)</h3>
						<hr />
						<h4>Renewal Date: 04/03/2021</h4>
						<Plan title='Netflix Standard' quality='1080p' />
						<Plan title='Netflix Basic' quality='480p' />
						<Plan title='Netflix Premium' quality='4k + HDR' currentPlan />
						<button onClick={handleSignOut}> Sign Out</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserProfile
