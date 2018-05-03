/*
The Message component expects to be passed...
- state: a game state string (plr1,plr2,plr1won,plr2won,draw)

The component will then render an appropriate message.
*/

import React from 'react';

export const Message = (props) => {
    const gameWinner = props.gamewinner;
    const gamePlayer = props.playerturn;
    const gameBoard = props.board
    let player;
    if(gamePlayer === 'plr1') { player = 'X'}
    else { player = 'O' }
    const render = () => {
        if(gameWinner === 0){
            return  (<p id="gameStatus">{"THE GAME IS ON."}<br/><span>{"Currently player: "}</span>{player}</p>);
        } else if(!gameBoard.includes(0)){
            return (<p id="gameStatus">{"Draw, restart the game!"}</p>);
        } else if(gameWinner === 1){
            return (<p id="gameStatus">{"GameOver, player X won!"}</p>);
        } else {
            return (<p id="gameStatus">{"GameOver, player O won!"}</p>);
        }
    }
    return render()
};
