import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video;
  // CALLBACK all the inside - Communication from App to children component.
  // const onVideoSelect = props.onVideoSelect
  // console.log(video);
  // Video List Item takes the onVideoSelect property. Whenever I'm click, call that video that will be passed.
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem
