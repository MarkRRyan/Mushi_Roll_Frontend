import { useState, useRef } from "react"

const UserList = ({ list }) => {
	const [clicked, isClicked] = useState(false)

		const carouselElement = useRef(null)

		const handleScroll = (scrollOffset) => {
		carouselElement.current.scrollLeft += scrollOffset;
		}

    return (
			<div className="user-list-container">
				{
					clicked ? (
					<div className="carousel">
						<div className="carousel-container">
						<div className="carousel-wrapper">
							<h3 className="user-list-title">{list.username}'s Watchlist
							<button class='button button-2'onClick={() => isClicked(false)}>X</button>
							</h3>
						<br />
                 	 <div ref={carouselElement} className="carouselbox" id="scroll">
                    {list.watch_list.map((listItem) => (
						<div className="list-icon" key={listItem.id} style={{'--list-img': `url(${listItem.image}`}}>
                    		<div className="title-bar">
                  			<h3 className="list-title">{listItem.title}</h3>
							</div>
						</div>
						))}
						<button className="switchLeft sliderButton" onClick={() => handleScroll(-200)}>ᐊ</button> 
          				<button className="switchRight sliderButton" onClick={()=> handleScroll(200)}>ᐅ</button> 
						</div>
						</div>
						</div>
						<div className="overlay"></div>
           		 </div>
          ) : (
				<div className=" ">
				
           		 	<h3 className='browse-users container custom-scrollbar-thumb'> 
						<img className="happy-sushi" src="https://i.ibb.co/Vq3MCc7/Untitled-design-2.png" />
						{list.username}
						<button className="button-2B button-2" onClick={() => isClicked(true) }>Show List</button>
					</h3>
					
				</div>
          )
        }
			</div>
    )
}

export default UserList