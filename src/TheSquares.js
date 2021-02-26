import React from 'react';
import { inside } from './App.css';

const Square = ({ value, onClick }) => (
    <button class="inside"
        onClick={onClick}>
        {value}
    </button>
);

export default Square;