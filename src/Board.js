import React from 'react';
import Square from './TheSquares';

const Board = ({ squares, onClick }) => (
    <div class="Theboard">
        {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />))}
    </div>
)

export default Board;