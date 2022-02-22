import React from 'react';

const Album = (props) => {

  return (
    <div className="albums_list">
      {props.albumList.map((item, index) => (
          <img  key={index} src={require(`../images/albums/${item.cover}.jpg`).default} alt="artist"/>
      ))}
    </div>
  )
}

export default Album;