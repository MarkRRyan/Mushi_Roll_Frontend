import { useRef } from "react";

const MusicControls = ({ playing, isPlaying, skip }) => {

	const bubbles = useRef(null)

  const bubbleClick = () => {
    bubbles.current.classList.remove('animate');
    bubbles.current.classList.add('animate');
    setTimeout(() => {
      bubbles.current.classList.remove('animate');
    },[700]);
  }
  


	return (
		<div className="m-player-controls">
			<button className="back" onClick={()=>skip(false)}>ᐊᐊ</button>
			<button className="bubbly-button" ref={bubbles} onClick={()=>{
				isPlaying(!playing)
				bubbleClick()
				}}>ᐅ</button>
			<button className="forwards" onClick={()=>skip()}>ᐅᐅ</button>
			<br />
		</div>
	)

}
export default MusicControls