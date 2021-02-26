import { Win } from './Winner';
import { useState, useEffect, useRef  } from 'react';
import Board from './Board';
import {ListItem} from './ListItem.js';
import io from 'socket.io-client';

const socket = io();

function App() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [NextX, setNextMove] = useState(true);
    const winner = Win(board);
    const [messages, setMessages] = useState([]); 
    const inputRef = useRef(null); 
    const [isShown, setShown] = useState(true);


    const handleClick = i => {
        const Copy = [...board];
        if (winner || Copy[i]) return;
        Copy[i] = NextX ? 'X' : 'O';
        setBoard(Copy);
        setNextMove(!NextX);
        socket.emit('game', { game: Copy, xNext: !NextX });
    };

    function TheButton(){
        const Restart = setBoard;
        setBoard(Array(9).fill(null))
        socket.emit('Restart', { Start: Restart });
    }

   function onClickButton() {
    if (inputRef != null) {
      const login = inputRef.current.value;
      setMessages(prevMessages => [...prevMessages, login, "has logged in!"]);
      socket.emit('login', { message: login });
    }
  }
    
    useEffect(() => {
    socket.on('login', (data) => {
      console.log('Logged In!');
      console.log(data);
      setMessages(prevMessages => [...prevMessages, data.message, "has logged in!"]);
    });
    
    socket.on('Restart', (data) => {
      console.log('Logged In!');
      console.log(data);
      setBoard(Array(9).fill(null))
    });
      
    socket.on('game', (data) => {
      console.log('Game has started!');
      console.log(data);
      setBoard(data.game);
      setNextMove(data.xNext);
          
      });
    }, []);
    
    function onShowHide() {
    setShown((prevShown) => {
      return !prevShown;
    });
    }

    return (
      <body class="body">
        <div>
            <div class="placement">
            {isShown === true ? (
            <div>
            <div>*Login before clicking play!*</div>
            <input class= "textbox" ref= {inputRef} type='text'/>
            <button class= "button" onClick={() => onClickButton()}>Login</button>
            </div>
            ) : (
            ""
            )}
            <div>
            {messages.map((item, index) => <ListItem key={index} name={item} />)}
            </div>  
            <div><button class= "button" onClick={() => onShowHide()}>Play </button></div>
            </div>
            {isShown === false ? (
            <div>
            <h1 class="placement">Play Tic Tac Toe: </h1>
            <Board squares={board} onClick={handleClick} />
            <div class="placement">
                <p>
                {winner ? 'Winner is: ' + winner : 
                'The Next Player: ' + (NextX ? 'X' : 'O')}
                </p>
                <button class= "button" onClick={TheButton}>Restart Game</button>
                </div>
                </div>
            ) : (
            ""
            )}
        </div>
        </body>
    )
}

export default App;
