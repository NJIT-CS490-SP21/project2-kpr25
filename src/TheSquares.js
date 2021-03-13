import React from 'react';

const Square = ({ value, onClick }) => (
  <button class="inside" onClick={onClick}>
    {value}
  </button>
);

export default Square;
