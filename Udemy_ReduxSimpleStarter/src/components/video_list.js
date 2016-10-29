import React from 'react';

// Functional component
// Those videos props will arrive as arguments
const VideoList = (props) => {
  // An array of videos
  // const videos = props.videos;
  return (
    <ul className="col-md-4 list-group">
      {props.videos.length}
    </ul>
  );
};

export default VideoList
