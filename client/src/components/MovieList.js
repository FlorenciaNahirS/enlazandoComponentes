import React from 'react'

function MovieList({id,title,rating, awards,length}) {
    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{rating}</td>
            <td>{awards}</td>
            <td>{length}</td>
        </tr>
    )
}

export default MovieList
