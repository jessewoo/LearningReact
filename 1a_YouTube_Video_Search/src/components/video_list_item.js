import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // console.log(video)

  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video) } className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-right">
          <div className="media-heading">
            <h6>{video.snippet.title}</h6>
          </div>
        </div>

      </div>
    </li>
  );
}

export default VideoListItem
