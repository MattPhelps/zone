'use client'

import { useEffect } from 'react'
import 'plyr/dist/plyr.css'

type VideoPlayerProps = {
  videoUrl: string
}

function extractYouTubeID(url: string) {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  const match = url.match(regex)
  return match ? match[1] : null
}

export default function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  useEffect(() => {
    import('plyr').then(({ default: Plyr }) => {
      new Plyr('#player', {
        youtube: {
          noCookie: true,
          modestbranding: 1,
          rel: 0,
        },
      })
    })
  }, [])

  const videoId = extractYouTubeID(videoUrl)

  if (!videoId) return <p>Invalid video URL</p>

  return (
    <div
      className="relative w-full max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-xl"
      style={{ '--plyr-color-main': '#1F58D0' } as React.CSSProperties}
    >
      <div id="player" data-plyr-provider="youtube" data-plyr-embed-id={videoId}></div>
    </div>
  )
}