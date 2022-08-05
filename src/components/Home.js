import './Home.css'

import FilterIndexForm from "./books/FilterIndexForm"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<div className='home-page-header'>
			<FilterIndexForm />
			<h1 style={{fontFamily: 'Times', color: 'white', textShadow: '0.25px 0.25px 4px black, -0.25px -0.25px 4px black'}}>All tagged books:</h1>
		</div>
	)
}

export default Home
