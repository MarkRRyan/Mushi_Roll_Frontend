import React, { useRef, useState, useEffect } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";


const Player = (props) => {

	const audioElement = useRef(null)
	const [isPlaying, setIsPlaying] = useState(false)


	useEffect(() => {
		if (isPlaying) {
			audioElement.current.play()
		} else {
			audioElement.current.pause()
		}
	})

	const SkipSong = (forwards = true) => {
		if (forwards) {
				props.setCurrentSongIndex(() => {
						let temp = props.currentSongIndex;
						temp++;

						if (temp > props.songs.length - 1) {
								temp = 0;
						}

						return temp;
				});
		} else {
				props.setCurrentSongIndex(() => {
						let temp = props.currentSongIndex;
						temp--;

						if (temp < 0) {
								temp = props.songs.length - 1;
						}

						return temp;
				});
		}
}


	return (
		<div className="music-player">
			<audio
				crossOrigin="use-credentials"
				src={props.songs[props.currentSongIndex].src}
				ref={audioElement}
			></audio>
			<PlayerDetails 
				song={props.songs[props.currentSongIndex]}
			/>
			<PlayerControls
				isPlaying={isPlaying} 
				setIsPlaying={setIsPlaying}
				SkipSong={SkipSong}
			/>
		</div>
	)
}

export default Player