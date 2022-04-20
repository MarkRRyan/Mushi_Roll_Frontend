import { DeleteAnimeFromList } from "../services/ListServices"
import { useParams } from "react-router"

const UserProfile = ({renderList}) => {

	let { id } = useParams()

	const deleteFromList = (id) => {
		DeleteAnimeFromList(id)
		// console.log('I am a useless consolelog')
	}

	return (
		<div>
			<h3>Your Profile</h3>
				<h4>email: {localStorage.getItem('watcher')} </h4>
				<div className="user-list">
					<button onClick={() => (console.log(renderList))}>test</button>
					<h3>Current Watchlist</h3>
					{renderList.map((newList) => (
						<div className="user-list-wrapper" key={newList.id}>
						<li className="usersLists">
							{newList.title}
						</li>
						<button onClick={() => {(deleteFromList(newList))}}>X</button>
						<button onClick={() => {(console.log(newList.id))}}>Other bUtton</button>
						</div>
					))}
					
				</div>
		</div>
	)
	
}

export default UserProfile