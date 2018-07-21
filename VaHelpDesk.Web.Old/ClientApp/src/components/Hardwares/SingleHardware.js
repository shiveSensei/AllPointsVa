import React, { Component } from 'react';
import { Table, Media, Badge, Well, Image, ProgressBar, Button, Label, Panel, Glyphicon } from 'react-bootstrap';

import { Link } from 'react-router-dom';

export class SingleHardware extends Component {
    displayName = SingleHardware.name

    constructor(props) {
        super(props);

        this.state = {
            hardwares: [],
            hardwareId: this.props.match.params.id,
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

        let hardware = this.state.hardwares.filter((h) => h.id == this.state.hardwareId)
        let content = this.state.loading
            ? <div><ProgressBar active now={45} /></div>
            : SingleHardware.CreateTable(hardware);



        return (
            <div>
                <h1>Hardwares</h1>
                {content}
            </div>

        )

    }
}
