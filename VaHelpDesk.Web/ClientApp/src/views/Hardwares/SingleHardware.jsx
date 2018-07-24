import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// core components
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { hardwaresTable } from "variables/tables"

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";


class SingleHardware extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
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
    renderForm(props, hardware) {
        const { classes } = props;
        console.log(hardware)
        return (
            <div>
                <Grid container>
                    <GridItem xs={12} sm={12} md={8}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>Edit {hardware.name} </h4>
                                <p className={classes.cardCategoryWhite}>Edit this device</p>
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
                                                value: hardware.name,
                                                onChange: this.handleChange,
                                            }}

                                        />
                                    </GridItem>

                                </Grid>
                                <Grid container>
                                    <GridItem xs={12} sm={12} md={4}>
                                        <CustomInput
                                            labelText="Serial"
                                            id="al1"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                name: "serial",
                                                value: hardware.serial,
                                                onChange: this.handleChange,
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Facility"
                                            id="al2"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                name: "facilityId",
                                                value: hardware.facilityId,
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
        let hardware = this.state.hardwares.find((h) => h.id == this.state.hardwareId)
        let content = this.state.loading
            ? <div><ProgressBar active now={45} /></div>
            : this.renderForm(this.props, hardware);

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

export default withStyles(dashboardStyle)(SingleHardware);
