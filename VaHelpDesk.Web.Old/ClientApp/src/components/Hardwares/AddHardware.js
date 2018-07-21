import React, { Component } from 'react';
import { Table, HelpBlock, Form, FormGroup, ControlLabel, FormControl, ProgressBar, Button, Label } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class AddHardware extends Component {
    displayName = AddHardware.name

    constructor(props) {
        super(props);

        this.state = {
            hardwares: [],
            partNums: [],
            facilities: [],
            kinds: [],
            categories: [],
            name: '',
            serial: '',
            partNumId: '',
            delDate: '',
            facility: '',
            cat: '',
            kind: '',
            response: '',
            loading: true
        };

        fetch('/api/Facilities')
            .then(response => response.json())
            .then(data => {
                this.setState({ facilities: data});
            });

        fetch('/api/PartNums')
            .then(response => response.json())
            .then(data => {
                this.setState({ partNums: data});
            });

        fetch('/api/Kinds')
            .then(response => response.json())
            .then(data => {
                this.setState({ kinds: data });
                console.log(this.state.kinds)
            });

        fetch('/api/Categories')
            .then(response => response.json())
            .then(data => {
                this.setState({ categories: data, loading: false });
            });

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
         
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.partNums)
        //Build new hardware object from state
        let newHardware = {
            "name": this.state.partNums.find((p) => p.id == this.state.partNumId).name,
            "serial": this.state.serial,
            "class": "hardware",
            "inService": false,
            "warranty": true,
            "partNumId": this.state.partNumId,
            //"partNum": {}, //finish this logic
            "deliveryDate": "2018-07-19T16:22:56.495Z",
            "warrantyEnd": "2018-07-19T16:22:56.495Z",
            "trackingNum": 2345,
            "facilityId": this.state.facilityId,
            "categoryId": this.state.partNums.find((p) => p.id == this.state.partNumId).categoryId,
            "kindId": this.state.partNums.find((p) => p.id == this.state.partNumId).kindId
            //"facility": this.state.facilities.filter((f) => f.id == this.state.facilityId)
            //"category": this.state.categories.filter((c) => c.id == this.state.categoryId),
            //"kind": this.state.kinds.filter((k) => k.id == this.state.kindId)
        };

        //newHardware.partNum = this.state.partNums.find((p) => p.id == this.state.partNumId);
        console.log(newHardware);

          //Post to api route
        fetch('/api/hardwares', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newHardware)
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

    OnSingleSubmit() {

        //Build new hardware object from state
        let newHardware = {
            "name": this.state.name,
            "serial": this.state.serial,
            "class": "hardware",
            "inService": false,
            "warranty": true,
            "partNumId": this.state.partNumId,
            "partNum": this.state.partNums.filter((p) => p.id == this.state.partNumId), //finish this logic
            "deliveryDate": this.state.delDate,
            "warrantyEnd": "2018-07-19T16:22:56.495Z",
            "facilityId": this.state.facility.id,
            "categoryId": this.state.partNums.filter((p) => p.id == this.state.partNumId).categoryId,
            "kindId": this.state.partNums.filter((p) => p.id == this.state.partNumId).kindId,
            "facility": this.state.facilities.filter((f) => f.id == this.state.facilityId),
            "category": '',
            "kind": ''
        };

        //Post to api route
        fetch('/api/hardwares', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newHardware)
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

    RenderAddHardwareForm(partNums, facilities) {

        return (
            <form>
                <FormGroup>
                    <ControlLabel>
                        Serial Number
                    </ControlLabel>
                    <FormControl
                        type="text"
                        name="serial"
                        value={this.state.serial}
                        placeholder="CND3245LL"
                        onChange={this.handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Part Number</ControlLabel>

                    <FormControl
                        componentClass="select"
                        name="partNumId"
                        value={this.state.partNumId}
                        onChange={this.handleChange}

                    >
                        <option value="select">Select..</option>
                        {partNums.map(partNum =>
                           

                            <option value={partNum.id}>{partNum.name}</option>
                        )}
                    </FormControl>
                </FormGroup>

                <FormGroup>
                    <ControlLabel> Ship Date </ControlLabel>
                    <FormControl
                        type="text"
                    />
                </FormGroup>

                <FormGroup >
                    <ControlLabel>Facility</ControlLabel>

                    <FormControl
                        componentClass="select"
                        name="facilityId"
                        value={this.state.facilityId}
                        onChange={this.handleChange}
                    >
                        <option value="select">Select..</option>
                        {facilities.map(facility =>
                                <option value={facility.id}>{facility.name}</option>
                        )}
                    </FormControl>
                </FormGroup>


                <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
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

        let content = this.state.loading
            ? <div><ProgressBar active now={45} /></div>
            : this.RenderAddHardwareForm(this.state.partNums, this.state.facilities);



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
