import { useState } from "react";


const ListPreviewDetail = ( {show} ) => {

  const [clicked, isClicked] = useState(false)
  

return (
  <div className='anime-card'>
    {
      clicked ? ( 
        <div className='popup-wrapper'>
            <div className='popup-container' >
              <img 
 								src={`${show.image}`} 
                 alt='poster' 
                 style={{maxWidth: "200px"}} 
                 className='popup'/>
              <div className='popup-info'>
              <h3>{show.title}
                <button className='l-detail-button' onClick={()=>isClicked(false)}>x</button>
              </h3>
                <p>release: {show.releaseDate}</p>
                <p>seasons: {show.seasons}</p>
                <p>episodes: {show.episodes}</p>
                <p>Synopsis: {show.description}</p>
              </div>
            </div>
          <div className='overlay'></div>
        </div>
      ) : (
        <div></div>
      )
    }
    <div className="list-item" key={show.id} style={{
        '--poster-img': `url(${show.image}`}}>
      <div className="title-bar">
        <h3>{ show.title }</h3>
				<button onClick={()=>isClicked(true)}  className='l-detail-button'>Show Info</button>
      </div>
    </div>
  </div>
)
}

export default ListPreviewDetail
