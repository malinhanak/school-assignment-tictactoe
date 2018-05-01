import React from 'react';
import {makeMove, newGame} from '../logic';
import { Message } from './Message';
import { Tile } from './Tile';
import RestartGame from './RestartGame';

/*
The main game App! It should have a TicTacToe game state in its component state,
and use the Tile and Message components to render the game.

Then the `makeMove` function from the logic layer should be used to update the
game state as the tiles are being clicked.

The user should also be able to reset the game.

The App component should render an outer element with a `container` CSS class,
and all tiles in an element with a `board` CSS class.
*/

export default class App extends React.Component {

  constructor() {
    super();
    this.state = newGame()
    
  };
  restartGameBoard = () => {
    this.setState({
      player: 'x',
      winner: "0",
      board: [0,0,0,0,0,0,0,0,0]
    })
  };
  makeTheMove = (pos) => {
      if(this.state.winner !== "0") { return; }
      if(this.state.board[pos] === '1' || this.state.board[pos] === '2'){ return; }
      let current = this.state.board;
        current.splice(pos, 1,this.state.player);
        this.setState({board: current}, () => {
          let moves = this.state.board.join('').replace(/0/g,'');
          if(moves.length === 9) { 
            this.setState({winner: 'draw'}); 
            return;
          } else {
            if(this.state.board[0] === "1" && this.state.board[1] === "1" && this.state.board[2] === "1") {
              this.setState({winner: this.state.player});
              return;
            } else if(this.state.board[0] === "2" && this.state.board[1] === "2" && this.state.board[2] === "2") {
              this.setState({winner: this.state.player});
            }
            if(this.state.board[3] === "1" && this.state.board[4] === "1" && this.state.board[5] === "1") {
              this.setState({winner: this.state.player});
              return;
            } else if(this.state.board[3] === "2" && this.state.board[4] === "2" && this.state.board[5] === "2") {
              this.setState({winner: this.state.player});
            }
            if(this.state.board[6] === "1" && this.state.board[7] === "1" && this.state.board[8] === "1") {
              this.setState({winner: this.state.player});
              return;
            } else if(this.state.board[6] === "2" && this.state.board[7] === "2" && this.state.board[8] === "2") {
              this.setState({winner: this.state.player});
            }
            if(this.state.board[0] === "1" && this.state.board[3] === "1" && this.state.board[6] === "1") {
              this.setState({winner: this.state.player});
              return;
            } else if(this.state.board[0] === "2" && this.state.board[3] === "2" && this.state.board[6] === "2") {
              this.setState({winner: this.state.player});
            }
            if(this.state.board[1] === "1" && this.state.board[4] === "1" && this.state.board[7] === "1") {
              this.setState({winner: this.state.player});
              return;
            } else if(this.state.board[1] === "2" && this.state.board[4] === "2" && this.state.board[7] === "2") {
              this.setState({winner: this.state.player});
            }
            if(this.state.board[2] === "1" && this.state.board[5] === "1" && this.state.board[8] === "1") {
              this.setState({winner: this.state.player});
              return;
            } else if(this.state.board[2] === "2" && this.state.board[5] === "2" && this.state.board[8] === "2") {
              this.setState({winner: this.state.player});
            }
            if(this.state.board[0] === "1" && this.state.board[4] === "1" && this.state.board[8] === "1") {
              this.setState({winner: this.state.player});
              return;
            } else if(this.state.board[0] === "2" && this.state.board[4] === "2" && this.state.board[8] === "2") {
              this.setState({winner: this.state.player});
            }
            if(this.state.board[2] === "1" && this.state.board[6] === "1" && this.state.board[4] === "1") {
              this.setState({winner: this.state.player});
              return;
            } else if(this.state.board[2] === "2" && this.state.board[6] === "2" && this.state.board[4] === "2") {
              this.setState({winner: this.state.player});
            }
            this.setState({player: (this.state.player === 'x') ? 'o' : 'x' });
          }
          
        });
   };

  render(){
    const boardGame = this.state.board;
    return (
      <div>
        <div className="head">
          <h1>Tic-Tac-Toe</h1>
          <Message 
            gamewinner={this.state.winner}
            playerturn={this.state.player}
          />
          <RestartGame 
            restart={this.restartGameBoard} 
          />
        </div>
        <div className="board">
          {
            boardGame.map((value, i) => {
              let pos = i;
              return ( <Tile 
                          turn={this.state.player}
                          key={i}
                          pos={i}
                          value={value}
                          makeTheMove={this.makeTheMove}
                          />)
            })
          }
          
        </div>
      </div>
    );
  }
}
