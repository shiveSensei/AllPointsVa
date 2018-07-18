import React, { Component } from 'react';
import { Table, HelpBlock, Form, FormGroup, ControlLabel, FormControl, ProgressBar, Button, Label } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class AddFacility extends Component {
    displayName = AddFacility.name

    constructor(props) {
        super(props);

        this.state = {
            facility: [],
            response: '',
            loading: true
        };

      
       
    }
    static RenderAddFacilityForm() {

        return (
            <form>
                <FormGroup>
                    <ControlLabel>
                        Facility Name
                        </ControlLabel>
                    <FormControl
                        type="text"
                    />
                </FormGroup>

                <FormGroup>
                    <ControlLabel>
                        Address Line 1
                        </ControlLabel>
                    <FormControl
                        type="text"
                    />
                </FormGroup>

                <FormGroup>
                    <ControlLabel>
                        Address Line 2
                        </ControlLabel>
                    <FormControl
                        type="text"
                    />
                </FormGroup>

                <FormGroup>
                    <ControlLabel>
                        City
                        </ControlLabel>
                    <FormControl
                        type="text"
                    />
                </FormGroup>

                <FormGroup>
                    <ControlLabel>
                        State
                        </ControlLabel>
                    <FormControl
                        type="text"
                    />
                </FormGroup>

                <FormGroup>
                    <ControlLabel>
                        Zip Code
                        </ControlLabel>
                    <FormControl
                        type="text"
                    />
                </FormGroup>
                <Button type="submit" onClick={this.CreateFacility}>Submit</Button>
            </form>
            )
        

    }
    static CreateFacility(event) {
        event.preventDefault();
        let newFacility = {
            "name": "New Facility 434",
            "physicalAddress": {
                "addressLine1": "123 Main St.",
                "zipCode": "70084",
                "city": "New Orleans",
                "state": "LA"
            },
            "description": "A nnnnnnnnnn"

        };
        console.log(newFacility);
         fetch('/api/facilities', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
             body: JSON.stringify({
                 "name": newFacility.name,
                 "physicalAddress": {
                     "addressLine1": newFacility.physicalAddress.addressLine1,
                     "addressLine2": newFacility.physicalAddress.addressLine2,
                     "zipCode": newFacility.physicalAddress.zipCode,
                     "city": newFacility.physicalAddress.city,
                     "state": newFacility.physicalAddress.state
                 },
                 "description": newFacility.description

            })
        }).then(response => {
            if (response.status >= 400) {
                // console.log(response);
                //  throw new Error('Throw Error');
            }

            this.setState({ response: response, loading: false });
            console.log('State: ', this.state.response);

            //   return (response.json());
        })

    }

    render() {

        let content = AddFacility.RenderAddFacilityForm();
        //    ? <div><ProgressBar active now={45} /></div>
        //    : SingleFacility.CreateTable(filteredHardwares);



        return (
            <div>
                <h1>Add Facility</h1>

                {content}
                <hr/>


                <form>
                    <FormGroup
                        controlId="formBasicText"
                    >
                        <ControlLabel>Bulk Add Using a File...</ControlLabel>
                        <FormControl
                            type="file"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                        <HelpBlock>File must be properly validated before using.</HelpBlock>
                    </FormGroup>
                </form>

            </div>
        )

    }
}
