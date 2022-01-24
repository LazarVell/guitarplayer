# guitarplayer

<h2><b>Objective</b></h2> - One of my more ambitious beginner projects, I wanted to create a guitar player that plays both on a PC with a keyboard and a phone.
  
The keyboard standard used is QWERTY. For a QWERTZ keyboard, the user would need to use the Y key that is probably on the bottom left of the keyboard, or change the layout to QWERTY.

  For Mobile, the buttons work primarily on click, as an absence of a keyboard is assumed.
  
<h2><b>How I did it</b></h2> - For the keyboard, the keys have a KBD parameter inside of them that is used to pass the numerical value of the corresponding key once the key is pressed. The songs also have a data-key value that corresponds to the numerical value that every key holds, and is unique to each key. (ie. the value for Q is 81). 

Then, an event trigger is used to play the audio file.

For Mobile, the buttons work primarily on click, as an absence of a keyboard is assumed.

<h2><b>Greatest challenge</b></h2> - Part of this project was completed with the help of Wes Bos tutorial. However, I wanted to expand the project to work on mobile phones as well. Getting the listener script to work for the phones proved to ultimately be impossible for me, after hours of trying. I believe it was because the function relies on getting the input from the keyboard, specifically the data values. Therefore I added classes to the buttons and made functions to play the corresponding sounds when pressed on a phone screen.

<h2><b>What I learned</b></h2> - While I spent a considerable time without getting a solution the way I envisioned it, I believe it was still well spent, as I learned many other things on the way. I believe that, as an intern or a junior developer, I should do my best to research the obstacles I come across and try to find a solution on my own. Should that not be possible, only then should I talk with my seniors, and have well formulated questions ready - what is the problem, how I tried to solve the problem, and any other relevant information.

  Responsive design was added to make the buttons smaller and fit all of them on a smaller viewport.
