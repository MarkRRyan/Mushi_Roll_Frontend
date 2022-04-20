
const PlayerControls = (props) => {
	return (
		<div className="m-player-controls">
			<button className="skip" onClick={()=>props.SkipSong(false)}>back</button>
			<button className="play" onClick={()=>props.setIsPlaying(!props.isPlaying)}>play</button>
			<button className="skip" onClick={()=>props.SkipSong()}>forward</button>
		</div>
	)

}
export default PlayerControls