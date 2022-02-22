import React from 'react'
import { Link } from 'react-router-dom';

const BrowseArtist = (props) => {
    return (
        <Link key={props.id} to={`/artist/${props.id}`} className="artist_item"
            style={{ backgroundImage: `url(${require(`../images/covers/${props.cover}.jpg`).default})` }}>
            <div>{props.name}</div>
        </Link >

    )
}

export default BrowseArtist;
