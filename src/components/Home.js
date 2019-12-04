import React, {Component} from 'react';
import {Row, Col, Form, Image} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import Axios from 'axios';

class Home extends Component{
    constructor(){
        super();
        this.state = {
            search : '',
            gif : []
        };
    }

    handleChange = async (e) =>{
        const search = e.target.value;
        this.setState({
            search
        })
        const apiKey = 'deokzgUjxm6QHQdp3H3aca1LSZcCpucc';
        const result = await Axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${this.state.search}`);
        const gif = await result.data.data;
        this.setState({
                gif
            })
    }

    render(){
        console.log(this.state.gif)
        return(
            <Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Control type='text' onChange={this.handleChange} value={this.state.search}/>    
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        {this.state.gif.map((item, key) =>{
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
            </Row>
        )
    }
}

export default Home;