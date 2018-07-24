import React from "react";
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// @material-ui/icons
import Desktop from "@material-ui/icons/DesktopMac";
import Tickets from "@material-ui/icons/Style";
import Service from "@material-ui/icons/LocalHospital";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import Update from "@material-ui/icons/Update";
import AccessTime from "@material-ui/icons/AccessTime";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import Button from "components/CustomButtons/Button";

import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { helpdesk, website, server } from "variables/general";
import { facilitiesTable, hardwaresTable } from "variables/tables"
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            hardwares: [],
            facilities: [],
            loading: true
        };

        fetch('/api/hardwares')
            .then(response => response.json())
            .then(data => {
                this.setState({ hardwares: data });
                 console.log(data);
            });

        fetch('/api/facilities')
            .then(response => response.json())
            .then(data => {
                this.setState({ facilities: data, loading: false });
                // console.log(data);
            });

    }

    handleChange = (event, value) => {
    this.setState({ value });
  };

    handleChangeIndex = index => {
    this.setState({ value: index });
  };

    renderCard(classes, icon, title, data, subTitle, stats) {
        //data has name, title, and stats
        return (

            <Card>
                <CardHeader color="warning" stats icon>
                    <CardIcon color="warning">
                        {icon}
                    </CardIcon>
                    <p className={classes.cardCategory}>{title}</p>
                    <h3 className={classes.cardTitle}>
                        {data} <small>{subTitle}</small>
                    </h3>
                </CardHeader>
                <CardFooter stats>
                    <div className={classes.stats}>
                        <Update />
                        Just Updated
                </div>
                </CardFooter>
            </Card>
            
            )

    }

    renderChartCard(classes, chart) {
        //chart variable needs a Name, chart(ex. daily sales chart, which comes from imported variable)
        //Type (string): Line, Bar, ect.
        //DateTime saying when data was accessed
        return (
            <Card chart>
                <CardHeader color={chart.metadata.color}>
                    <ChartistGraph
                        className="ct-chart"
                        data={chart.data}
                        type={chart.metadata.type}
                        options={chart.options}
                        listener={chart.animation}
                    />
                </CardHeader>
                <CardBody>
                    <h4 className={classes.cardTitle}>{chart.metadata.name}</h4>
                    <p className={classes.cardCategory}> {chart.metadata.subtext} </p>
                </CardBody>
                <CardFooter chart>
                    <div className={classes.stats}>
                        <AccessTime /> {chart.metadata.accessed}
                </div>
                </CardFooter>
            </Card>
            )
    }

    renderTable(classes, tableMap, tableData) {
        let data = []
        if (tableData === this.state.hardwares) {

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
        if (tableData === this.state.facilities) {
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
    render() {
        let inService = this.state.hardwares.filter((h) => !h.inService); //set this to h.inService when full data model is implemented
    const { classes } = this.props;
    return (
      <div>
            <Grid container>

                <GridItem xs={12} sm={6} md={4}>
                    {this.renderCard(classes, <Desktop />, "Units Deployed", this.state.hardwares.length, "99% completed", "Last Checked 2 days ago")}
                </GridItem>

                <GridItem xs={12} sm={6} md={4}>
                    {this.renderCard(classes, <Service />, "Units In Service", inService.length, "sub Data", "Last Checked 2 days ago")}
                </GridItem>

                <GridItem xs={12} sm={6} md={4}>
                    {this.renderCard(classes, <Tickets />, "Tickets Completed", "88", "sub Data", "Last Checked 2 days ago")}
                </GridItem>
         
            </Grid>

            <Grid container>
                <GridItem xs={12} sm={12} md={4}>
                    {this.renderChartCard(classes, dailySalesChart)}
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    {this.renderChartCard(classes, emailsSubscriptionChart)}
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    {this.renderChartCard(classes, completedTasksChart)}
                </GridItem>
            </Grid>

            <Grid container>
              <GridItem xs={12} sm={12} md={6}>
                <CustomTabs
                  title="Tasks:"
                  headerColor="primary"
                  tabs={[
                    {
                      tabName: "helpdesk",
                      tabIcon: BugReport,
                      tabContent: (
                        <Tasks
                          checkedIndexes={[0, 3]}
                          tasksIndexes={[0, 1, 2, 3]}
                          tasks={helpdesk}
                        />
                      )
                    },
                    {
                      tabName: "Website",
                      tabIcon: Code,
                      tabContent: (
                        <Tasks
                          checkedIndexes={[0]}
                          tasksIndexes={[0, 1]}
                          tasks={website}
                        />
                      )
                    },
                    {
                      tabName: "Server",
                      tabIcon: Cloud,
                      tabContent: (
                        <Tasks
                          checkedIndexes={[1]}
                          tasksIndexes={[0, 1, 2]}
                          tasks={server}
                        />
                      )
                    }
                  ]}
                />
              </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                    {this.renderTable(classes, hardwaresTable, this.state.hardwares)}
                
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    {this.renderTable(classes, facilitiesTable, this.state.facilities)}

                </GridItem>
            </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
