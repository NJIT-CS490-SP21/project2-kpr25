import React from 'react';
import Square from './TheSquares';
import { Theboard } from './App.css'

const Board = ({ squares, onClick }) => (
    <div class="Theboard">
        {squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
    </div>
)

export default Board;
