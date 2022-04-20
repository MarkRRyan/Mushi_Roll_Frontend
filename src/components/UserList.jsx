import { useState, useRef } from "react"

const UserList = ({list}) => {
    const [clicked, isClicked] = useState(false)

		const carouselElement = useRef(null)

		const handleRight = () => {
				document.getElementById('scroll').scrollRight += 1
				console.log(document.getElementById('scroll'))
				
		}

    return (
        <div className="user-list-container">
            {
                clicked ? (
                    <div className="popup-wrapper">
                        <h3>{list.username}'s Watchlist</h3>
                        <button onClick={() => isClicked(false)}>X</button>
                        <div className="body">
													<div className="carousel">
                        		<div ref={carouselElement} className="popup-info carouselbox" id="scroll">
                          	{list.watch_list.map((listItem) => (
                              <h4>{listItem.title}
                              <br />
                              <img className="carousel-image" src={`${listItem.image}`}></img>
                              </h4>
                          	))}
														<button className="switchLeft sliderButton"> Left </button> 
          									<button className="switchRight sliderButton" onClick={()=> handleRight()} >Right</button> 
													</div>
												</div>
											</div>
                    </div>
                ) : (
                    <div></div>
                )
            }
            
            <div className="user-list-item">
              
                <h3>
                   
                    {list.username} 
                    <button onClick={() => isClicked(true) }>Show List</button>
                </h3>
            </div>
        </div>
    )
}

export default UserList