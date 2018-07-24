import React from "react";
import { Switch, Route } from "react-router-dom";


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import FacilitiesTableList from "./FacilitiesTableList";
import SingleFacility from "./SingleFacility";


const FacilitiesIndex = () => (

    <div>
        <Switch>
            <Route exact path='/facilities' component={FacilitiesTableList} />
            <Route path='/facilities/:id' component={SingleFacility} />
        </Switch>
    </div>
)

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

export default withStyles(styles)(FacilitiesIndex);
