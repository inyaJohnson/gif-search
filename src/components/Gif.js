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
        return(
                <Row className='gif-result'>
                    <Col xs={{span:12, offset:0}} md={{ span:3, offset:3 }} className='gif-image '>
                        <Image src={images && images.downsized.url} alt='gif' width='300' height='300' className='gif' />
                    </Col>
                    <Col xs={{span:12}} md={{ span:6 }} className='gif-detail'>
                       <ul className='list-unstyled' >
                           <li><strong>ID:</strong> {id}</li>
                           <li><strong>Title:</strong> {title}</li>
                           <li><strong>Giff Type:</strong> {type}</li>
                           <li><strong>Created On:</strong> {createOn}</li>
                           <li><strong>Source:</strong> {source}</li>
                            <li><strong>Rating:</strong> {rating}</li>
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