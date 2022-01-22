# guitarplayer

One of my more ambitious beginner projects, I wanted to create a guitar player that plays both on a PC with a keyboard and a phone, in absence of one.

For the keyboard, the keys have a KBD parameter inside of them that is used to pass the numerical value of the corresponding key once the key is pressed. The songs also have a data-key value that corresponds to the numerical value that every key holds, and is unique to each key. (ie. the value for Q is 81).
  
Then, an event trigger is used to play the audio file.
  
  The keyboard standard used is QWERTY. For a QWERTZ keyboard, the user would need to use the Y key that is probably on the bottom left of the keyboard, or change the layout to QWERTY.

  For Mobile, the buttons work primarily on click, as an absence of a keyboard is assumed.
  
  Responsive design was added to make the buttons smaller and fit all of them on a smaller viewport.
