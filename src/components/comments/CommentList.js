// import CommentForm from './CommentForm';
import { useState, useEffect } from 'react'
import { getAllBooks } from '../../api/books'


const CommentList = (props) => {
    const [comments, setComments] = useState([])
    //const theComment = book.comments._id(commentId)
    const { user, msgAlert } = props
    console.log('this is comments', comments)




     useEffect(() => {

        getAllBooks()
            .then(res => 
                setComments(res.data.comment)
                    
                    )
            
            .catch(err => {
                msgAlert({
                    heading: 'Error getting comment',
                    message: 'comment failure',
                    variant: 'danger'
                })
            })
    }, [])
    return (
       
            
   comments.map(comment => {
        <li
            key={comment._id}
            
            comment={comment.note} 
        >
            <span>
                <span>
                    Comment by <strong>{comment.user}</strong>

                </span>
            </span>

        </li>
    	
    })
   
    )


    // return (
    //     comments.map(comment => {}
    //     <li
    //         key={comment._id}
    //         id={comment._id}
    //     >
    //         <span>
    //             <span>
    //                 Comment by <strong>{comment.user}</strong>

    //             </span>
    //         </span>

    //     </li>
        

    // )


    //     const {user, msgAlert} = props
    //     
    //     const { id } = useParams()





    

    // return (
    // 	<ul>{commentList}</ul>
    // );
 
}
export default CommentList
    




