import React from 'react'
import { Row, Col, Form, InputGroup, Button } from 'react-bootstrap';

const Search = (props) => {
    const { searchWord, searchWordChange, searchWordSubmit } = props
    return (
        <Row>
            <Col xs={{ span:12, offset:0 }} md={{ span:10, offset:1 }} className='search-input'>
                <Form className='search-form' onSubmit={searchWordSubmit}>
                    <InputGroup>
                        <Form.Control size='lg' type='text' value={searchWord} onChange={searchWordChange} placeholder='Search for GIF' className='search-input-field'/> 
                        <Button className='searchBtn' variant='primary' type='submit'>Search</Button>
                    </InputGroup>
                </Form>
            </Col>
        </Row>
    )
}

export default Search;