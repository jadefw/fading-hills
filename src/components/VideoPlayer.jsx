import React from 'react';

const VideoPlayer = ({ src, type, width = "100%", height = "auto" }) => {
  return (
    <video width={width} height={height} controls className='border border-neutral-700 rounded-lg'>
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
