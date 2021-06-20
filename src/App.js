import React, { useEffect } from 'react'
import './App.css'
import { auth } from './config/firebase'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginScreen from './components/LoginScreen/LoginScreen'
import HomeScreen from './components/HomeScreen/HomeScreen'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from './redux/userSlice'
import UserProfile from './components/UserProfile/UserProfile'

function App() {
	let { user } = useSelector((state) => state.user)
	const dispatch = useDispatch()

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			console.log(userAuth)
			if (userAuth) {
				dispatch(
					login({
						uid: userAuth.uid,
						email: userAuth.email,
					})
				)
			} else {
				dispatch(logout())
			}
		})

		return unsubscribe
	}, [dispatch])

	return (
		<div className='App'>
			<Router>
				{!user ? (
					<LoginScreen />
				) : (
					<Switch>
						<Route exact path='/'>
							<HomeScreen />
						</Route>
						<Route path='/profile'>
							<UserProfile />
						</Route>
					</Switch>
				)}
			</Router>
		</div>
	)
}

export default App
