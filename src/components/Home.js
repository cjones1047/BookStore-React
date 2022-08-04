import FilterIndexForm from "./books/FilterIndexForm"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<h2>Home Page</h2>
			<FilterIndexForm />
		</>
	)
}

export default Home
