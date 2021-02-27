Here are my step by step process on how I did this project:

1. First, I git cloned the react-starter folder from my professor into my could9.
2. Then, I started building the the app.js file to get my app running into react.
3. After that, I satarted builind by board in my Board.js file to set up the layout of my board.
4. With setting up the board, I only has X's and O's that I hardcoded into the Board.
5. So I need to get the click function going so I used useState to set that up.
6. After that I needed to set the handleClick function going on the each board so I set that up with my X's and O's.
7. Then, I passed the handleClick on the returned it on the bottom to get it to my webpage.
8. I also needed to set up squares component to get sqaure running so I set that up on my TheSquares.js file.
9. After that was done, I realized that it is only clicking X's and O's and there is no result to the game.
10. So from the resources that Professor gave us I used the calculateWinner method to set up the winner of my Tic Tac Toe game.
11. I did that method into my Winner.js file to get the winner.
12. After that, my game was all set and running and we got the winner between each game.
13. Then, I needed to set up on the bottom so my app can tell the players whose turn is next with the NextX function.
14. After that I needed to set up the button when the user clicks it, it would restart the game.
15. So in my app.js file, I set that button with the TheButton funtion and restured it on my webpage.
16. After that was done, I needed to set up a funtion where if a user comes they have to login. 
17. So I set up the onClickButton function to for the user to input the username and then click login to login into the app.
18. So I set that up from onClickButton and also the textbox for the user to login.
19. I also set up the .map function from my LisItem component so that it would return the username has logged in.
20. I retured all the buttons and the textbox so that my webpage can see it.
21. After that, I also set a feature where it would hide the board so the user does not see it before logging in.
22. So I set up a function onShowHide and then returned it so that the user will not see the board before logging in.
23. So After the user logs in, the user will click the button play which which is what I set up to show and hide the board.
24. After the user clicks plays the user has offcially logged in to the app and can play tik tac toe.
25. Now, I need to set up my socket so that that browers can communicate with eachother from different browesers. 
26. So, in App.js file, I emitted an event called game to the server. I Include data on which cell was clicked on my board.
27. After that, in my app.py, I added a new event listener called game that prints out whatever data was passed in the event.
28. After that I updated the  event listenerso that when the server actually emits an event to the rest of the clients with data of the cell that was clicked.
29. In my Board.js file, II add an event listener oof socket.on in useEffect for my click event to be emitted by server and I set that up with my name game.
30. So now, whenever the user clicks a button on the board in one broweser it would also be clicked on the other broweser.
31. I copied the same exact steps for my socket to pass my login button so both brosers can see who has logged in.
32. I also coplied the same exact steps for my socket to pass my restart button so both browesers can see if one person restarted the game or not.
33. After all of that was set up I has to odc make my webpage to look pretty instead of plane white.
34. So I added some really cool features in my App.css file to change the colors, borders, textboxs, and buttons colors for my page.
35. I even added a really nice font for when the user logs into the page.
36.  After that i had to deploy my app outside of cloud 9 so I used Heroku to set that ip. 
37.  So, I npm install 0g heroku on my cloud 9 and add my Procfile and the requirements.txt file to create the deployment.
38.  Aftter that I deployed my app on to heroku:
39.  I did this so now other users can play my game outside of cloud now.
40.  In the end, I created this readme file other people to follow how I did this project.

Here are some known problems that I ran acorss on working this project:


Here are some technical issues I ran across working on this project:

