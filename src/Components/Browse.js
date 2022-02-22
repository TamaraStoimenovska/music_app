import React from 'react'
import artists from '../db'
import BrowseArtist from './BrowseArtist'

const Browse = () => {
    return (
        <div className="artists_list">
            <h4>Browse the artists</h4>
            {artists.map(element => (
            <BrowseArtist key={element.id} id={element.id} cover={element.cover} name={element.name} />
            ))}
        </div>
    )
}
export default Browse