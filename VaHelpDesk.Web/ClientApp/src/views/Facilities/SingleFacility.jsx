import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { ProgressBar } from "react-bootstrap"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// core components
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { hardwaresTable } from "variables/tables"

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";


class SingleFacility extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            facilities: [],
            hardwares: [],
            facilityId: this.props.match.params.id,
            loading: true
        };

        fetch('/api/facilities')
            .then(response => response.json())
            .then(data => {
                this.setState({ facilities: data });
            });
        fetch('/api/hardwares')
            .then(response => response.json())
            .then(data => {
                this.setState({ hardwares: data, loading: false });
            });

    }

    getHardwares(hardwares) {
        let data = []
        data = this.state.hardwares.find((h) => h.facilityId == this.state.facilityId);
        this.setState({ hardwares: data })
        console.log(this.state.hardwares)
        return(data)
    }

    renderTable(classes, tableMap, tableData) {

        let data = []
        if (tableData == this.state.hardwares) {

            tableData.map((d) => {
                let entry = [
                    <div>{d.serial}
                        <Button color="transparent" size="sm" component={Link} to="">
                            details
                    </Button>
                        <Button color="primary" size="sm" component={Link} redirect="true" to={"/hardwares/" + d.id}>
                            edit
                    </Button>
                        <Button color="danger" size="sm" component={Link} to="">
                            delete
                    </Button></div>,
                    d.name,
                    d.facility,
                    d.partNumId]
                data.push(entry)
            })
        }
        if (tableData == this.state.facilities) {
            tableData.map((d) => {
                let entry = [
                    <div>{d.name}
                        <Button color="transparent" size="sm" component={Link} to="">
                            details
                    </Button>
                        <Button color="primary" size="sm" component={Link} redirect="true" to={"/facilities/" + d.id}>
                            edit
                    </Button>
                        <Button color="danger" size="sm" component={Link} to="">
                            delete
                    </Button></div>,
                    d.physicalAddress.addressLine1, d.physicalAddress.addressLine2,
                    d.physicalAddress.city,
                    d.physicalAddress.state,
                    d.physicalAddress.zipCode,]
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
    renderForm(props, facility) {
        const { classes } = props;
        return (
            <div>
                <Grid container>
                    <GridItem xs={12} sm={12} md={8}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>Edit {facility.name} </h4>
                                <p className={classes.cardCategoryWhite}>Edit this facility</p>
                            </CardHeader>
                            <CardBody>
                                <Grid container>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <CustomInput
                                            labelText="Facility Name"
                                            id="name"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                name: "name",
                                                autoFocus: true,
                                                value: facility.name,
                                                onChange: this.handleChange,
                                            }}

                                        />
                                    </GridItem>

                                </Grid>
                                <Grid container>
                                    <GridItem xs={12} sm={12} md={4}>
                                        <CustomInput
                                            labelText="Address Line 1"
                                            id="al1"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                name: "al1",
                                                value: facility.physicalAddress.addressLine1,
                                                onChange: this.handleChange,
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Address Line 2"
                                            id="al2"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                name: "al2",
                                                value: facility.physicalAddress.addressLine2,
                                                onChange: this.handleChange,

                                            }}
                                        />

                                    </GridItem>
                                </Grid>
                                <Grid container>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="City"
                                            id="city"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                name: "city",
                                                value: facility.physicalAddress.city,
                                                onChange: this.handleChange,
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={3}>
                                        <CustomInput
                                            labelText="State"
                                            id="state"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                name: "al2",
                                                value: facility.physicalAddress.state,
                                                onChange: this.handleChange,
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={3}>
                                        <CustomInput
                                            labelText="Zip Code"
                                            id="zip"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                name: "zip",
                                                value: facility.physicalAddress.zipCode,
                                                onChange: this.handleChange,
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
    render() {
        let facility = this.state.facilities.find((f) => f.id == this.state.facilityId);
       
        let content = this.state.loading
            ? <div><ProgressBar active now={45} /></div>
            : this.renderTable(this.props, hardwaresTable, this.state.hardwares);
        return (
            <div>
                Single
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
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    }
};

export default withStyles(dashboardStyle)(SingleFacility);
