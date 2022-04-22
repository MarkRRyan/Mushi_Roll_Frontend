import React from "react";

const MusicDetails = ({ song }) => {
	return (
		<div className="m-player-deets">
			<div className="m-player-track-info">
				<h3 className="track-title"> 🌸 [ {song.title} ]</h3>
				<h4 className="track-artist">{song.artist}</h4>
				<h4 className="track-album">{song.album}</h4>
			</div>
		</div>
	)
}

export default MusicDetails