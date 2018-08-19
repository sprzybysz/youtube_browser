import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return (
      <div className="loader">
      </div>
    );
  }

  const videoId = video.id.videoId;
  const url =`https://www.youtube.com/embed/${videoId}`;
  if (typeof video !== 'undefined') {
    return (
      <div className="video_detail">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <div className="font-weight-bold py-4">{video.snippet.title}</div>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
}

};

export default VideoDetail;
