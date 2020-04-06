import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onItemClicked }) => {
  return (
    <div onClick={() => onItemClicked(video)} className="video-item item">
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.channelTitle}</div>
      </div>
    </div>
  );
};

export default VideoItem;
