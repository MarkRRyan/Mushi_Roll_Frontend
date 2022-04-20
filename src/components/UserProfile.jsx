
const UserProfile = ({renderList}) => {

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
						</div>
					))}
				</div>
		</div>
	)
}

export default UserProfile