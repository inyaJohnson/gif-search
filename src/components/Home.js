import React, {Component} from 'react';
import { Container, Row, Col, Figure, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchGifs from '../components/actions/gifs';
import Search from './Search';
import './style.css';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchWord : ''
        };
    }

    handleChange = event =>{
        const searchWord = event.target.value;
        this.setState({
            searchWord
        })
    }

    handleSubmit = event =>{
        event.preventDefault()
        const { compFetchGifs } = this.props;
        const { searchWord } = this.state;
        compFetchGifs(searchWord)
    }

    render(){
        const { gifs, fetched } = this.props.gifs;
        const { searchWord } = this.state;
        const { handleChange, handleSubmit } = this;
        return(
            <Container fluid className='background'>
                <Row>
                    <Col md={{span:10, offset:1}} >
                        <h2 className='title'>Riby-Test</h2>
                    </Col>
                </Row>
                <Search searchWord={searchWord} searchWordChange={handleChange} searchWordSubmit={handleSubmit} />
                <Row>
                    <Col md={{span:10, offset:1}} className='searchColumn'>
                        <div className='searchContainer'>
                            {fetched && gifs.length > 0 && (
                                gifs.map((item, key) =>{
                                    return(
                                        <div key={key} className='gif'>
                                            <NavLink to={`/gif/${item.id}`}>
                                                <Figure>
                                                    <Image src={item.images.downsized.url} alt='gif' className='image'
                                                        rounded width='180px'  height='150px' />
                                                    <Figure.Caption className='image-caption'>{item.title.split(' ')[0]}</Figure.Caption>
                                                </Figure>
                                            </NavLink>
                                        </div>
                                    )
                                })
                            )}
                        </div>
                        
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