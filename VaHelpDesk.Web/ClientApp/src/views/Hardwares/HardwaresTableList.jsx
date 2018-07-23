import React, { Component } from "react";
import { Link } from 'react-router-dom'

import { ProgressBar } from "react-bootstrap"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { hardwaresTable } from "variables/tables"



import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import Button from "../../components/CustomButtons/Button";
import SingleHardware from "./SingleHardware";


class HardwaresTableList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            hardwares: [],
            loading: true
        };

        fetch('/api/hardwares')
            .then(response => response.json())
            .then(data => {
               
                this.setState({ hardwares: data, loading: false });
            });


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
                        <Button color="primary" size="sm" component={Link} redirect="true" to={"/hardwares/edit/" + d.serial}>
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
            : this.renderTable(this.props, hardwaresTable, this.state.hardwares);

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

export default withStyles(dashboardStyle)(HardwaresTableList);
