import React, { Component } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';

const endpoint = '/get_chain'
class Transactions extends Component {
    constructor(props){
        super(props);
        this.state = {
            transactions: [],
            error: null
        };
    }
    componentDidMount() {
        axios.get(endpoint)
            .then(res => {
                const chain = res.data.chain;
                if (chain) {
                    // Check if chain and transactions exist in the response
                    const transactions = chain.flatMap(block => block.transactions || []);
                    this.setState({ transactions });
                } else {
                    this.setState({ error: 'Data is missing or in the wrong format.' });
                }
            })
            .catch(error => {
                this.setState({ error: 'Error fetching data.' });
            });
    }
    render() {
        const { transactions, error } = this.state;
        if (error) {
            return (
                <Container>
                    <p>Error: {error}</p>
                </Container>
            )
        }
        return (
            <Container>
                <h3><b> Transactions </b></h3>
                <p>(Sync to get the latest transactions @ ApeSt DAO)</p>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>From</th>
                            <th>To</th>
                            <th>Amount (ApeSt)</th>
                            <th>Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.transactions.slice(0).reverse().map((t, index) => (
                            <tr key={`transaction-${index}`}>
                                <td><b style={{color: 'rgb(211, 169, 33)'}}>0x{t.sender}</b></td>
                                <td><b style={{color: 'rgb(211, 169, 33)'}}>0x{t.receiver}</b></td>
                                <td><b style={{color: 'rgb(211, 169, 33)'}}>{parseFloat(t.amount).toFixed(5)} </b></td>
                                <td><b style={{color: 'rgb(211, 169, 33)'}}>{t.time}</b></td>
                            </tr>))}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default Transactions