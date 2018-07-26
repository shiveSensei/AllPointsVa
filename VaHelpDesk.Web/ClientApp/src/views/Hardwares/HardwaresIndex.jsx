import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Switch, Route } from "react-router-dom";


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import DetailsIcon from "@material-ui/icons/ViewList";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from '@material-ui/core/CircularProgress';

// core components
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { hardwaresTable } from "variables/tables"
import SingleHardware from "./SingleHardware";
import HardwaresTableList from "./HardwaresTableList";


class HardwaresIndex extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>

                <Switch>
                    <Route exact path='/hardwares' render={() => <HardwaresTableList query={this.props.query} />} />
                    <Route path='/hardwares/:id' component={SingleHardware} />

                </Switch>
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

export default withStyles(styles)(HardwaresIndex);
