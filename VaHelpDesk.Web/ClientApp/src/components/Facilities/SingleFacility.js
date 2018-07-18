import React, { Component } from 'react';
import { Table, Media, Badge, Well, Image, ProgressBar, Button, Label, Panel, Glyphicon } from 'react-bootstrap';

import { Link } from 'react-router-dom';

export class SingleFacility extends Component {
    displayName = SingleFacility.name

    constructor(props) {
        super(props);

        this.state = {
            facility: [],
            hardwares: [],
            facilityId: this.props.match.params.id,
            loading: true
        };

        fetch('/api/Facilities/' + this.state.facilityId)
            .then(response => response.json())
            .then(data => {
                this.setState({ facility: data });
                console.log(data);
            });

        fetch('/api/Hardwares/')
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
        let filteredHardwares = this.state.hardwares.filter((h) => h.facilityId == this.state.facilityId);
        let content = this.state.loading
            ? <div><ProgressBar active now={45} /></div>
            : SingleFacility.CreateTable(filteredHardwares);



        return (
            <div>
                <h1>{this.state.facility.name}</h1>
                {content}

            </div>
        )

    }
}
