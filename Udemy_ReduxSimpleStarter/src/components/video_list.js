import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
  // var array = [1,2,3];
  // array.map(function(number) { return number*2 });
  // [2,4,6]

  const videoItems = props.videos.map((video) => {
    return <VideoListItem video={video} />
  });


  return (
    // Use built in iterators, not 'for' loop
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList
