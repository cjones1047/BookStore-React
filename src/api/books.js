import apiUrl from '../apiConfig'
import axios from 'axios'

// INDEX
export const getAllBooks = () => {
    return axios(`${apiUrl}/books`)
}

// CREATE
export const createBook = (user, newBook) => {
    console.log('createBook in API was hit')
    // inour createBook form, we're building an object
    // when we pass that object into the api createBook function
    // it's going to look like the books in our database
    // we're going to refer to this as a newBook, so we can just pass the entire object created by the form into an Axios request to our back-end (Books API) and call it 'book'
    console.log('this is user', user)
    console.log('this is newBook', newBook)
	return axios({
		url: apiUrl + '/books',
		method: 'POST',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: {
			book: newBook,
		},
	})
}

// UPDATE
export const updateBook = (user, updatedBook) => {
    console.log('updateBook in API was hit')
    // inour createBook form, we're building an object
    // when we pass that object into the api createBook function
    // it's going to look like the books in our database
    // we're going to refer to this as a newBook, so we can just pass the entire object created by the form into an Axios request to our back-end and call it 'book'
    // console.log('this is user', user)
    console.log('this is updatedBook', updatedBook)
	return axios({
		url: `${apiUrl}/books/${updatedBook._id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`
		},
		data: {
			book: updatedBook
		}
	})
}

// DELETE
export const removeBook = (user, bookId) => {
	return axios({
		url:`${apiUrl}/books/${bookId}`,
		method: 'DELETE',
		headers: {
			Authorization: `Token token=${user.token}`
		}
	})
}