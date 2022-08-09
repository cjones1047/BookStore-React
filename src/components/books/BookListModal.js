// import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import BookForm from '../shared/BookForm';

// style for book cards container
const cardContainerStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    maxWidth: '1000px'
}

const BookListModal = (props) => {
    const {
        user,
        msgAlert,
        booksAlreadyTagged,
        booksToView, 
        heading,
        setShowBookViewModal,
        setUpdateTaggedBooks
    } = props
    
    const searchedBooks = () => {
        // for(const book of booksToView) {
        //     for (const property in book) {
        //         if(property === null || property === undefined) continue
        //         else return ()
        //     }
        // }
        let booksAlreadyTaggedIsbns = booksAlreadyTagged.map(book => book.isbn)

        // console.log('ISBNs of books already tagged: ', booksAlreadyTaggedIsbns)

        return booksToView.map((book, i) => {
            let filteredBook = {}
            let undefinedProperty = false
            for (const property in book) {
                // console.log(property,'in index ',i,': ',book[property])
                if(book[property] === null || book[property] === undefined) {
                    console.log('undefined or null property:', property)
                    undefinedProperty = true
                    break
                } 
                else filteredBook = {...filteredBook,
                    ...(
                        <Card bg={'secondary'} text={'light'} style={{ width: 'fit-content', margin: '15px', justifyContent: 'center' }} key={i}>
                            <Card.Img variant="top" src={book.image} style={{ height: '250px', width: '180px' }} />
                            <Card.Body>
                                <div style={{ textAlign: 'center', display: 'flex' }}>

                                    {user && book.owner && book.owner === user._id ?
                                        <BookForm
                                            user={user}
                                            msgAlert={msgAlert}
                                            book={book}
                                            setUpdateTaggedBooks={setUpdateTaggedBooks}
                                        />
                                    :
                                        null
                                    }

                                    {!booksAlreadyTaggedIsbns.includes(book.isbn) && user ?
                                        <BookForm
                                            user={user}
                                            msgAlert={msgAlert}
                                            book={book}
                                            setUpdateTaggedBooks={setUpdateTaggedBooks}
                                        />
                                    :
                                        null
                                    }
                                    
                                    <Button 
                                        id={book.isbn} 
                                        onClick={e => setShowBookViewModal(e)} variant="info"
                                        style={{width: '100%', color: 'white'}}
                                        >
                                            View
                                    </Button>

                                </div>
                            </Card.Body>
                        </Card>
                    )
                } 
            }
            return undefinedProperty ? null : filteredBook

        })
    }
    
    return (
        <>
            { heading ?
                <div style={{textAlign: 'center'}}>
                    {heading}
                </div>
            :
                null
            }
            
            <div style={cardContainerStyle} >
                {searchedBooks()}
            </div>
        </>
    );
}

export default BookListModal