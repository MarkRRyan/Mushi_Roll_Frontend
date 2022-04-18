

const AnimeDetail = ( {show}, {watchlist, clicked, isClicked, setWatchlist}) => {


  return (
		<div className="anime-item" key={show.id} style={{
        '--poster-img': `url(${show.image})`
    }}>

    {
      isClicked ? ( 
        <div>
          <div className='popup-container'>
            <img src={show.image} alt='' onClick={()=>isClicked(false)} style={{
              maxWidth: '600px',
              border: '1px solid black'
              }} className='popup'/>
            </div>
          <div className='overlay'></div>
        </div>
        ) : (
          <div></div>
        )
      }
      <div className='anime-card'>
        <button onClick={()=>isClicked(true)}  className='item-name'>Show Info</button>
        <button onClick={() => setWatchlist([...watchlist, show])}>Add to Watchlist</button>
          <div className='info'>
            <h3>title: { show.title } </h3>
          </div>
        </div>
    </div>
  )
}

export default AnimeDetail
