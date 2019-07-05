# GifTastic
Reggie's gifs of sports teams

Purpose: 
Use the GIPHY API to make a dynamic web page that populates with gifs of my choice.
I call the GIPHY API and use JavaScript and jQuery to change the HTML of your site.

Instructions give to me:
1.) create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.
2.) Chose ant theme (I chose sports teams). (some team names brought back some provacative gifs) (LOL!). These teams are not in the array.
3.) In the app I am to take the topics in this array and create buttons in your HTML.

Visit the site at: https://rthorpesr.github.io/GifTastic/

How it the Sports GifTastic works.
1.) a call is made to the API for gifs from all the sport teams pre-loaded in my array (Hard-coded) in the program.
2.) If you click on a button with a team name, you will see a series of gifs that are of the team button selected.
3.) The gifs appear in a "STILL" state, but to animate the gif, click on it. The state changes to "Animate", clicking 
    on it again returns to gif back to "STILL".
4.) If the team you want to see gifs for teams who do not have a button, use the input box and click "add team". 
    Immediately, your team's button is added to the end of the "fard-coded" array and is displayed on the screen with 
    the other buttons and if clicked, gifs will appear cooreponding to the team you added.
    
 5.) This app was made responsive for cell-phones and small tablets.
   

Problem:
1.) Had to select a subject for this project where you would be able to find a free APi site with gifs that fit the subject decided.
2.) Had to sign up for an account on multiple API sites before finding the gifs needed. Each APi site produced a free Key that could be used in my code to access the APIs on it site. 
3.) I had to limit the amount of API returning to 5.
4.) I had to create a new button on the screen each time an sports team was selected that I had not selected. 
5. The retuned gifs had to be able to go from stil to animate and back to still by clicking on them.

Solved:
1.) using Ajax in my Javascript code, on the get statement I set a limit of 5 APIs to be returned for each team selected.
2.) I built an array of sports teams. If a team was selected that was not in the array, I added it to the array and created a button on the screen immediately for that team. The array had to be searched for that team name each time a user entered the name in the search. If I had not done this, duplicate team name buttons would be created.
3.) to make the gifs go from still to animate and back to still, I created an on-click event that altered the state of the gif. If the gif was in still mode, it was switched to animate so it came move, and if it was in the animate state, on click it was switched to still.
