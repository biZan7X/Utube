import react from "react";

const VideoDetails = ({ video }) => {
   if (!video) return <div>Loading...</div>;

   const VideoURL = `https://youtube.com/embed/${video.id.videoId}`;

   return (
      <div>
         <div className="ui embed">
            <iframe title="ivdeo-player" src={VideoURL}></iframe>
         </div>

         <div className="ui segment">
            <h4 className="header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
         </div>
      </div>
   );
};

export default VideoDetails;
