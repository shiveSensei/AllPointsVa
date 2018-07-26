import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import HeaderLinks from "./HeaderLinks";
import Button from "components/CustomButtons/Button";

import headerStyle from "assets/jss/material-dashboard-react/components/headerStyle.jsx";

class Header extends React.Component {
    constructor(props) {
        super(props);

        //this.handleSearchChange = this.handleSearchChange.bind(this);
    }

   
    render() {
        const { classes, color } = this.props;
        const appBarClasses = classNames({
            [" " + classes[color]]: color
        });

        return (
            <AppBar className={classes.appBar + appBarClasses}>
                <Toolbar className={classes.container}>

                    <Hidden smDown implementation="css">
                        <HeaderLinks
                            handleSearchChange={this.props.handleSearchChange}
                        />
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton
                            className={classes.appResponsive}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.props.handleDrawerToggle}
                        >
                            <Menu />
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </AppBar>
        );

    }


}
  
export default withStyles(headerStyle)(Header);
