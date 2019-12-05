import React, {Component} from 'react';
import {Container, Row, Col, Form, Figure, Image, InputGroup} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import fetchGifs from '../components/actions/gifs';
import Search from './search.png';
import './style.css';

class Home extends Component{
    constructor(){
        super();
        this.state = {
            search : ''
        };
    }

    handleChange = (e) =>{
        const { compFetchGifs } = this.props
        const search = e.target.value;
        this.setState({
            search
        })
        compFetchGifs(search)
    }

    render(){
        const { gifs, fetched } = this.props.gifs;
        return(
            <Container fluid className='background'>
                <Row>
                    <Col md={{span:10, offset:1}} >
                        <h2 className='title'>Riby-Test</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{span:12, offset:0}} md={{span:10, offset:1}} className='search-input'>
                        <Form class='search-form'>
                            <InputGroup>
                                <Form.Control size='lg' type='text' onChange={this.handleChange} 
                                    value={this.state.search} placeholder='Search for GIF' className='search-input-field'/> 
                                <InputGroup.Append>
                                    <InputGroup.Text id="inputGroupAppend"><Image src={Search} alt='Search' width='20px' height='20px' /></InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>

                <Row>
                    <Col xs={{span:12, offset:0}} md={{span:10, offset:1}} className='search'>
                        
                        {fetched && gifs.length > 0 && (
                            gifs.map((item, key) =>{
                                return(
                                    <span key={key} className='gif'>
                                        <NavLink to={`/gif/${item.id}`}>
                                            <Figure>
                                                <Image src={item.images.downsized.url} alt='gif' className='image'
                                                    rounded width='180px'  height='150px' />
                                                <Figure.Caption className='image-caption'>{item.title.split(' ')[0]}</Figure.Caption>
                                            </Figure>
                                        </NavLink>
                                    </span>
                                )
                            })
                        )}
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}


const mapStateToProps = state => {
    return {
        gifs: state.gifs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        compFetchGifs: (searchWord) => dispatch(fetchGifs(searchWord))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)