import { useState, useContext } from "react";
import { ListContext } from "./ListContext";

const AnimeDetail = ( {show} ) => {

  const [clicked, isClicked] = useState(false)
  const [add, isAdded] = useState(false)
  
  const {watchlist} = useContext(ListContext)
  const {setWatchlist} = useContext(ListContext)
  
return (
  <div className='anime-card'>
    {
      clicked ? ( 
        <div className='popup-wrapper'>
          <div className='popup-container' >
            <div className='popup-info'>
              <img
                src={`${show.image}`}
                alt='poster'
                style={{maxHeight: "500px"}}
                className='popup'/>
              <div className="popup-info-details">
                <div className="popup-title-wrapper">
                  <h3 className="popup-title-name">{show.title}
                    <button className="x-anime button-2B button-1" onClick={()=>isClicked(false)}>x</button>
                  </h3>
                </div>
                  <p>release: {show.releaseDate}</p>
                  <p>seasons: {show.seasons}</p>
                  <p>episodes: {show.episodes}</p>
                  <p>Synopsis: {show.description}</p>
                </div>
              </div>
            </div>
          <div className='overlay'></div>
        </div>
      ) : (
        <div></div>
      )
    }
    <div className="anime-item" key={show.id} style={{
        '--poster-img': `url(${show.image}`}}>
      <div className="title-bar">
        <h3>{ show.title }</h3>
            {
              add ? (
                <div className="add-wrapper">
                <button onClick={()=>isClicked(true)}  className='a-detail-button button-2b button-2'>Show Info</button><p>★</p>
                </div>
              ) : (
                <div className="dash-buttons add-wrapper">
                <button onClick={()=>isClicked(true)}  className='a-detail-button button-2b button-2'>Show Info</button>
                <button className='button2b button-2' onClick={() => {
                  setWatchlist([...watchlist, show])
                  isAdded(true)
                  }}>Add to Watchlist</button> 
                </div>
              )
            }
      </div>
    </div>
  </div>
)
}

export default AnimeDetail
