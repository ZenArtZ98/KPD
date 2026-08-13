import { useEffect, useMemo, useState } from 'react'
import { player } from '../data/content'
import styles from './KpdPage.module.css'

export function MediaPlayer() {
  const [localVideo, setLocalVideo] = useState('')

  useEffect(() => {
    return () => {
      if (localVideo) {
        URL.revokeObjectURL(localVideo)
      }
    }
  }, [localVideo])

  const fileLabel = useMemo(() => {
    if (localVideo) {
      return 'Локальный файл выбран'
    }

    return 'Выбрать файл'
  }, [localVideo])

  return (
    <section className={styles.mediaPlayerSection} id="watch">
      <span className={styles.textureLayer} aria-hidden="true" />
      <div className={styles.playerCopy}>
        <p>{player.eyebrow}</p>
        <h2>{player.title}</h2>
        <span>{player.description}</span>
      </div>
      <div className={styles.playerFrame}>
        {localVideo ? (
          <video className={styles.playerVideo} src={localVideo} poster={player.poster} controls playsInline preload="metadata" />
        ) : (
          <iframe
            className={styles.playerVideo}
            src={player.embedUrl}
            title={player.title}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        )}
        <label className={styles.playerUpload}>
          <input
            type="file"
            accept="video/mp4,video/webm,video/ogg,video/*"
            onChange={(event) => {
              const file = event.currentTarget.files?.[0]
              if (!file) {
                return
              }

              if (localVideo) {
                URL.revokeObjectURL(localVideo)
              }

              setLocalVideo(URL.createObjectURL(file))
            }}
          />
          {fileLabel}
        </label>
      </div>
    </section>
  )
}
