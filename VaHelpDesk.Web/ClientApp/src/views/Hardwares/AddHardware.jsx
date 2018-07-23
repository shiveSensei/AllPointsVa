import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { ProgressBar } from "react-bootstrap"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
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
            serial: '',
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


    renderForm(props) {
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
                                            native: true,
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
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </Grid>
                            <Grid container>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Part Number"
                                        id="part-number"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            inputComponent: "select",
                                            value: this.state.partNumId,
                                            onChange: this.handleChange,
                                            children: ["fish", "pny"]

                                        }}
                                    />

                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Facility"
                                        id="facility"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            inputComponent: "select",
                                            value: this.state.facilityId,
                                            onChange: this.handleChange
                                        }}
                                    />
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
    renderTable(classes, tableMap, tableData) {
        let data = []
        if (tableData == this.state.hardwares) {
            Object.values(tableData).map((d) => {
                let entry = [
                    <div>{d.serial.toString()}
                        <Button color="transparent" size="sm" component={Link} to="">
                            details
                    </Button>
                        <Button color="primary" size="sm" component={Link} redirect="true" to={"/hardwares/edit/" + d.serial.toString()}>
                            edit
                    </Button>
                        <Button color="danger" size="sm" component={Link} to="">
                            delete
                    </Button></div>,
                    d.name,
                    d.facility,
                    d.partNumId.toString()]
                data.push(entry)
            })
            console.log(data)
        }
        if (tableData == this.state.facilities) {
            Object.values(tableData).map((d) => {
                let entry = [d.name, d.physicalAddress.addressLine1, d.physicalAddress.addressLine2, d.physicalAddress.city, d.physicalAddress.state, d.physicalAddress.zipCode,]
                data.push(entry)
            })
        }

        return (

            <Card>
                <CardHeader color={tableMap.metadata.color}>
                    <h4 className={classes.cardTitleWhite}>{tableMap.metadata.name}</h4>
                    <p className={classes.cardCategoryWhite}>
                        {tableMap.metadata.subtext}
                    </p>
                </CardHeader>
                <CardBody>
                    <Table
                        tableHeaderColor="warning"

                        tableHead={tableMap.head}
                        tableData={data}
                    />
                </CardBody>
            </Card>

        )
    }

    render() {
        let content = this.state.loading
            ? <div><ProgressBar active now={45} /></div>
            : this.renderForm(this.props);

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





