import React, {Component} from 'react';
import {Row, Col, Form, Image} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import fetchGifs from '../components/actions/gifs';


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
            <Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Control type='text' onChange={this.handleChange} value={this.state.search}/>    
                        </Form>
                    </Col>
                </Row>
                {fetched && gifs.length > 0 && (
                    <Row>
                        <Col md={12}>
                            {gifs.map((item, key) =>{
                                return(
                                    <span key={key}>
                                    <NavLink to={`/gif/${item.id}`}>
                                        <Image src={item.images.downsized.url} alt='gif' width="150" height="150" />
                                        </NavLink>
                                    </span>
                                )
                            })
                        }
                        </Col> 
                    </Row>
                )}
            </Row>
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