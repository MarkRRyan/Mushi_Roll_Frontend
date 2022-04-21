
const MusicControls = ({ playing, isPlaying, skip }) => {

	return (
		<div className="m-player-controls">
			<button className="skip" onClick={()=>skip(false)}>ᐊᐊ</button>
			<button className="play" onClick={()=>isPlaying(!playing)}>ᐅ</button>
			<button className="skip" onClick={()=>skip()}>ᐅᐅ</button>
			<br />
		</div>
	)

}
export default MusicControls