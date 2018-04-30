/*
The Message component expects to be passed...
- state: a game state string (plr1,plr2,plr1won,plr2won,draw)

The component will then render an appropriate message.
*/

import React from 'react';

export const Message = (props) => {
    return (
        <p className={!this.state.winner === "" ? 'visible' : 'hidden'}>
            GameOver {this.state.winner === 'plr1' ? 'Player X Won' : 'Player O Won'}
        </p>
    );

};
