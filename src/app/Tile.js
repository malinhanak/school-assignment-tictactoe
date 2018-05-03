/*
The Tile component expects to be passed
- piece: a valid board value:
  - 0: an empty square
  - 1: plr1 has a piece here
  - 2: plr2 has a piece here
- callback: a function that it'll call when clicked
- line: a boolean, true if tile was part of winning line (STRETCH TASK)
The tile should render with the classes...
- tile: always
- plr1: if has a plr1 piece
- plr2: if has a plr2 piece
- line: if it was part of a winning line (STRETCH TASK)
*/

import React from 'react';

export const Tile = (props) => {
  let tileOptions;

    switch(props.value){
        case 1:
          tileOptions = { className: 'tile plr1', text: 'X' };
          break;
        case 2:
          tileOptions = { className: 'tile plr2', text: 'O' };
          break;
        default:
          tileOptions = { className: 'tile', text: '' };
          break;
    }
  return (
    <div className={props.win ? `${tileOptions.className} line` : tileOptions.className} onClick={() => props.makeyourmove()}>{tileOptions.text}</div>
  );
}