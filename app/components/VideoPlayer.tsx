'use client'
import { useState } from 'react'

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  const videoId = "YOUR_VIDEO_ID"
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-xl">
      {!isPlaying ? (
        <div className="w-full h-full relative cursor-pointer" onClick={() => setIsPlaying(true)}>
          <img
            src={thumbnailUrl}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="bg-white rounded-full p-4 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title="Jawline Formula VSL"
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}
    </div>
  )
}
