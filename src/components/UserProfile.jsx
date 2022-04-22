import { DeleteAnimeFromList } from "../services/ListServices"
import { useEffect, useState } from 'react'

const UserProfile = ({renderList, change, setChange}) => {


	const [title, setTitle] = useState('')
	const [targeted, setTargeted] = useState(false)

	const deleteListItem = async () => {
		const data = await DeleteAnimeFromList({
			userId: localStorage.getItem('watcher-id'),
			animeId: title
		})
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
				<h4 className="user-email">🍣 email:<span className="email"> {localStorage.getItem('watcher')} 🍣</span></h4>
				<div className="user-list">
					<h3>🍱 Current Watchlist 🍥</h3>
					{renderList.map((newList) => (
						<div className="user-list-items" key={newList.id}>
						<li className="usersLists">
							{newList.title}
						</li>
						<br />
						<button className='button button-3 button3b ' onClick={() => 
							{setTitle(newList.id)
							setTargeted(true)
							}}>Delete Anime</button>
						</div>
					))}
					
				</div>
		</div>
	)
	
}

export default UserProfile