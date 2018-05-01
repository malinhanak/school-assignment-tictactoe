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
        if(gameWinner === "0"){
            return "Game is still ongoing, currently player" + gamePlayer + ", is playing"
        } else if(gameWinner === "draw"){
            return "The Game is a draw, please restart the game"
        } else if(gameWinner === "1"){
            return "GameOver, player X won!"
        } else {
            return "GameOver, player O won!"
        }
    }
    let render = myFunct();
    return (
        <p>{render}</p>
    );

};
