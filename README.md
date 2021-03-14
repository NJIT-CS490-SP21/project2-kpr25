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
29. In my Board.js file, I add an event listener oof socket.on in useEffect for my click event to be emitted by server and I set that up with my name game.
30. So now, whenever the user clicks a button on the board in one broweser it would also be clicked on the other broweser.
31. I copied the same exact steps for my socket to pass my login button so both brosers can see who has logged in.
32. I also coplied the same exact steps for my socket to pass my restart button so both browesers can see if one person restarted the game or not.
33. After you have the game setup now it is time to set up the database. 
34. We need to add a leaderboard for the who if the person joins that name is set up in our database.
35. Before we create the database we need to create a our new heroku app and we do that by running heroku create.
36. After that we need create a new remote DB for our heroku add so we run heroku addons:create heroku-postgresql:hobby-dev (If that doesn't work, add a -a {your-app-name} to the end of the command, no braces).
37. After that we run Heroku config, then make a .env file.
38. In the .env file you add DATABASE_URL='your heroku prostgresql here' and save it.
39.  After we set up and created out database and heroku we need to store data in the databae.
40.  So we make a models file and add the id, username and the email in there and set that file up.
41.  Then, you need socket.io emit on to your app.py file so that all the data is actully getting stored in your database.
42.  You emit those changes into the connot and the join function for it to appear in the terminal, but we need to appear those names in the UI our app.
43.  So we go on to our app.js file, make a new const for userList from app.py, make a new button for onClickJoin and then emit those changes in the UseEffect for both browers to communite with eachother.
44.  We have nothing showing up in the UI after that we go on the bottom to our return statments and then return the textbox and the button.
45.  After we have that set up, we have to set up the leaderboard 
46.  So, I made a new component called leaderboard.js and added a leader board using this helpful link that professor provided: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table.
47.  After I got the leaderboard to set up props for my list of users who join to appear on the leaderboard. 
48.  Now, everyone person who joins the game will be stored in my leaderboard.
49.  If the same person joins again, that person will be still stored in the database.
50.  Every person will now have a chance to compete in the game.
51.  I also set up so that when they join they automaticlly start with the score of 100.
52.  After all of that was set up I has to odc make my webpage to look pretty instead of plane white.
53.  So I added some really cool features in my App.css file to change the colors and the borders for my leaderboard for my page.
54.  After that i had to deploy my app outside of cloud 9 so I used Heroku to set that up. 
55.  So, I npm install -g heroku on my cloud 9 and add my Procfile and the requirements.txt file to create the deployment.
56.  After I instealled heroku ran the app.
57.  Here is my link to my Heroku: https://guarded-ravine-16450.herokuapp.com/
58.  In the end, I created this readme file other people to follow along on how I did this project.

Here are my known problems and how I would address them if I had more time:
1. I had trouble getting the leader setup with the all different names html to set that up but I would do more examples on my own to help me get used to it.
2. I could not figure out how to update the leaderboard once someone wins the game but I would have maybe went to office hours for help for that.
3. I wanted to move my leader on the right hand side but if I had more time I would have went only for resources to get that help.
4. I could not figure out a way to rank them from highest to lowest but if I had more time, I would found more online resouces to help me out.
5. I might have implemented a feature for a person to play with the worlds best players from different tik tac toe website API.
6. I might have implemented a feature where if a person wins, the person is directly put into another room to play a computer.

Here are my technical issues and how you solved it: 
1. I had a lot of trouble to get my points to appear in the same row as my scores but this website helpting me a lot: https://www.w3schools.com/html/html_tables.asp.
2. I also had trouble where I got import errors, but from a slack from my classmate, it helped me resolve that issue.
3. I had trouble starting up main branch, but AJ one my classmate wrote a slack post on how to start the main branch: https://cs490spring21.slack.com/archives/C01N2QP4ZSS/p1614627355385400
4. I had trouble getting out of my git pull command so this stackoverflow website helped me get out of it: https://stackoverflow.com/questions/19085807/please-enter-a-commit-message-to-explain-why-this-merge-is-necessary-especially
5. I had trouble setting up the database at first and was very lost but Lecture 12 on how doing database work with flask and python helped me a lot.
6. I also forgot on how to set up the .env file on how to not show it on github so Lecture 5, demo 3 helped me a lot on how to hide my DATABASE_URL.
