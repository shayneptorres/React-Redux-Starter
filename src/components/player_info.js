import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {updatePlayer1Info,updatePlayer2Info} from "../actions/player_action";

class PlayerInfo extends Component {
    constructor(props){
        super(props)
        this.onForm1Submit = this.onForm1Submit.bind(this);
        this.onForm2Submit = this.onForm2Submit.bind(this);
    }

    onForm1Submit(event){
        event.preventDefault();
        this.props.updatePlayer1Info(this.refs.name1.value,this.refs.weapon1.value)
    }

    onForm2Submit(event){
        event.preventDefault();
        this.props.updatePlayer2Info(this.refs.name2.value,this.refs.weapon2.value)
    }

    renderPlayerInfo(){
        return (
            <div className="row">
                <div className="col-sm-6">
                    <div className="player_info_container">
                        <h1>Player Info</h1>
                        <h2>name: {this.props.store.base_state.players.player1.name}</h2>
                        <h2>weapon: {this.props.store.base_state.players.player1.weapon}</h2>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="player_info_container">
                        <h1>Player Info</h1>
                        <h2>name: {this.props.store.base_state.players.player2.name}</h2>
                        <h2>weapon: {this.props.store.base_state.players.player2.weapon}</h2>
                    </div>
                </div>
            </div>
            
        )
    }

    renderPlayerForm(){
        return (
            <div className="edit_container">
                <div className="row">
                    <div className="col-sm-6">
                        <form onSubmit={this.onForm1Submit}>
                            Name: <input 
                                placeholder="name"
                                ref="name1"
                            />
                            <br/>
                            <br/>
                            Weapon: <input 
                                placeholder="name"
                                ref="weapon1"
                            />
                            <br/>
                            <br/>
                            <button
                                type="submit"
                                className="btn btn-success">
                                Save
                            </button>
                        </form>    
                    </div>
                    <div className="col-sm-6">
                        <form onSubmit={this.onForm2Submit}>
                            Name: <input 
                                placeholder="name"
                                ref="name2"
                            />
                            <br/>
                            <br/>
                            Weapon: <input 
                                placeholder="name"
                                ref="weapon2"
                            />
                            <br/>
                            <br/>
                            <button
                                type="submit"
                                className="btn btn-success">
                                Save
                            </button>
                        </form>    
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderPlayerInfo()}
                {this.renderPlayerForm()}
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
    return bindActionCreators(
        {updatePlayer1Info,
        updatePlayer2Info},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(PlayerInfo);