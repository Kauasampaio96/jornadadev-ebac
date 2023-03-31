import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className="videofooter">
      <div className="videofooter-text">
        <h3>@Kauã Chaves</h3>
        <p>Descrição do Vídeo</p>

        <div className="videofooter-music">
          <MusicNoteIcon className="" />
          
          <div className="videofooter-music-title">
            <p>Titulo da Música</p>
          </div>
          <img className="videofooter-record" src="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/vinil.png?alt=media&token=d174bbec-b930-41e4-ab50-af1ea81bb7da" alt="Imagem de Vinil girando" />
        </div>
      </div>
      
    </div>
  );
}

export default VideoFooter;
