import React, {useEffect} from 'react'
import * as Tone from 'tone'

function App() {

  const synth = new Tone.PolySynth().toDestination();
  synth.set({
    oscillator : {
      type : 'sine'
    }
  });

  useEffect(() => {

    let shift = false

    function playNote(frequency) {
      synth.triggerAttack(frequency, Tone.now(), 0.5);
    }

    function stopNote(frequency) {
      synth.triggerRelease(frequency);
    }

    function handleKeyDown(e) {

      if(e.keyCode === 16)
        shift = true

      if (!e.repeat) {
        console.log( e.keyCode )

        let frequency = 220
        let multiplier = false

        switch(e.keyCode) {
          case 90 :
            // z
            multiplier = 1;
            multiplier = 1/1;
            break;
          case 88 :
            // x
            multiplier = 7/6;
            multiplier = 5/4;
            break;
          case 67 :
            // c
            multiplier = 4/3;
            multiplier = 4/3;
            break;
          case 86 : 
            // v
            multiplier = 3/2;
            multiplier = 3/2;
            break;
          case 66 :
            // b
            multiplier = 5/3;
            multiplier = 5/3;
            break;
          case 78 :
            // n
            multiplier = 11/6;   
            multiplier = 7/4;
            break;
          case 77 : 
            // m
            multiplier = 2;
            multiplier = 2;
            break;
          case 65 :
            // a
            multiplier = 1;
            multiplier = 7/6;
            break;
          case 83 : 
            // s
            multiplier = 1.125;
            multiplier = 6/5;
            break;
          case 68 :
            // d
            multiplier = 1.25;
            multiplier = 8/6
            break;
          case 70 :
            // f
            multiplier = 1.375;
            multiplier = 7/5;
            break;
          case 71 :
            // g 
            multiplier = 1.5;
            multiplier = 9/6;
            break;
          case 72 :
            // h
            multiplier = 1.625;
            multiplier = 8/5;
            break;
          case 74 :
            // j 
            multiplier = 1.75;
            multiplier = 10/6;
            break;
          case 75 :
            // k
            multiplier = 1.875;
            multiplier = 9/5;
            break;
          case 76 :
            // l
            multiplier = 11/6;
            break;
        }

        if( shift && multiplier ) {
          multiplier += 1;
          multiplier = multiplier / 2;
        }

        if( multiplier )
          playNote(frequency * multiplier)
      }
    }

    function handleKeyUp(e) {

      if(e.keyCode === 16)
        shift = false

      let frequency = 220
      let multiplier = false
      switch(e.keyCode) {
        case 90 :
          // z
          multiplier = 1;
          multiplier = 1/1;
          break;
        case 88 :
          // x
          multiplier = 7/6;
          multiplier = 5/4;
          break;
        case 67 :
          // c
          multiplier = 4/3;
          multiplier = 4/3;
          break;
        case 86 : 
          // v
          multiplier = 3/2;
          multiplier = 3/2;
          break;
        case 66 :
          // b
          multiplier = 5/3;
          multiplier = 5/3;
          break;
        case 78 :
          // n
          multiplier = 11/6;   
          multiplier = 7/4;
          break;
        case 77 : 
          // m
          multiplier = 2;
          multiplier = 2;
          break;
        case 65 :
          // a
          multiplier = 1;
          multiplier = 7/6;
          break;
        case 83 : 
          // s
          multiplier = 1.125;
          multiplier = 6/5;
          break;
        case 68 :
          // d
          multiplier = 1.25;
          multiplier = 8/6
          break;
        case 70 :
          // f
          multiplier = 1.375;
          multiplier = 7/5;
          break;
        case 71 :
          // g 
          multiplier = 1.5;
          multiplier = 9/6;
          break;
        case 72 :
          // h
          multiplier = 1.625;
          multiplier = 8/5;
          break;
        case 74 :
          // j 
          multiplier = 1.75;
          multiplier = 10/6;
          break;
        case 75 :
          // k
          multiplier = 1.875;
          multiplier = 9/5;
          break;
        case 76 :
          // l
          multiplier = 2;
          multiplier = 11/6;
          break;
      }

      if( shift && multiplier ) {
        multiplier += 1;
        multiplier = multiplier / 2;
      }

      if( multiplier )
        stopNote(frequency * multiplier)
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
