import React, { Component } from 'react'

import Kick1 from '../sounds/NBKick1.wav'
import LostInTtheWaves from '../sounds/LostInTtheWaves.wav'
import Snare from '../sounds/Snare.wav'
import Hat from '../sounds/Hat.wav'
import Grid from '../sounds/Grid.wav'
import Crash from '../sounds/Crash.wav'

class TapMusicApp extends Component {

    state = {  }

    loadMethod () {
        window.addEventListener("load", () => {

            const sounds = document.querySelectorAll(".sound");
            const pads = document.querySelectorAll(".pads div");
            const visual = document.querySelector(".visual");
            const colors = [
                "#60d394",
                "#889c91",
                "#3b4c96",
                "#da6447",
                "#6309f5",
                "#9c1496"
            ]

            document.addEventListener('keydown', function(event) {
                console.log('Keydown event');

                    if (event.key === 's') {
                        sounds[0].currentTime = 0;
                        sounds[0].play();
                        console.log('keydown: s');
                        createBubbles(0);
                    }

                    if (event.key === 'd') {
                        sounds[1].currentTime = 0;
                        sounds[1].play();
                        console.log('keydown: d');
                        createBubbles(1);
                    }

                    if (event.key === 'f') {
                        sounds[2].currentTime = 0;
                        sounds[2].play();
                        console.log('keydown: f');
                        createBubbles(2);
                    }

                    if (event.key === 'g') {
                        sounds[3].currentTime = 0;
                        sounds[3].play();
                        console.log('keydown: g');
                        createBubbles(3);
                    }

                    if (event.key === 'h') {
                        sounds[4].currentTime = 0;
                        sounds[4].play();
                        console.log('keydown: h');
                        createBubbles(4);
                    }

                    if (event.key === 'j') {
                        sounds[5].currentTime = 0;
                        sounds[5].play();
                        console.log('keydown: j');
                        createBubbles(5);
                    }
                  })

            pads.forEach((pad, index) => {

                pad.addEventListener('click', function(){
                    sounds[index].currentTime = 0;
                    sounds[index].play();
                    console.log('clicked! '+ index);
                    createBubbles(index);
                })
            })

            const createBubbles = (index) => {
                const bubble = document.createElement("div");
                visual.appendChild(bubble);
                bubble.style.backgroundColor = colors[index];
                bubble.style.animation = " jump 1s ease"; 
            }

            console.log(sounds);
        }); 
    }

    render() {
        this.loadMethod();

        return (
            <div>    
                <div className="app">

                    <header>
                        <h1>Izzy's Music App</h1>
                        <p>Make music on Tap! </p>
                    
                    <div className="visual"><button>Stop sounds</button></div>
                    </header>

                    <div className="pads">
                        <div className="pad1">
                            <h1>s</h1>
                            <audio className="sound" src={LostInTtheWaves}></audio>
                        </div>
                        <div className="pad2">
                            <h1>d</h1>
                            <audio className="sound" src={Kick1}></audio>
                        </div>
                        <div className="pad3">
                            <h1>f</h1>
                            <audio className="sound" src={Snare}></audio>
                        </div>
                        <div className="pad4">
                            <h1>g</h1>
                            <audio className="sound" src={Hat}></audio>
                        </div>
                        <div className="pad5">
                            <h1>h</h1>
                            <audio className="sound" src={Grid}></audio>
                        </div>
                        <div className="pad6">
                            <h1>j</h1>
                            <audio className="sound" src={Crash}></audio>   
                        </div>
                    </div>

                </div>
            </div>
         );
    }
}
 
export default TapMusicApp;