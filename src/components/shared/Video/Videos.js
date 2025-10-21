import React from 'react';

function Videos({ url, className }) {
  return (
    <div className="px-4">
      <div className={`mx-auto w-full max-w-[960px] ${className}`}>
        <div className="relative overflow-hidden  rounded-[24px] border border-gray-100 dark:border-gray-800 shadow-sm">
          {/* Keep a strict 16:9 aspect; scales down on smaller screens, capped at 960px width */}
          <div className="relative aspect-[16/9] ">
            <video
              id="video"
              src={url}
              className="object-cover w-full h-full"
              loop
              muted
              autoPlay
              playsInline
            >
              Your browser does not support the video tag.
            </video>
            {/* Play button (no onClick while it's a Server Component) */}
            {/* <button
                  type="button"
                  aria-label="Play video"
                  onClick={() => {
                    const video = document.getElementById('video');
                    if (video?.paused) {
                      video.play();
                      setIsPlaying(true);
                    } else {
                      video?.pause();
                      setIsPlaying(false);
                    }
                  }}
                  className="
            absolute inset-0 m-auto h-14 w-14 sm:h-16 sm:w-16
            rounded-full bg-black/60 backdrop-blur
            flex items-center justify-center
            transition hover:scale-105 hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/60
          "
                >
                  {isPlaying ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-7 w-7 text-white"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-7 w-7 text-white"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button> */}

            {/* Faux progress bar hint (optional) */}
            {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3">
                  <div className="mx-auto h-1.5 w-2/3 rounded-full bg-white/40" />
                </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videos;
