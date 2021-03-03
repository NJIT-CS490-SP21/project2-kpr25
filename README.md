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
33. After all of that was set up I has to odc make my webpage to look pretty instead of plane white.
34. So I added some really cool features in my App.css file to change the colors, borders, textboxs, and buttons colors for my page.
35. I even added a really nice font for when the user logs into the page.
36.  After that i had to deploy my app outside of cloud 9 so I used Heroku to set that up. 
37.  So, I npm install -g heroku on my cloud 9 and add my Procfile and the requirements.txt file to create the deployment.
38.  In the end, I created this readme file other people to follow how I did this project.

Here are some known problems that I ran across on working this project:
1. I had a lot of trouble using react and how react works different from other languages, but I need to get more used to that.
2. I was not able to get where the spectators can login and would not be able to play the game.
3. I need to get more used to socket because setting it up was tough was for me.
4. I might implment a feature where the when the game finished, there would be line that goes across the baord on how the person won.
5. I might also implment a feature where if a person won, there would be big trophy that appears on the page showing the person won.
6. I might also implement a feature where there would two board working at the same time for users to play the game.
7. Could not deploy app on Heroku, asked TA Kristianna and professor for help too but finished everything else on the project.

Here are some technical issues that I ran across working on this project:
1. I socket.io was not working so I went office hours and TA Kristianna was able to help me out.
2. My Heroku was not deploying properly so I checked in slack and other classmates of mine were having the same problem but I saw how they resolved it and so did I.
3. I also ran into a problem where I could not change my origin name so I went on google and https://xenovation.com/blog/source-control-management/git/how-to-change-remote-git-repository helped me out.
4. I again ran into the issue where I did not the different types of colors in CSS so I went to HW4 and this link https://material-ui.com/customization/color/#2014-material-design-color-palettes provided by the professor helped me out on how to change my colors. 
5. I wanted to change borders for my board but did not know how but https://www.w3schools.com/css/css_border.asp helped me on how to change them.
6. I also ran into a issue where my baord was not changing to X but when I saw slack, I saw some of my classmates where having the same issue but professor broke up the steps and then I got it. 
7. I also did not know how to show and hide the board but in the lecture of Thursday, professor showed it to us and I was able to figure it out.
8. I ran into an issue where my buildpacks was not working when creating my app onto heroku but when I asked my slack, one of classmates helped me out and I got that function to work sucessfully.
