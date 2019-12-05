import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {Row, Col, Image} from 'react-bootstrap';
import './style.css';
import { connect } from 'react-redux';
import fetchSingleGif from './actions/gif';

class Gif extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        const { compFetchGif } = this.props
        const id = this.props.match.params.id;
        compFetchGif(id);
    }
    

    render(){
        const {id, title, type, createOn, source, rating, images} = this.props.gif.gif;
        console.log('Images', images && images.downsized.url);
        return(
                <Row>
                    <Col xs={6}>
                        <Image src={images && images.downsized.url} alt='gif' width='300' height='300' className='gif' />
                    </Col>
                    <Col xs={{span:6}} className='gif-detail'>
                       <ul >
                           <li>{id}</li>
                           <li>{title}</li>
                           <li>{type}</li>
                           <li>{createOn}</li>
                           <li>{source}</li>
                            <li>{rating}</li>
                        </ul> 
                    </Col>
                </Row>
        );
    }
}

const mapStateToProps = state => {
    return {
        gif : state.gif 
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        compFetchGif : (id) => dispatch(fetchSingleGif(id))    
    }
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Gif));
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Gif));