import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import { useState } from 'react';
import CommentForm from '../comments/CommentForm';
import CommentList from '../comments/CommentList';
import ReasonTagged from './ReasonTagged';
// import { getAllBooks } from '../../api/books';

const BookViewModal = (props) => {
    const {
        user,
        msgAlert,
        bookInViewModal
    } = props
    
    // console.log(window.innerWidth)

    const [updatedCommentList, setUpdatedCommentList] = useState(true)

    console.log('Book in view modal: ', bookInViewModal)
    console.log('User logged in: ', user)

    // render formatting changes based on a 500-pixel breakpoint
    if(window.innerWidth > 500)
    return (
        <Container fluid style={{maxWidth:'700px'}}>
            <Row className='justify-content-center'>
                <div style={{display:'flex', justifyContent: 'center', margin:'20px'}}>
                    <Card bg={'secondary'} text={'light'} style={{ width: 'fit-content', height: 'fit-content', margin: '20px', justifyContent: 'center' }}>
                        <Card.Img variant="top" src={bookInViewModal.image} style={{ height: '300px', width: '190px' }} />
                    </Card>
                    <Col>
                        <h2 style={{margin:'20px'}}>{bookInViewModal.title}</h2>
                        <h5 style={{margin:'20px', fontStyle:'italic'}}>by {bookInViewModal.authors}</h5>
                        <h5 style={{margin:'20px'}}>Publisher: {bookInViewModal.publisher}</h5>
                        <ReasonTagged 
                            user={user}
                            msgAlert={msgAlert}
                            bookInViewModal={bookInViewModal}
                        />
                    </Col>
                </div>
            </Row>
            <Row className='justify-content-center'>
                {bookInViewModal.description}
            </Row>
            {user 
            ?
                <Row>
                    <CommentForm
                        user={user}
                        msgAlert={msgAlert}
                        bookInViewModal={bookInViewModal}
                        updatedCommentList={updatedCommentList}
                        setUpdatedCommentList={() => setUpdatedCommentList(prev => !prev)}
                    />
                </Row>
            :
                null
            }
            <Row>
                <CommentList
                    user={user}
                    msgAlert={msgAlert}
                    bookInViewModal={bookInViewModal}
                    updatedCommentList={updatedCommentList}
                    setUpdatedCommentList={() => setUpdatedCommentList(prev => !prev)}
                />
            </Row>
            
        </Container>
    ) 
    else return (
        <Container fluid style={{maxWidth:'700px'}}>
            <Row className='justify-content-center'>
                <div style={{display:'flex', justifyContent: 'center', margin:'20px'}}>
                    <Card bg={'secondary'} text={'light'} style={{ width: 'fit-content', height: 'fit-content', margin: '20px', justifyContent: 'center' }}>
                        <Card.Img variant="top" src={bookInViewModal.image} style={{ height: '300px', width: '190px' }} />
                    </Card>
                </div>
            </Row>
            <Row className='justify-content-center'>
                <h2 style={{margin:'5px', textAlign:'center'}}>{bookInViewModal.title}</h2>
                <h5 style={{margin:'5px', textAlign:'center',  fontStyle:'italic'}}>by {bookInViewModal.authors}</h5>
                <h5 style={{margin:'5px', textAlign:'center', marginBottom: '30px'}}>Publisher: {bookInViewModal.publisher}</h5>
                <ReasonTagged 
                    user={user}
                    msgAlert={msgAlert}
                    bookInViewModal={bookInViewModal}
                />
                <h6>&nbsp;</h6>
            </Row>
            <Row className='justify-content-center'>
                {bookInViewModal.description}
            </Row>
            {user 
            ?
                <Row>
                    <CommentForm
                        user={user}
                        msgAlert={msgAlert}
                        bookInViewModal={bookInViewModal}
                        updatedCommentList={updatedCommentList}
                        setUpdatedCommentList={() => setUpdatedCommentList(prev => !prev)}
                    />
                </Row>
            :
                null
            }
            <Row>
                <CommentList
                    user={user}
                    msgAlert={msgAlert}
                    bookInViewModal={bookInViewModal}
                    updatedCommentList={updatedCommentList}
                    setUpdatedCommentList={() => setUpdatedCommentList(prev => !prev)}
                />
            </Row>
            
        </Container>
    )
}

export default BookViewModal