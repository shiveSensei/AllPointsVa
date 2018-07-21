import React, { Component } from 'react';
import { Table, HelpBlock, Form, FormGroup, ControlLabel, FormControl, ProgressBar, Button, Label } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class AddFacility extends Component {
    displayName = AddFacility.name

    constructor(props) {
        super(props);

        this.state = {
            facility: [],
            name: '',
            al1: '',
            al2: '',
            city: '',
            state: '',
            zip: '',
            response: '',
            loading: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
         
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();

        //Build new facility object from state
        let newFacility = {
            "name": this.state.name,
            "physicalAddress": {
                "addressLine1": this.state.al1,
                "zipCode": this.state.zip,
                "city": this.state.city,
                "state": this.state.state
            },
            "description": "Idk"
        };

        //Post to api route
        fetch('/api/facilities', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFacility)
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

 
    static renderForm() {

    }

    render() {

        //let content =this.state.loading
        //    ? <div><ProgressBar active now={45} /></div>
        //    : AddFacility.RenderAddFacilityForm();



        return (
            <div>

                <h1>Add Facility</h1>

                <form>
                    <FormGroup>
                        <ControlLabel>
                            Facility Name
                        </ControlLabel>
                        <FormControl
                            type="text"
                            name="name"
                            value={this.state.name}
                            placeholder="Enter a Facility Name"
                            onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>
                            Address Line 1
                        </ControlLabel>
                        <FormControl
                            type="text"
                            name="al1"
                            value={this.state.al1}
                            placeholder="123 Main St"
                            onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>
                            Address Line 2
                        </ControlLabel>
                        <FormControl
                            type="text"
                            name="al2"
                            value={this.state.al2}
                            placeholder="Bld 2, Rm 126"
                            onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>
                            City
                        </ControlLabel>
                        <FormControl
                            type="text"
                            name="city"
                            value={this.state.city}
                            placeholder="New Orleans"
                            onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>
                            State
                        </ControlLabel>
                        <FormControl
                            type="text"
                            name="state"
                            value={this.state.state}
                            placeholder="LA"
                            onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>
                            Zip Code
                        </ControlLabel>
                        <FormControl
                            type="text"
                            name="zip"
                            value={this.state.zip}
                            placeholder="70084"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
                </form>
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
