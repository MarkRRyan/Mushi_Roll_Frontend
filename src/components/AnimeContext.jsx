import { useState, createContext } from 'react'

const AnimeContext = createContext()

const AnimeProvider = (props) => {
	const [clicked, isClicked] = useState(false)

	return (
		<AnimeContext.Provider value={{clicked, isClicked}}>
			{props.children}
		</AnimeContext.Provider>
	)
}

export { AnimeContext, AnimeProvider }