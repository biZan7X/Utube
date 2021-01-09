import react from "react";
import VideoItem from "./VideoItem";
import "./VideoItem.css";

const VideoList = (props) => {
   const renderList = props.videos.map((video) => {
      return (
         <VideoItem
            key={video.id.videoId}
            onVideoSelect={props.onVideoSelect}
            video={video}
         />
      );
   });

   return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
