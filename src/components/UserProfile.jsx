import { DeleteAnimeFromList } from "../services/ListServices"
import { useParams } from "react-router"
import { useEffect, useState } from 'react'

const UserProfile = ({renderList, change, setChange}) => {

	// let { id } = useParams()

	const [title, setTitle] = useState('')
	const [targeted, setTargeted] = useState(false)

	const deleteListItem = async () => {
		const data = await DeleteAnimeFromList({
			userId: localStorage.getItem('watcher-id'),
			animeId: title
		})
		console.log(data)
		setTargeted(false)
		setChange(true)

	}
	const targetListItem = () => {
		if (title.animeId !== '') {
			deleteListItem()

		}
	}

	useEffect(() => {
		if (targeted) {
			targetListItem()
		}
	})


	

	return (
		<div className="user-list-wrapper">
			<h3>Your Profile</h3>
				<h4>email: {localStorage.getItem('watcher')} </h4>
				<div className="user-list">
					<button onClick={() => (console.log(renderList))}>test</button>
					<h3>Current Watchlist</h3>
					{renderList.map((newList) => (
						<div className="user-list-items" key={newList.id}>
						<li className="usersLists">
							{newList.title}
						</li>
						{/* <button onClick={() => {(deleteFromList(newList))}}>X</button> */}
						<button onClick={() => 
							{setTitle(newList.id)
							setTargeted(true)
							}}

							>Other bUtton</button>
						</div>
					))}
					
				</div>
		</div>
	)
	
}

export default UserProfile