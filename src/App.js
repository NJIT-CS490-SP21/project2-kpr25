import { Win } from './Winner';
import { useState, useEffect, useRef  } from 'react';
import Board from './Board';
import {ListItem} from './ListItem.js';
import {Leaderboard} from './Leaderboard';
import io from 'socket.io-client';

const socket = io();

function App() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [NextX, setNextMove] = useState(true);
    const winner = Win(board);
    const [messages, setMessages] = useState([]); 
    const inputRef = useRef(null); 
    const joinRef = useRef(null); 
    const [isShown, setShown] = useState(true);
    const [LisShown, LsetShown] = useState(true);
    const [userList, setUserList] = useState([]);

    const handleClick = i => {
        const Copy = [...board];
        if (winner || Copy[i]) return;
        Copy[i] = NextX ? 'X' : 'O';
        setBoard(Copy);
        setNextMove(!NextX);
        socket.emit('game', { game: Copy, xNext: !NextX });
    };

    function TheRestartButton(){
        const Restart = setBoard;
        setBoard(Array(9).fill(null));
        socket.emit('Restart', { Start: Restart });
    }

   function onClickButton() {
    if (inputRef != null) {
      const login = inputRef.current.value;
      setMessages(prevMessages => [...prevMessages, login, "has logged in!"]);
      socket.emit('login', { message: login });
    }
  }
  
   function onClickJoin() {
    if (joinRef != null) {
      const username = joinRef.current.value;
      socket.emit('join', { 'user' : username });
    }
  }
    
    useEffect(() => {
    socket.on('login', (data) => {
      console.log('Logged In!');
      console.log(data);
      setMessages(prevMessages => [...prevMessages, data.message, "has logged in!"]);
    });
    
    socket.on('user_list', (data) => {
      console.log('User List has logged In!');
      console.log(data);
      setUserList(data.users);
    });
    
    socket.on('Restart', (data) => {
      console.log('Logged In!');
      console.log(data);
      setBoard(Array(9).fill(null));
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
    
    function Lshowhide() {
    LsetShown((prevShown) => {
      return !prevShown;
    });
    }

    return (
      <body class="body">
        <div>
            <div class="placement">
            {isShown === true ? (
            <div>
            <div>
            <div> Join the Leaderboard </div>
            <input class= "textbox" ref= {joinRef} type='text'/>
            <button class= "button" onClick={() => onClickJoin()}>Join</button>
            <div>*Login with the same name before clicking play!*</div>
            <input class= "textbox" ref= {inputRef} type='text'/>
            <button class= "button" onClick={() => onClickButton()}>Login</button>
            </div>
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
                <button class= "button" onClick={TheRestartButton}>Restart Game</button>
                <div><button class= "button" onClick={() => Lshowhide()}>Leaderboard </button></div>
                {LisShown === false ? (
                <div>
                <table class="Leaderboard">
                <thead>
                  <tr>
                    <th colspan="2">Leaderboard</th>
                  </tr>
                </thead>
                  <tr>
                    <th>Player</th>
                    <th>Score</th>
                  </tr>
                  <tbody>
                    {userList.map((user, index) => <Leaderboard key={index} name={user} />)}
                  </tbody>
                  </table>
                </div>
                ) : (
                ""
                )}
                </div>
                </div>
            ) : (
            ""
            )}
        </div>
        </body>
    );
}

export default App;