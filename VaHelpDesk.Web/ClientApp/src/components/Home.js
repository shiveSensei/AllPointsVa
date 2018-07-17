import React, { Component } from 'react';
import { Col, Grid, Row, Table, Carousel, Jumbotron, Image, ProgressBar, Panel } from 'react-bootstrap';

export class Home extends Component {
    displayName = Home.name

    constructor(props) {
        super(props);
        this.state = { hardwares: [], loading: true };

        fetch('api/Hardwares')
            .then(response => response.json())
            .then(data => {
                this.setState({ hardwares: data, loading: false });
                console.log(data)
            });
    }

    static CreateTable(hardwares) {
        return (
            <Table responsive>
                <thead>
                    <tr >
                        <th>Serial</th>
                        <th>Device Name</th>
                        <th>Part Number Id</th>
                    </tr>
                </thead>

                {hardwares.map(hardware =>

                    <tbody>
                        <tr>

                            <td key={hardware.serial}>{hardware.serial}</td>
                            <td>{hardware.name}</td>
                            <td>{hardware.partNumId}</td>
                        </tr>
                    </tbody>

                )}

            </Table>
        )
    }

    render() {
        let content = this.state.loading
            ? <div><ProgressBar active now={45} /></div>
            : Home.CreateTable(this.state.hardwares);

       

        return (
            <div>
                <h1>ALL POINTS VA HELPDESK</h1>
                {content}

            </div>

            )
  
  }
}
