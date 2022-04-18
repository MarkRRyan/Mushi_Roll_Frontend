import { useState, createContext } from 'react'

const ListContext = createContext()

const ListProvider = (props) => {
    const [watchlist, setWatchlist] = useState([])

    return (
        <ListContext.Provider value={{watchlist, setWatchlist}}>
            {props.children}
        </ListContext.Provider>
    )
}

export { ListContext, ListProvider}