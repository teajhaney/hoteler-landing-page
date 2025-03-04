import React from "react";

const VideoSection = () => {
  return (
    <section className="h-72 lg:h-150 bg-primary">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/Fvae8nxzVz4"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </section>
  );
};

export default VideoSection;
