import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {updatePlayerName} from "../actions/player_action";

class PlayerInfo extends Component {
    constructor(props){
        super(props)
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick(event){
        this.props.updatePlayerName("Shayne");
    }

    render() {
        return (
            <div>
                <h1>Player Info</h1>
                <h2>name: {this.props.store.base_state.players.player1.name}</h2>
                <h2>weapon: {this.props.store.base_state.players.player1.weapon}</h2>
                <button 
                onClick={this.onButtonClick}
                className="btn btn-success">Change</button>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        store: state
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({updatePlayerName},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(PlayerInfo);