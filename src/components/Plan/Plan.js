import React from 'react'
import './Plan.css'

export default function Plan({ title, currentPlan, quality }) {
	return (
		<div className='plan'>
			<div className='plan__desc'>
				<span>{title}</span>
				<span className='plan__quality'>{quality}</span>
			</div>

			<button disabled={currentPlan}>
				{currentPlan ? 'Current Package' : 'Subscribe'}
			</button>
		</div>
	)
}
