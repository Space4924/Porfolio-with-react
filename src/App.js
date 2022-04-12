import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Card from './Card';
import Home from './Home';

const App = () => {

	return (
		<div>
			 <Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/Card' element={<Card />}></Route>
			</Routes>
		</div>	
	)
}

export default App
