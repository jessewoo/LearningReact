import React from 'react';

const VideoDetail = ({video}) => {
  // console.log("Video: " + video);

  if (!video) {
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId;
  const url = `http://www.youtube.com/embed/${videoId}`;
  // console.log(url);

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <br/>
        <h6>{video.snippet.title}</h6>
        <p>{video.snippet.description}</p>
      </div>

    </div>

  );
};

export default VideoDetail
