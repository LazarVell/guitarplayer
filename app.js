// function that uses the keycode from select keys to play corresponding sounds.

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  // this function removes the on-click CSS effects.
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  } 

  // actual call of functions, using querySelectorAll to pass through all the divs.
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);

  // on-click functions:

  function coolGuitarRiff() {
    let audio = new Audio();
    audio.src="sound/cool-guitar-riff.wav";
    const button = document.querySelector(`.c-riff`);
    button.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  function guitarStrokeDownSlow() {
    let audio = new Audio();
    audio.src="sound/guitar-stroke-down-slow.wav";
    const button = document.querySelector(`.s-down`);
    button.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  function strokeUpSlow() {
    let audio = new Audio();
    audio.src="sound/guitar-stroke-up-slow.wav";
    const button = document.querySelector(`.s-up`);
    button.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  function happyGuitarChords() {
    let audio = new Audio();
    audio.src="sound/happy-guitar-chords.wav";
    const button = document.querySelector(`.riff`);
    button.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  function shortGuitarRiff() {
    let audio = new Audio();
    audio.src="sound/short-guitar-riff.wav";
    const button = document.querySelector(`.s-riff`);
    button.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  function shortGuitarStrum() {
    let audio = new Audio();
    audio.src="sound/short-guitar-strum.wav";
    const button = document.querySelector(`.strum`);
    button.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }