// ---------- A tictactoe gaming library! ------------

/*
A game is an object with...
- state: a string describing the current state:
  - 'plr1': It is player 1's turn to play
  - 'plr2': It is player 2's turn to play
  - 'plr1won': Game over, the first player won
  - 'plr2won': Game over, the second player won
  - 'draw': Game over, nobody won
- board: An array of 9 numbers, each of which are either:
  - 0: An empty square
  - 1: Player 1 has a marker here
  - 2: Player 2 has a marker here
- line: an array of all positions involved in the win, otherwise empty array (STRETCH TASK)

The board array goes from top left to bottom right. For example, the array
[0,1,2,1,2,0,1,0,2] represents this board:

  .---.---.---.
  |   | 1 | 2 |
  |---+---+---|
  | 1 | 2 |   |
  |---+---+---|
  | 1 |   | 2 |
  '---'---'---'
*/

/*
The newGame function will return a valid new game object.
*/
export const newGame = () => ({
  player: 'plr1',
  winner: null,
  board: [0,0,0,0,0,0,0,0,0],
  line: []
});

/*
The makeMove function should be called with...
- game: A valid game object
- pos: A number 0-8 corresponding to where we want to play

It will return a new game object. If the move was invalid
(because the position was already taken or the game is over),
an unchanged game will be returned.
*/

export const makeMove = (game, pos) => {
  game = {board: [0,0,0,0,0,0,0,0,0]}
  if(this.state.game.winner !== null) { return; }
  if(this.state.game.board[pos]=== '1' || this.state.game.board[pos]=== '2'){ return; }
  let current = this.state.game.board;
    current.splice(pos, 1, this.state.game.player);
    this.setState({board: current}, function(){
      let moves = this.state.game.board.join('').replace(/ /g,'0');
        if(moves.length === 9) { 
          this.setState({winner: 'draw'}); 
          return;
        } else {
          var topRow = this.state.game.board[0] + this.state.game.board[1] + this.state.game.board[2];
          if(topRow.match(/111|222/)){
            this.setState({winner: this.state.game.player});
            return;
            }
          var middleRow = this.state.game.board[3] + this.state.game.board[4] + this.state.game.board[5];
          if(middleRow.match(/111|222/)){
            this.setState({winner: this.state.game.player});
            return;
          }
          var bottomRow = this.state.game.board[6] + this.state.game.board[7] + this.state.game.board[8];
          if(bottomRow.match(/111|222/)){
            this.setState({winner: this.state.game.player});
            return;
          }
          var leftCol = this.state.game.board[0] + this.state.game.board[3] + this.state.game.board[6];
          if(leftCol.match(/111|222/)){
            this.setState({winner: this.state.player});
            return;
          }
          var middleCol = this.state.game.board[1] + this.state.game.board[4] + this.state.game.board[7];
          if(middleCol.match(/111|222/)){
            this.setState({winner: this.state.game.player});
            return;
          }
          var rightCol = this.state.game.board[2] + this.state.game.board[5] + this.state.game.board[8];
          if(rightCol.match(/111|222/)){
            this.setState({winner: this.state.game.player});
            return;
          }
          var leftDiag = this.state.game.board[0] + this.state.game.board[4] + this.state.game.board[8];
          if(leftDiag.match(/111|222/)){
            this.setState({winner: this.state.player});
            return;
          }
          var rightDiag = this.state.game.board[2] + this.state.game.board[4] + this.state.game.board[6];
          if(rightDiag.match(/111|222/)){
            this.setState({winner: this.state.game.player});
            return;
          }
          this.setState({player: (this.state.game.player === '1') ? '2' : '1' });
        }
      }, this);
}
