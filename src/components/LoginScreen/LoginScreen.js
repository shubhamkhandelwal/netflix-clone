import React, { useState, useRef } from 'react'
import './LoginScreen.css'
import { auth } from '../../config/firebase'

function LoginScreen() {
	const emailRef = useRef(null)
	const passwordRef = useRef(null)
	function login(e) {
		e.preventDefault()
		auth
			.signInWithEmailAndPassword(
				emailRef.current.value,
				passwordRef.current.value
			)
			.catch((error) => {
				alert(error.message)
			})
	}
	function register(e) {
		e.preventDefault()
		auth
			.createUserWithEmailAndPassword(
				emailRef.current.value,
				passwordRef.current.value
			)
			.catch((error) => {
				alert(error.message)
			})
	}

	let [signIn, setSignIn] = useState(false)

	return (
		<div className='loginScreen'>
			<div className='loginScreen__background'>
				<img
					className='loginScreen__logo'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png'
					alt='netflix'
				/>
				<button className='loginScreen_signin' onClick={() => setSignIn(true)}>
					Sign in
				</button>
				<div className='loginScreen__gradient' />
			</div>
			{!signIn ? (
				<div className='loginScreen__body'>
					<h1>Unlimited movies, TV shows and more.</h1>
					<h2>Watch anywhere. Cancel anytime.</h2>
					<h4>
						Ready to watch? Enter your email to create or restart your
						membership.
					</h4>
					<div className='loginScreen__input'>
						<form>
							<input type='email' placeholder='Email address' />
							<button onClick={() => setSignIn(true)}>Get Started</button>
						</form>
					</div>
				</div>
			) : (
				<div className='loginScreen__login'>
					<h1> Sign In</h1>
					<input type='email' ref={emailRef} placeholder='Email Address' />
					<input type='password' ref={passwordRef} placeholder='Password' />
					<button onClick={login}> Sign In </button>

					<h4>
						<span className='signup_text'> New to Netflix?</span>
						<span className='signup_link' onClick={register}>
							Sign up Now
						</span>
					</h4>
				</div>
			)}
		</div>
	)
}

export default LoginScreen
