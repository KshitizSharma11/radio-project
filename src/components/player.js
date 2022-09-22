import React, { Component } from "react";
import song from "./starlight.mp3";

class Player extends Component {
    // Create state
    
    state = {
  
      // Get audio file in a variable
      audio: new Audio(song),
  
      // Set initial state of song
      isPlaying: false,
    };
  
    // Main function to handle both play and pause operations
    playPause = () => {
        var resume = document.getElementById('play-btn');

        var resumeOn =	resume.classList.contains("fa-play");
      // Get state of song
      let isPlaying = this.state.isPlaying;
  
      if (isPlaying ) {
        // Pause the song if it is playing
        resume.classList.remove("fa-pause");
		resume.classList.add("fa-play");
        this.state.audio.pause();
      } else {
        resume.classList.remove("fa-play");
		resume.classList.add("fa-pause");
        // Play the song if it is paused
        this.state.audio.play();
      }
  
      // Change the state of song
      this.setState({ isPlaying: !isPlaying });
    };
  
    render() {
      return (
        <div class="h-screen bg-red-100">
	
	<div class="flex justify-center pt-8 items-center h-30">
        <div >
          {/* Show state of song on website */}
          <p className="pt-4 text-center text-6xl font-bold mb-10 text-red-400">
            {this.state.isPlaying ? 
              "Radio is Playing" : 
              "Radio is Paused"}
          </p>
  
          {/* Button to call our main function */}
          <button class="w-36 h-36 mx-36 rounded-full bg-red-400 focus:outline-none" onClick={this.playPause}>
            <i class="fa fa-play fa-2x text-white" id="play-btn">

            </i>
    
          </button>
          </div>
        </div>
        </div>
      );
    }
  }
  
  export default Player;