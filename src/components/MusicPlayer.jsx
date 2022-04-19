import React, { useRef, useState, useEffect } from "react";
import { useState, useEffect } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";


const [songs, setSongs] = useState([
	{
		"title": "Plastic Love 竹内 まりや",
		"artist": "Mariya Takeuchi",
		"album": "VARIETY (1984)",
		"src": "public/songs/Mariya-Takeuchi-Plastic-Love-竹内 まりや.mp3"
	},
	{
		"title": "Tank!",
		"artist": "The Seatbelts",
		"album": "Cowboy Bebop OP 1",
		"src": "public/songs/Cowboy-Bebop-Opening-Theme-Tank!.mp3"
	}
])

const MusicPlayer = () => {

	const audioElement = useRef(null)
	const [playing, isPlaying] = useState(false)

	const [currentSongIndex, setCurrentSongIndex] = useState(0)
	const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1)

	useEffect(() => {
		if (playing) {
			audioElement.current.play()
		} else {
			audioElement.current.pause()
		}
	})

	useEffect(() => {
		setNextSongIndex(()=>{
			if (currentSongIndex + 1 > songs.length -1) {
				return 0
			} else {
				return currentSongIndex + 1
			}
		})
	})

	const Skip = (forwards = true) => {
		if (forwards) {
			setCurrentSongIndex(() => {
				let temp = currentSongIndex
				temp++

				if (temp > songs.length - 1) {
					temp = 0
				}

				return temp
			})
		} else {
			setCurrentSongIndex(() => {
				let temp = currentSongIndex
				temp --

				if (temp < 0) {
					temp = songs.length - 1
				}

				return temp
			})
		}
	}


	return (
		<div className="music-player">
			<audio
				src={songs[currentSongIndex].src}
				ref={audioElement}
			></audio>
			<PlayerDetails 
				song={songs[currentSongIndex]}
			/>
			<PlayerControls
				playing={playing} 
				isPlaying={isPlaying}
				SkipSong={SkipSong}
			/>
		</div>
	)
}

export default MusicPlayer