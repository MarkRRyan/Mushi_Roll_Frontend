
const UserProfile = () => {

	return (
		<div>
			<h3>Your Profile</h3>
				<h4>email: {localStorage.getItem('watcher')} </h4>
				<div className="user-list">
					<h3>Current Watchlist</h3>
						<ul>
							<li>test</li>
							<li>test</li>
							<li>test</li>
							<li>test</li>
							<li>test</li>
						</ul>
				</div>
		</div>
	)
}

export default UserProfile