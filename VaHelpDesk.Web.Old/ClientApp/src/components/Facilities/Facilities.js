import React, { Component } from 'react';
import { Table, Media, Badge, Well, Image, ProgressBar, Button, Label, Panel, Glyphicon } from 'react-bootstrap';

import { Link } from 'react-router-dom';

export class Facilities extends Component {
  displayName = Facilities.name

    constructor(props) {
        super(props);

        this.state = {
            facilities: [],
            loading: true
        };

        fetch('/api/Facilities')
            .then(response => response.json())
            .then(data => {
                this.setState({ facilities: data, loading: false });
                console.log(data);
            });
       
    }
    static CreateTable(facilities) {
        return (
            <Table responsive>
                <thead>
                    <tr >
                        <th>Name</th>
                        <th>Street Address</th>
                        <th>Street Address 2</th>
                        <th>Zip Code</th>
                        <th>City</th>
                        <th>State</th>
                    </tr>
                </thead>

                {facilities.map(facility =>

                    <tbody>
                        <tr>
                            <td key={facility.name}>{facility.name}</td>
                            <td>{facility.physicalAddress.addressLine1}</td>
                            <td>{facility.physicalAddress.addressLine2}</td>
                            <td>{facility.physicalAddress.zipCode}</td>
                            <td>{facility.physicalAddress.city}</td>
                            <td>{facility.physicalAddress.state}</td>

                        </tr>
                    </tbody>

                )}

            </Table>
        )
    }

    render() {
        let content = this.state.loading
            ? <div><ProgressBar active now={45} /></div>
            : Facilities.CreateTable(this.state.facilities);



        return (
            <div>
                <h1>Facilities</h1>
                {content}

            </div>
        )

    }
}
