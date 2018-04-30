import React, { Component } from 'react';

export default class RestartGame extends Component {
    render() {
        return (
            <button onClick={this.props.restart}>Restart the game</button>
        );
    }
}