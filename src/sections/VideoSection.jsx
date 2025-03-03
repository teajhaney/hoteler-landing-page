import React from 'react'

const VideoSection = () => {
  return (
    <div className="h-72 lg:h-150 bg-primary">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/Fvae8nxzVz4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen></iframe>
    </div>
  );
}

export default VideoSection
