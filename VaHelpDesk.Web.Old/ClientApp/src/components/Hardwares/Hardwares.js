import React, { Component } from 'react';
import { Table, Media, Badge, Well, Image, ProgressBar, Button, Label, Panel, Glyphicon } from 'react-bootstrap';

import { Link } from 'react-router-dom';

export class Hardwares extends Component {
  displayName = Hardwares.name

    constructor(props) {
        super(props);

        this.state = {
            hardwares: [],
            loading: true
        };

        fetch('/api/hardwares')
            .then(response => response.json())
            .then(data => {
                this.setState({ hardwares: data, loading: false });
                console.log(data);
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
            : Hardwares.CreateTable(this.state.hardwares);



        return (
            <div>
                <h1>Hardwares</h1>
                {content}

            </div>

        )

    }
}
