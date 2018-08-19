import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => { 
  const imgUrl = video.snippet.thumbnails.medium.url; 
  return (
    <li onClick={() => onVideoSelect(video)} className="list_item">
      <div className="row">
        <div className="col-md-12">
             <img src={ imgUrl} />
        </div>
        <div className="col-md-12">
            <p className="font-weight-bold pt-4">{video.snippet.title}</p>
            <small>{video.snippet.channelTitle}</small>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;