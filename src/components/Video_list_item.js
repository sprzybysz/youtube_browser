import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => { 
  const imgUrl = video.snippet.thumbnails.medium.url; 
  return (
    <li onClick={(video) => onVideoSelect(video)} className="list_item">
      <div className="row">
        <div className="col-md-12">
             <img src={ imgUrl} />
        </div>
        <div className="col-md-12">
            <p className="font-weight-bold">{video.snippet.title}</p>
            <small>{video.snippet.channelTitle}</small>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;