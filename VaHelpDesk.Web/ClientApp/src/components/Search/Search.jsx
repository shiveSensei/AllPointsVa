import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';


export default class Search extends Component {

    constructor(props) {
        super(props);

        this.handleSearchChange = this.handleSearchChange.bind(this);

    }

    handleSearchChange(e) {
       // this.setState({ [e.target.name]: e.target.value })
        //this.query = this.state.query;
        this.props.handleSearchChange(e.target.value)
    }

    render() {
        const query = this.props.query

        return (

            <TextField
                type="text"
                name="query"
                value={query}
                ref={this.props.query}
                onChange={this.handleSearchChange}
            >
            </TextField>
    )
        
    }
}

//<CustomInput
//    formControlProps={{
//        className: classes.margin + " " + classes.search
//    }}

//    inputProps={{
//        placeholder: "Search",
//        inputProps: {
//            "aria-label": "Search",
//            ref: this.query
//        }
//    }}
///>