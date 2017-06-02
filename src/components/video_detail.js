import React from 'react';

// we only need a functional component here
 const VideoDetail = ({video}) => {
   // because when seacrh for default videos is in progress in constructor of parent app component it will throw error cant read id of undefined so giving it something to render meanwhile.
   if(!video) {
     return <div>Loading...</div>;
   }

   const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;   //ES6 syntax string interpolation used, old syntax is,, const url = 'https://www.youtube.com/embed/ ' + videoId;
   return (
    <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
    </div>
   );
};

export default VideoDetail;
