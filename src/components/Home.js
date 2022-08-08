import './Home.css'

import FilterIndexForm from "./books/FilterIndexForm"

const Home = (props) => {
	const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<div className='home-page-header'>
			<FilterIndexForm 
				user={user}
				msgAlert={msgAlert}
			/>
		</div>
	)
}

export default Home
