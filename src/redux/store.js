import { configureStore } from '@reduxjs/toolkit'
import user from '../redux/userSlice'

export default configureStore({
	reducer: {
		user: user,
	},
})
