import React, { useRef, useState, useEffect } from "react"
import MusicDetails from "./MusicDetails"
import MusicControls from "./MusicControls"


const Music = () => {

	const audioElement = useRef(null)
	const [playing, isPlaying] = useState(false)
	const [track, setTrack] = useState(0)
	const [nextTrack, setNextTrack] = useState(track + 1)
	const [skipped, isSkipped] = useState(true)


	const songs = [
		{
			"title": "Plastic Love 竹内 まりや",
			"artist": "Mariya Takeuchi",
			"album": "VARIETY (1984)",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/nell-test/Mariya-Takeuchi-Plastic-Love-%E7%AB%B9%E5%86%85%E3%81%BE%E3%82%8A%E3%82%84.ogg?raw=true"
		},
		{
			"title": "Tank!",
			"artist": "The Seatbelts",
			"album": "Cowboy Bebop OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/nell-test/Cowboy-Bebop-Opening-Theme-Tank!.ogg?raw=true"
		}
	]


	useEffect(() => {
		(playing) ? (
			audioElement.current.play()
		) : (
			audioElement.current.pause()
		)
	})

	useEffect(()=>{
		setNextTrack(()=>{
		if (track + 1 > songs.length - 1 ) {
			return 0
		} else {
			return track + 1
		}
	})
	}, [track])


	const skip = () => {
		(skipped) ? (
				setTrack(() => {
					let thisTrack = track
					thisTrack++
						if (thisTrack > songs.length - 1) {
								thisTrack = 0
						}
						return thisTrack
				})
		 ) : (
				setTrack(() => {
					let thisTrack = track
					thisTrack--
						if (thisTrack < 0) {
								thisTrack = songs.length - 1
						}
						return thisTrack
				})
		)
	}



	return (
		<div className="music-player">
			<audio
				src={songs[track].src}
				ref={audioElement}
			></audio>
			<MusicDetails 
				song={songs[track]}
			/>
			<MusicControls
			playing={playing}
				isPlaying={isPlaying}
				skip={skip}
				isSkipped={isSkipped}
			/>
		</div>
	)
}

export default Music