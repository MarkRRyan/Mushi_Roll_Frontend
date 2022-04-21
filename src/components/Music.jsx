import React, { useRef, useState, useEffect } from "react"
import MusicDetails from "./MusicDetails"
import MusicControls from "./MusicControls"


const Music = () => {

	const audioElement = useRef(null)
	const [playing, isPlaying] = useState(false)
	const [track, setTrack] = useState(0)
	const [nextTrack, setNextTrack] = useState(track + 1)
	const [skipped, isSkipped] = useState(true)
	const [volume, setVolume] = useState(1)


	const songs = [
		{
			"title": "Plastic Love 竹内 まりや",
			"artist": "Mariya Takeuchi",
			"album": "VARIETY (1984)",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Plastic-Love-%E7%AB%B9%E5%86%85%20%E3%81%BE%E3%82%8A%E3%82%84-Mariya-Takeuchi.mp3?raw=true"
		},
		{
			"title": "Tank!",
			"artist": "The Seatbelts",
			"album": "Cowboy Bebop OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Tank-Cowboy-Bebop-OP.mp3?raw=true"
		},
		{
			"title": "*Asterisk",
			"artist": "Orange Range",
			"album": "Bleach OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Asterisk-Bleach-OP.mp3?raw=true"
		},
		{
			"title": "Change The World",
			"artist": "V6",
			"album": "Inuyasha OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Change-the-World-Inuyasha-OP.mp3?raw=true"
		},
		{
			"title": "Chouzetsu Dynamic!",
			"artist": "Kazuya Yoshii",
			"album": "Dragon Ball Super OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Chouzetsu-Dynamic!-DBSuper-OP.mp3?raw=true"
		},
		{
			"title": "Flyers",
			"artist": "BRADIO",
			"album": "Death Parade OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Flyers-Death-Parade-OP.mp3?raw=true"
		},
		{
			"title": "Gurenge",
			"artist": "LiSA",
			"album": "Demon Slayer OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Gurenge-Demon-Slayer-OP.mp3?raw=true"
		},
		{
			"title": "Database",
			"artist": "Man with a Mission",
			"album": "Log Horizon OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Database-Log-Horizon-OP.mp3?raw=true"
		},
		{
			"title": "Flyday Chinatown",
			"artist": "YASUHA",
			"album": "Transit (1981)",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Flyday-Chinatown-YASUHA.mp3?raw=true"
		},
		{
			"title": "Hey Kids!",
			"artist": "The Oral Cigarettes",
			"album": "Noragami OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Hey-Kids-Noragami-OP.mp3?raw=true"
		},
		{
			"title": "Kaikai Kitan",
			"artist": "Eve",
			"album": "Jujutsu Kaisen OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Kaikai-Kitan-Jujutsu-Kaisen-OP.mp3?raw=true"
		},
		{
			"title": "Kiba no Uta",
			"artist": "Ultra Tower",
			"album": "Shokugeki no Soma OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Kibo-no-Uta-Food-Wars-OP.mp3?raw=true"
		},
		{
			"title": "Love Dramatic",
			"artist": "Masayuki Suzuki",
			"album": "Kaguya-sama: Love is War OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Love-is-War-Kaguya-sama-OP.mp3?raw=true"
		},
		{
			"title": "Odd Future",
			"artist": "UVERworld",
			"album": "Boku no Hero Academia OP 3",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Odd-Future-Hero-Academia-OP.mp3?raw=true"
		},
		{
			"title": "Moonlight Densetsu",
			"artist": "DALI",
			"album": "Sailor Moon",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Moonlight-Densetsu-Sailor-Moon-OP.mp3?raw=true"
		},
		{
			"title": "Rewrite",
			"artist": "Asian Kung-fu Generation",
			"album": "Fullmetal Alchemist OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Rewrite-FMA-OP.mp3?raw=true"
		},
		{
			"title": "Ride on Shooting Star",
			"artist": "The Pillows",
			"album": "FLCL OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/RIde-on-Shooting-Star-FLCL-OP.mp3?raw=true"
		},
		{
			"title": "Ride on Time",
			"artist": "Tatsuro Yamashita",
			"album": "Dreamland (1990)",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Ride-on-Time-%E5%B1%B1%E4%B8%8B%E9%81%94%E9%83%8E-Tatsuro%20Yamashita.mp3?raw=true"
		},
		{
			"title": "Smile Bomb",
			"artist": "AmaLee",
			"album": "Yu Yu Hakusho OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Smile-Bomb-Yu-Yu-Hakusho-OP.mp3?raw=true"
		},
		{
			"title": "Uninstall",
			"artist": "Chiaki Ishikawa",
			"album": "Bokurano OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Uninstall-Bokurano-OP.mp3?raw=true"
		}
	]


	useEffect(() => {
		audioElement.current.volume = volume
	}, [volume])

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
			<input
				className="vol"
      	type="range"
        min={0}
        max={1}
        step={0.02}
        value={volume}
        onChange={event => {
          setVolume(event.target.valueAsNumber)
        }}
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