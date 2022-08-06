import { Button, Card, Col, Form, Row, Container } from 'react-bootstrap';

const BookViewModal = (props) => {
    const { 
        bookInViewModal
    } = props
    
    console.log(window.innerWidth)

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
                    </Col>
                </div>
            </Row>
            <Row className='justify-content-center'>
                {bookInViewModal.description}
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
            </Row>
            <Row className='justify-content-center'>
                {bookInViewModal.description}
            </Row>
        </Container>
    )
}

export default BookViewModal