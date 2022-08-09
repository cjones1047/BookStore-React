import apiUrl from '../apiConfig'
import axios from 'axios'

// INDEX
export const getAllComments = (bookId) => {
    return axios(`${apiUrl}/comments/${bookId}`)
}

// CREATE
export const createComment = (user, bookId, note) => {
    // console.log('createComment in API was hit')
    console.log('this is the book id: ', bookId)
    console.log('this is user in createComment', user)
    console.log('this is comment in createComment', note)
	return axios({
		url: `${apiUrl}/comments/${bookId}`,
		method: 'POST',
		data: {
			note: note,
            owner: user
		},
	})
}

// UPDATE
export const updateComment = (user, bookId, updatedComment) => {
    console.log('updateComment in API was hit')
    console.log('this is updatedComment', updatedComment)
	return axios({
		url: `${apiUrl}/comments/${bookId}/${updatedComment._id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`
		},
		data: {
			comment: updatedComment
		}
	})
}

// DELETE
export const deleteComment = (user, bookId, commentId) => {
    console.log('deleteComment in API was hit')
	return axios({
		url:`${apiUrl}/comments/${bookId}/${commentId}`,
		method: 'DELETE',
		headers: {
			Authorization: `Token token=${user.token}`
		}
	})
}