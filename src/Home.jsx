
import React from 'react'
import './main.css'
import Card from './Card'
import Next from './Next'
import Footer from './Footer'
import Message from './Message'

const Home = () => {
  return (
	<div>
		<header>
			<div className="port">
				Portfo<span className='lio'>lio.</span>
			</div>
			<navbar className="navbar">
				<div className="element">Contact</div>
				<div className="element">Services</div>
				<div className="element">Job</div>
			</navbar>       
		</header>
		<div className='main'>
			<Card/>
		</div>
		<div className="card">
		<div className="collector">
			<Next/>
		</div><div className="collector">
			<Next/>
		</div><div className="collector">
			<Next/>
		</div>
		</div>
		<div className="Contact"><h1>Contact Me</h1>
		<p>--------- Let's Keep in touch  --------</p></div>
		<div className="Message">
			<Message/>
		</div>
		<div className="footer">
			<Footer/>
		</div>
	</div>
  )
}

export default Home