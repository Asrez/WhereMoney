import { Button } from '@mui/material'
import React from 'react'
import {useNavigate } from 'react-router-dom'
import './styles.css'

const NotFound = () => {

	const navigate = useNavigate()
	const goBack = () => {
		navigate('/')
	}
	return (
		<div id="notfound">
			<div className="notfound">

				<h2>404 - Page not found</h2>
				<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
				<Button variant="contained" onClick={goBack}>Go Home</Button>
			</div>
		</div>
	)
}

export default NotFound
