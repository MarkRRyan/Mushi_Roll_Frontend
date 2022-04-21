import React, { useRef, useState, useEffect } from "react"
import MusicDetails from "./MusicDetails"
import MusicControls from "./MusicControls"


const Music = () => {

	//----------------------------------------*
	//AUDIO CONTROL STATES
	const audioElement = useRef(null)
	const [playing, isPlaying] = useState(false)
	const [track, setTrack] = useState(0)
	const [nextTrack, setNextTrack] = useState(track + 1)
	const [volume, setVolume] = useState(1)

	//----------------------------------------*
	//TIMER STATES & REFS
	const seekElement = useRef(null)
	const timer = useRef()
	const [trackProgress, setTrackProgress] = useState(0)

	//Used as a 'gatekeeper' to determine when stuff runs
	const ready = useRef(false)

	//----------------------------------------*
	//PLAYLIST
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
			"title": "Flyers",
			"artist": "BRADIO",
			"album": "Death Parade OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Flyers-Death-Parade-OP.mp3?raw=true"
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
			"title": "Smile Bomb",
			"artist": "AmaLee",
			"album": "Yu Yu Hakusho OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Smile-Bomb-Yu-Yu-Hakusho-OP.mp3?raw=true"
		},
		{
			"title": "Chouzetsu Dynamic!",
			"artist": "Kazuya Yoshii",
			"album": "Dragon Ball Super OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Chouzetsu-Dynamic!-DBSuper-OP.mp3?raw=true"
		},
		{
			"title": "Rewrite",
			"artist": "Asian Kung-fu Generation",
			"album": "Fullmetal Alchemist OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Rewrite-FMA-OP.mp3?raw=true"
		},
		{
			"title": "Database",
			"artist": "Man with a Mission",
			"album": "Log Horizon OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Database-Log-Horizon-OP.mp3?raw=true"
		},
		{
			"title": "Gurenge",
			"artist": "LiSA",
			"album": "Demon Slayer OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Gurenge-Demon-Slayer-OP.mp3?raw=true"
		},
		{
			"title": "Odd Future",
			"artist": "UVERworld",
			"album": "Boku no Hero Academia OP 3",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Odd-Future-Hero-Academia-OP.mp3?raw=true"
		},
		{
			"title": "Hey Kids!",
			"artist": "The Oral Cigarettes",
			"album": "Noragami OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Hey-Kids-Noragami-OP.mp3?raw=true"
		},
		{
			"title": "Ride on Shooting Star",
			"artist": "The Pillows",
			"album": "FLCL OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/RIde-on-Shooting-Star-FLCL-OP.mp3?raw=true"
		},
		{
			"title": "Kaikai Kitan",
			"artist": "Eve",
			"album": "Jujutsu Kaisen OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Kaikai-Kitan-Jujutsu-Kaisen-OP.mp3?raw=true"
		},
		{
			"title": "Love Dramatic",
			"artist": "Masayuki Suzuki",
			"album": "Kaguya-sama: Love is War OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Love-is-War-Kaguya-sama-OP.mp3?raw=true"
		},
		{
			"title": "Ride on Time",
			"artist": "Tatsuro Yamashita",
			"album": "Dreamland (1990)",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Ride-on-Time-%E5%B1%B1%E4%B8%8B%E9%81%94%E9%83%8E-Tatsuro%20Yamashita.mp3?raw=true"
		},
		{
			"title": "Kiba no Uta",
			"artist": "Ultra Tower",
			"album": "Shokugeki no Soma OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Kibo-no-Uta-Food-Wars-OP.mp3?raw=true"
		},
		{
			"title": "Uninstall",
			"artist": "Chiaki Ishikawa",
			"album": "Bokurano OP 1",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/Uninstall-Bokurano-OP.mp3?raw=true"
		},
		{
			"title": "A Cruel Angel's Thesis",
			"artist": "Yoko Takahashi",
			"album": "Neon Genesis Evangelion",
			"src": "https://github.com/DerWindFish/Mushi_Roll_Frontend/raw/main/public/songs/A%20Cruel%20Angel's%20Thesis%20(2020%20Remaster).mp3?raw=true"
		}
	]


	//----------------------------------------*
	//AUDIO CONTROLS
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


	//----------------------------------------*
	//UPCOMING TRACK
	useEffect(()=>{
		setNextTrack(()=>{
		if (track + 1 > songs.length - 1 ) {
			return 0
		} else {
			return track + 1
		}
	})
	}, [track])
	

	//----------------------------------------*
	//TRACK TIMERS
	useEffect(() => {
		//When component unmounts, clear the timer/pause track. Pretty cool bit of code to learn about, I had no idea useEffect had this functionality
		return () => {
			audioElement.current.pause()
			clearInterval(timer.current)
		}
	}, [])

	//Sets up our track progress & seek when the track changes
	useEffect(() => {
		setTrackProgress(audioElement.current.currentTime)
		seekElement.current.max = audioElement.current.duration

		//starts the timer when the component mounts
		if (ready.current) {
			timerStart()
		} else {
			//sets up the gatekeeper on a rerender
			ready.current = true
		}
	}, [track])


	//autoplays the next song, sets up timers
	const timerStart = () => {
	  clearInterval(timer.current)
	  timer.current = setInterval(() => {
	    if (audioElement.current.ended) {
	      skip()
	    } else {
	      setTrackProgress(audioElement.current.currentTime)
	    }
	  }, [1000])
	}
	

	//----------------------------------------*
	//SKIPS TO NEXT TRACK
	const skip = (skipped = true) => {
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


	//----------------------------------------*
	//SEEK FUNCTIONS
	const onSeek = (value) => {
		// Clear any timers already running
		audioElement.current.currentTime = value
		setTrackProgress(audioElement.current.currentTime)
	}
		
	const onSeekEnd = () => {
		// If not already playing, start
		if (!playing) {
			clearInterval(timer.current)
			isPlaying(true)
		}
		timerStart()
	}
	//----------------------------------------*



	return (
		<div className="music-player">
			<audio
				src={songs[track].src}
				ref={audioElement}
			></audio>
			<MusicDetails 
				song={songs[track]}
			/>
			<div className="next-track">
				<h6>[next track]: {songs[nextTrack].title}</h6>
			</div>
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
			<input
				ref={seekElement}
        type="range"
        value={trackProgress}
        step="1"
        min="0"
        max={audioElement.current?.duration}
        className="progress"
        onChange={(e) => onSeek(e.target.value)}
        onMouseUp={onSeekEnd}
        onKeyUp={onSeekEnd}
      />
			<MusicControls
				playing={playing}
				isPlaying={isPlaying}
				skip={skip}
			/>
		</div>
	)
}

export default Music