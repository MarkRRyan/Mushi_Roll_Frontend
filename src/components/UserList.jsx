import { useState } from "react"

const UserList = ({list}) => {
    const [clicked, isClicked] = useState(false)
    return (
        <div className="user-list-container">
            {
                clicked ? (
                    <div className="popup-wrapper">
                        <h3>{list.username}'s Watchlist</h3>
                        <button onClick={() => isClicked(false)}>X</button>
                        <div className="popup-info">
                            {list.watch_list.map((listItem) => (
                                <div className="list-wrapper">
                                <h4>{listItem.title}
                                <br />
                                <img src={`${listItem.image}`}></img>
                                </h4>
                                </div>
                            ))}
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