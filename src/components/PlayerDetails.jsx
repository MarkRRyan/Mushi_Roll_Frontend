import React from "react";

const PlayerDetails = (props) => {
	return (
		<div className="m-player-deets">
			<div className="m-player-track-info">
				<h3 className="track-title">{props.song.title}</h3>
				<h4 className="track-artist">{props.song.artist}</h4>
			</div>
		</div>
	)
}

export default PlayerDetails