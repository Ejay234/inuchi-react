import './App.css';
import { Canvas } from '../Canvas/Canvas'
import { ClearCanva } from '../Canvas/ClearCanva.js';
import { useState, useEffect } from "react";
import "../Players/Player.css";
import Player from "../Players/Players";

function App() {

  const [songs] = useState([
    {
      "title": "Affection",
      "artist": "Jinsang",
      "img_src": "https://raw.githubusercontent.com/pramit-marattha/react-music-player-app/main/public/songs_images/Affection_Cover%20(front)_e.jpg",
      "src": "inuchi-react/public/songs/1-15 Affection.mp3"
    },
    {
      "title": "infinity",
      "artist": "Oatmello",
      "img_src": "https://raw.githubusercontent.com/pramit-marattha/react-music-player-app/main/public/songs_images/infinity_Cover%20(front)_e.jpg",
      "src": "inuchi-react/public/songs/1-01 infinity.mp3"
    },
    {
      "title": "Raindrops",
      "artist": "J'san Kupla",
      "img_src": "https://raw.githubusercontent.com/pramit-marattha/react-music-player-app/main/public/songs_images/Raindrops_Cover%20(front)_e.jpg",
      "src": "inuchi-react/public/songs/1-02 Raindrops.mp3"
    },
    {
      "title": "warm breeze",
      "artist": "chief.",
      "img_src": "https://raw.githubusercontent.com/pramit-marattha/react-music-player-app/main/public/songs_images/warm%20breeze_Cover%20(front)_e.jpg",
      "src": "inuchi-react/public/songs/1-03 warm breeze.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);


  return (
    <div className="App">
      <header className='logo-name'>
        <h1>INUCHI</h1>
      </header>
      <div className="player-container">
        <Player
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          nextSongIndex={nextSongIndex}
          songs={songs}
        />
      </div>
      <div className='canva-container'>
        <div>         Draw        </div>
      </div>
      <Canvas />
      <div className='canva-setting'>
        <div className='canva-sets'>
          <ClearCanva />
        </div>
      </div>
    </div >
  );
}

export default App;
