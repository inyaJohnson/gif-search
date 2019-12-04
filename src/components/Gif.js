import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {Row, Col, Image} from 'react-bootstrap';
import Axios from 'axios';
import './style.css'
class Gif extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: '',
            title: '',
            type: '',
            createOn: '',
            source: '',
            url: ''
        };
    }

    async componentDidMount(){
        const apiKey = 'deokzgUjxm6QHQdp3H3aca1LSZcCpucc';
        const id = this.props.match.params.id;
        const result = await Axios.get(`http://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`);
        const gif = await result.data.data
        this.setState({
            id: gif.id,
            title: gif.title,
            type: gif.type,
            createOn: gif.import_datetime,
            source: gif.source,
            url: gif.images.downsized.url
        })
    }
    

    render(){
        const {id, title, type, createOn, source, url} = this.state;
        console.log('State data === ', this.state);
        return(
                <Row>
                    <Col xs={6}>
                        <Image src={url} alt='gif' width='300' height='300' className='gif' />
                    </Col>
                    <Col xs={{span:6}} className='gif-detail'>
                       <ul >
                           <li>{id}</li>
                           <li>{title}</li>
                           <li>{type}</li>
                           <li>{createOn}</li>
                           <li>{source}</li>
                        </ul> 
                    </Col>
                </Row>
        );
    }
}

export default withRouter(Gif);