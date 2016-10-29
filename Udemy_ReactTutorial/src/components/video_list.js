import React from 'react';
import VideoListItem from './video_list_item'

// Functional Component that takes property, return static info
const VideoList = (props) => {
  // var array = [1,2,3];
  // array.map(function(number) { return number*2 });
  // [2,4,6]

// Always add a key
// VideoList takes that property, and passes into videolistItem
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  // If you had a stack of cardstock with no index, you would have to update the entire stack. If there is index, you can just update that specific cardstock. Each video has an etag.
  return (
    // Use built in iterators, not 'for' loop
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList
