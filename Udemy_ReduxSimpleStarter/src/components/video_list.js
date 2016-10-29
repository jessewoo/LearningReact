import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
  // var array = [1,2,3];
  // array.map(function(number) { return number*2 });
  // [2,4,6]

// Always add a key
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />
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
