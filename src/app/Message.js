/*
The Message component expects to be passed...
- state: a game state string (plr1,plr2,plr1won,plr2won,draw)

The component will then render an appropriate message.
*/

import React from 'react';

export const Message = (props) => {
    const gameWinner = props.gamewinner;
    const gamePlayer = props.playerturn;
    function myFunct() {
        if(gameWinner === ""){
            return "Game is still ongoing, currently " + gamePlayer + "is playing"
        } else if(gameWinner === "draw"){
            return "The Game is a draw, please restart the game"
        } else { return "GameOver" + gameWinner === 'plr1' ? 'Player X Won' : 'Player O Won' }
    }
    let render = myFunct();
    console.log("the result of myFunct", myFunct());
    return (
        <p>{render}</p>
    );

};
