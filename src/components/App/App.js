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
      "src": "https://sfo3.digitaloceanspaces.com/inuchi-music/public_songs_Affection.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=6XPF3WPXJY6M25MRJPSZ%2F20220619%2Fsfo3%2Fs3%2Faws4_request&X-Amz-Date=20220619T100945Z&X-Amz-Expires=259200&X-Amz-SignedHeaders=host&X-Amz-Signature=16cc879cbf3843f17b1847d3aadb2ea4d246bafd6d729c71bdad7918197e412f"
    },
    {
      "title": "infinity",
      "artist": "Oatmello",
      "img_src": "https://raw.githubusercontent.com/pramit-marattha/react-music-player-app/main/public/songs_images/infinity_Cover%20(front)_e.jpg",
      "src": "https://sfo3.digitaloceanspaces.com/inuchi-music/public_songs_infinity.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=6XPF3WPXJY6M25MRJPSZ%2F20220619%2Fsfo3%2Fs3%2Faws4_request&X-Amz-Date=20220619T101030Z&X-Amz-Expires=259200&X-Amz-SignedHeaders=host&X-Amz-Signature=4827aaf36e1d391bfee73deefa7394ee1a7b12275cdbd912909ec369e4869eab"
    },
    {
      "title": "Raindrops",
      "artist": "J'san Kupla",
      "img_src": "https://raw.githubusercontent.com/pramit-marattha/react-music-player-app/main/public/songs_images/Raindrops_Cover%20(front)_e.jpg",
      "src": "https://sfo3.digitaloceanspaces.com/inuchi-music/Raindrops.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=6XPF3WPXJY6M25MRJPSZ%2F20220619%2Fsfo3%2Fs3%2Faws4_request&X-Amz-Date=20220619T101054Z&X-Amz-Expires=259200&X-Amz-SignedHeaders=host&X-Amz-Signature=2fe8598df652a7de87078e776634856dbcf1e30628690c43e6105c31cadfe002"
    },
    {
      "title": "warm breeze",
      "artist": "chief.",
      "img_src": "https://raw.githubusercontent.com/pramit-marattha/react-music-player-app/main/public/songs_images/warm%20breeze_Cover%20(front)_e.jpg",
      "src": "https://sfo3.digitaloceanspaces.com/inuchi-music/warm_breeze.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=6XPF3WPXJY6M25MRJPSZ%2F20220619%2Fsfo3%2Fs3%2Faws4_request&X-Amz-Date=20220619T101110Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=841e6a755c98903a96edb1418a6698f42017a7e05b5843fd72c2cb559ce30c18"
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
  }, [currentSongIndex, songs.length]);


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
      <div classname="inuchi">
        <img classname="inuchi" src='https://sfo3.digitaloceanspaces.com/inuchi-music/inuchi.ico?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=6XPF3WPXJY6M25MRJPSZ%2F20220619%2Fsfo3%2Fs3%2Faws4_request&X-Amz-Date=20220619T103250Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=55366957f43dcb233ca22be04d0a3daa83155ff9e41d457d5021fbcf3bad16a5' />
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
