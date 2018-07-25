import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';


export default class Search extends Component {
    constructor(props) {
        super(props);
        this.query = React.createRef();
        this.state = {
            query: ''
            
        };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
       this.query = this.state.query;
        console.log(this.query)
    }

    render() {
        return (

            <TextField
                type="text"
                name="query"
                value={this.state.query}
                ref={this.query}
                onChange={this.handleChange}
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