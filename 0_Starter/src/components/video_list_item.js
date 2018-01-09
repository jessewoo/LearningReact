import React from 'react';

const VideoListItem = ({ video }) => {
  // const video = props.video;
  console.log(video);
  return <li>{video.snippet.title}</li>;
};

export default VideoListItem;
