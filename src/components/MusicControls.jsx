
const MusicControls = ({ playing, isPlaying, skip, isSkipped }) => {

	return (
		<div className="m-player-controls">
			<button className="skip" onClick={()=>{
				skip()
				isSkipped(false)
				}}>ᐊᐊ</button>
			<button className="play" onClick={()=>isPlaying(!playing)}>ᐅ</button>
			<button className="skip" onClick={()=>skip()}>ᐅᐅ</button>
			<br />
		</div>
	)

}
export default MusicControls