import React, { Component } from 'react';
import { Table, HelpBlock, Form, FormGroup, ControlLabel, FormControl, ProgressBar, Button, Label } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class AddHardware extends Component {
    displayName = AddHardware.name

    constructor(props) {
        super(props);

        this.state = {
            hardwares: [],
            response: '',
            loading: true
        };

        
           
    }

    OnSingleSubmit() {

      

        fetch('/api/hardwares', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                hardwares: this.state.hardwares,
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

    static RenderAddHardwareForm() {

        return (
            <form>
                <FormGroup>
                    <ControlLabel>
                        Serial Number
                        </ControlLabel>
                    <FormControl
                        type="text"
                    />
                </FormGroup>

                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Part Number</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                        <option value="select">select</option>
                        <option value="other">...</option>
                    </FormControl>
                </FormGroup>

                <FormGroup>
                    <ControlLabel>
                        Ship Date
                        </ControlLabel>
                    <FormControl
                        type="text"
                    />
                </FormGroup>

                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Facility</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                        <option value="select">select</option>
                        <option value="other">...</option>
                    </FormControl>
                </FormGroup>

               
                <Button type="submit">Submit</Button>
            </form>
            )
        

    }
    static CreateHardware() {

        //create new hw and add it to the state
        let newHardware = new {
            "name": "New Facility",
            "physicalAddress": {
                "addressLine1": "123 Main St.",
                "zipCode": "70084",
                "city": "New Orleans",
                "state": "LA"
            },
            "description": "A newly"
        };
                        
    }

    render() {

        let content = AddHardware.RenderAddHardwareForm();
        //    ? <div><ProgressBar active now={45} /></div>
        //    : SingleFacility.CreateTable(filteredHardwares);



        return (
            <div>
                <h1>Add Hardware</h1>

                {content}
                <hr/>


                <form>
                    <FormGroup>
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
