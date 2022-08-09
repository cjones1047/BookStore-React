import { Form, Button, Toast, ToastContainer } from "react-bootstrap"
import { useState } from "react"

import { createComment } from "../../api/comments"

const CommentForm = (props) => {

    const {
      user,
      msgAlert,
      bookInViewModal,
      updatedCommentList,
      setUpdatedCommentList
    } = props

    const [commentNote, setCommentNote] = useState('')

    // console.log('Current note input value: ', commentNote)

    const handleChange = (e) => {
      const note = e.target.value
      setCommentNote(note)
    }

    const handleSubmit = (e) => {
      e.preventDefault()

      console.log('Submitted comment: ', commentNote)

      setCommentNote('')

      createComment(user._id, bookInViewModal._id, commentNote)
          // if we're successful in the modal, we want to refreshComments
          // .then(() => refreshComments())
          // send a success message to the user
          // .then(() => {
          //     msgAlert({
          //         heading: 'Oh Yeah!',
          //         message: `Your comment was posted `,
          //         variant: 'success'
          //     })
          // })
          .then(setUpdatedCommentList)
          .catch(() => {
              msgAlert({
                  heading: 'Oh no!',
                  message: 'Something went wrong...please try that again',
                  variant: 'danger'
              })
          })
    }
  
    return (
      <div style={{marginTop: '30px', marginBottom: '5px'}}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control
                placeholder="Post a comment"
                value={ commentNote }
                name="note"
                type="text"
                onChange={ handleChange }
                as="textarea" 
                rows={3}
                required 
                />
            </Form.Group>
            <Button
              type="submit"
              variant="success"
              >
                Post Comment
            </Button>

          </Form>

      </div>
    )
}

export default CommentForm