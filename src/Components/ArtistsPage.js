import React from 'react';
import artists from '../db'
import Album from './Albums';

const ArtistsPage = (props) => {
    let filtered = artists.find(element => element.id === parseInt(props.match.params.artistid))
    console.log(props.match.params.artistid)
    console.log(filtered)
    return (
        <div className="artist_bio">
            <div className="pic">
                <span style={{ backgroundImage: `url(${require(`../images/covers/${filtered.cover}.jpg`).default})`}}></span>
            </div>
            <div className="bio">
                <h3>{filtered.name}</h3>
                <div className="bio_text">
                    {filtered.bio}
                </div>
            </div>
            <Album albumList={filtered.albums} />
        </div>

    )
}



export default ArtistsPage;
