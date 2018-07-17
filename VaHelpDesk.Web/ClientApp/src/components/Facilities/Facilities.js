import React, { Component } from 'react';
import { Media, Badge, Well, Image, ProgressBar, Button, Label, Panel, Glyphicon } from 'react-bootstrap';

import { Link } from 'react-router-dom';

export class Facilities extends Component {
  displayName = Facilities.name

    constructor(props) {
        super(props);

        this.state = {
            facilities: [],
            loading: true
        };

        fetch('/api/Facilities')
            .then(response => response.json())
            .then(data => {
                this.setState({ facilities: data, loading: false });
                console.log(data);
            });

        
    }
    static FacilitiesTable(facilities) {

        return (
            <div>
                <div className="Table">
                    <div className="col-md-11">
                        {facilities.map(hardware =>
                            <div className="row" key={hardware.id}>

                                <div className="textc">
                                    <Media>
                                        <Well className={hardware.Name}>
                                            <Media.Body>

                                                <Media.Heading className="list">
                                                    <div className="col-md-4  headcontainer">
                                                        <Panel className="head">
                                                            <div className="col-md-5 col-xs-3 divmargin">
                                                                {hardware.FacilityId}
                                                            </div>
                                                            <div className="col-md-7 col-xs-5 divmargin">
                                                                @ {hardware.KindId}
                                                            </div>
                                                        </Panel>
                                                    </div>

                                                   
                                                </Media.Heading>

                                            </Media.Body>
                                        </Well>
                                    </Media>
                                    <hr className="style-two" />
                                </div>;
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

  
    render() {

        let content = this.state.loading
            ? <div><ProgressBar active now={45} /></div>
            : (this.state.facilities);

        return ("Yes");
    
  }
}
