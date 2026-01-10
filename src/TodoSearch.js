import './TodoSearch.css'
import React from 'react'

function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState("")

    console.log(searchValue)
    return (
        <input
            className="TodoSearch"
            placeholder="Buscar tarea"
            value={searchValue}
            onChange={
                (event) => setSearchValue(event.target.value)
            }

        />
    )
}

export { TodoSearch }