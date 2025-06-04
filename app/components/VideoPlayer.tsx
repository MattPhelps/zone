'use client'

import { useEffect } from 'react'
import 'plyr/dist/plyr.css'

export default function VideoPlayer() {
  useEffect(() => {
    // Dynamically import Plyr only on the client
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

  return (
    <div
      className="relative w-full max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-xl"
      style={{ '--plyr-color-main': '#1F58D0' } as React.CSSProperties}
    >
      <div id="player" data-plyr-provider="youtube" data-plyr-embed-id="BkH1FcR5uew"></div>
    </div>
  )
}
