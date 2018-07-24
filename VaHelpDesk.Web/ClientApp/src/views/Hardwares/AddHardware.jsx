import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { ProgressBar } from "react-bootstrap"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


// core components
import Table from "components/Table/Table.jsx";

import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import avatar from "assets/img/faces/marc.jpg";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";


class AddHardware extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            hardwares: [],
            partNums: [],
            facilities: [],
            kinds: [],
            categories: [],
            name: '',
            serial: '123',
            partNumId: 2,
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
                this.setState({ facilities: data });
            });

        fetch('/api/PartNums')
            .then(response => response.json())
            .then(data => {
                this.setState({ partNums: data });
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
            "name": this.state.partNums.find((p) => p.id === this.state.partNumId).name,
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
    renderForm(props, facilities, partNums) {
        const currencies = [
            {
                value: 'USD',
                label: '1',
            },
            {
                value: 'EUR',
                label: '2',
            },
            {
                value: 'BTC',
                label: '3',
            },
            {
                value: 'JPY',
                label: '4',
            },
        ];

    const { classes } = props;
    return (
        <div>
            <Grid container>
                <GridItem xs={12} sm={12} md={8}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Add Hadware</h4>
                            <p className={classes.cardCategoryWhite}>Complete this dialog to add a new hardware to the database</p>
                        </CardHeader>
                        <CardBody>
                            <Grid container>
                                <GridItem xs={12} sm={12} md={3}>
                                    <CustomInput
                                        labelText="Serial"
                                        id="serial"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            name: "serial",
                                            value: this.state.serial,
                                            autoFocus: true,
                                            onChange: this.handleChange,

                                        }}

                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        labelText="Device Name"
                                        id="device-name"
                                        formControlProps={{
                                            fullWidth: true,

                                        }}
                                        inputProps={{
                                            name: "name",
                                            value: this.state.name,
                                            onChange: this.handleChange,


                                        }}
                                    />
                                </GridItem>
                            </Grid>
                            <Grid container>
                                <GridItem xs={12} sm={12} md={6}>
                                    <TextField
                                        id="partNumId"
                                        select
                                        label="Part Number"
                                        value={this.state.partNumId}
                                        onChange={this.handleChange}
                                        SelectProps={{
                                            native: true,
                                            MenuProps: {
                                                // className: classes.menu,
                                            },
                                        }}
                                        helperText="Select a part Number"
                                        margin="normal"
                                    >
                                        {partNums.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.name}
                                            </option>
                                        ))}
                                    </TextField>

                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>

                                    <TextField
                                        id="facility"
                                        select
                                        label="Facility"
                                        value={this.state.facilityId}
                                        onChange={this.handleChange}
                                        SelectProps={{
                                            native: true,
                                            MenuProps: {
                                               // className: classes.menu,
                                            },
                                        }}
                                        helperText="Select a facility"
                                        margin="normal"
                                    >
                                        {facilities.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.name}
                                            </option>
                                        ))}
                                    </TextField>
                                      
                                        
                                  

                                </GridItem>
                            </Grid>
                     
                          
                        </CardBody>
                        <CardFooter>
                            <Button color="primary">Submit</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
               
            </Grid>
        </div>
    );
}

    render() {

        let content = this.state.loading
            ? <div><ProgressBar active now={45} /></div>
            : this.renderForm(this.props, this.state.facilities, this.state.partNums);

        return (
            <div>
                <Grid container>
                    <GridItem xs={12} sm={12} md={12}>
                        {content}
                    </GridItem>
                </Grid>
            </div>
        )

    }
}

const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};

export default withStyles(dashboardStyle)(AddHardware);





