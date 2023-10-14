import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const endpoint = '/get_chain'
class Status extends Component {
    constructor(props) {
        super(props);
        this.state = {
            length: [],
            address: '',
        }
    }

    componentDidMount() {
        axios.get(endpoint)
            .then(res => {
                const chain = res.data.chain;
                if (chain && chain.length > 0) {
                    const length = chain.length;
                // } && chain[1].transactions && chain[1].transactions.length >0) {
                    const address = res.data.chain[1].transactions[0].receiver;
                    this.setState({ length, address })
                } else {
                    this.setState({ error: 'ApeSt DAO on this node may not be synced yet, please try again'});
                }
            })
                .catch(error => {
                    this.setState({ error: 'please try your ApeSt DAO node again!'})
                })
    }

    render(){
        return (
            <Container>
                <br/>
                <Row>
                    <Col sm='6'>
                        <h5><div><i className='fa fa-cubes'></i></div> # of Blocks Mined</h5><hr/>
                        <h5 style={{color: '#007bff'}}>#<b>{this.state.length} </b></h5>
                    </Col>
                    <Col md='6'> <br/>
                    <h5> <div>Node Address (sync <a href=''><i className='fa fa-refresh'></i></a> )</div></h5> <hr/>
                    <h5 style={{color: '#007bff'}}>0x{this.state.address}</h5>
                        </Col>
                </Row>
            </Container>
        )
    }
}

export default Status