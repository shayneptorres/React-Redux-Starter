import React, { Component } from 'react';
import {connect} from "react-redux";

class PlayerInfo extends Component {
    constructor(){
        super()

    }

    render() {
        return (
            <div>
                <h1>Player Info</h1>
                {console.log(this.props.base_state)}
                <h2>{this.props.base_state.base_state.message}</h2>
            </div>
        );
    }    
}

function mapStateToProps(state){
    return {
        base_state: state
    }
}

export default connect(mapStateToProps)(PlayerInfo);