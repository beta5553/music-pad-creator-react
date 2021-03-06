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

                //Mapping keys to idexes to identify each drum pad.
                
                const keyMap =  [{"w": "0"}, {"ew": "1"}];
                
                // const keyMap = {
                //     "w": "0", "e": "1", "r": "3", "t": "4", "y": "5", "u": "6", "i": "7",
                //     "s": "8", "d": "9", "f": "10", "g": "11", "h": "12", "j": "13", "k": "14",
                //     "z": "15", "x": "16", "c": "17", "v": "18", "b": "19", "n": "20", "m": "21"
                // }

                // console.log('Keydown event' + keyMap[1].w);
                // console.log('keyMap[event.key]): ' + keyMap[event.key]);


                    switch (event.key) {
                        case 's': 
                            sounds[keyMap[event.key]].currentTime=0;
                            sounds[keyMap[event.key]].play();
                            break;
                        
                        default: 
                    }

                    
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
                let newContent;                 

                switch(index) {
                    case 0: newContent = document.createTextNode("S"); break;
                    case 1: newContent = document.createTextNode("D"); break;
                    case 2: newContent = document.createTextNode("F"); break;
                    case 3: newContent = document.createTextNode("G"); break;
                    case 4: newContent = document.createTextNode("H"); break;
                    case 5: newContent = document.createTextNode("J"); break;
                    default: break;
                  } 

                bubble.appendChild(newContent); //---
                visual.appendChild(bubble);
                bubble.style.backgroundColor = colors[index];
                bubble.style.animation = " jump 10s ease"; 
            }

            console.log(sounds);
        }); 
    }

    stopSounds(e) {
        console.log('stop sounds');
        window.location.reload();
    }

    render() {
        this.loadMethod();

        return (
            <div>    
                <div className="app">

                    <header>
                        <h1>Izzy's Music App</h1>
                        <p>Make music on Tap! </p>
                    
                    <div className="visual"><button onClick={this.stopSounds}>Stop Music</button></div>
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
                        <div className="pad7">
                            <h1>j</h1>
                            <audio className="sound" src={Crash}></audio>   
                        </div>
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
                        <div className="pad7">
                            <h1>j</h1>
                            <audio className="sound" src={Crash}></audio>   
                        </div>
                        <div className="pad8">
                            <h1>j</h1>
                            <audio className="sound" src={Crash}></audio>   
                        </div>
                        <div className="pad9">
                            <h1>j</h1>
                            <audio className="sound" src={Crash}></audio>   
                        </div>
                        <div className="pad10">
                            <h1>j</h1>
                            <audio className="sound" src={Crash}></audio>   
                        </div>
                        <div className="pad11">
                            <h1>j</h1>
                            <audio className="sound" src={Crash}></audio>   
                        </div>
                        <div className="pad12">
                            <h1>j</h1>
                            <audio className="sound" src={Crash}></audio>   
                        </div>
                        <div className="pad13">
                            <h1>j</h1>
                            <audio className="sound" src={Crash}></audio>   
                        </div>
                        <div className="pad14">
                            <h1>j</h1>
                            <audio className="sound" src={Crash}></audio>   
                        </div>
                        <div className="pad15">
                            <h1>j</h1>
                            <audio className="sound" src={Crash}></audio>   
                        </div>
                        <div className="pad16">
                            <h1>j</h1>
                            <audio className="sound" src={Crash}></audio>   
                        </div>
                        <div className="pad17">
                            <h1>j</h1>
                            <audio className="sound" src={Crash}></audio>   
                        </div>
                        <div className="pad18">
                            <h1>j</h1>
                            <audio className="sound" src={Crash}></audio>   
                        </div>
                        <div className="pad19">
                            <h1>j</h1>
                            <audio className="sound" src={Crash}></audio>   
                        </div>
                        <div className="pad20">
                            <h1>j</h1>
                            <audio className="sound" src={Crash}></audio>   
                        </div>
                        <div className="pad21">
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