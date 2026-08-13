import { useEffect, useMemo, useState } from 'react'
import { player } from '../data/content'
import styles from './KpdPage.module.css'

export function MediaPlayer() {
  const [localVideo, setLocalVideo] = useState('')
  const [publishedVideo, setPublishedVideo] = useState('')
  const videoSource = localVideo || publishedVideo
  const hasVideo = videoSource.length > 0

  useEffect(() => {
    let ignore = false

    Promise.all(
      player.sources.map((source) =>
        fetch(source, { headers: { Range: 'bytes=0-0' } })
          .then((response) => {
            const contentType = response.headers.get('content-type') || ''
            return response.ok && contentType.startsWith('video/') ? source : ''
          })
          .catch(() => ''),
      ),
    ).then((sources) => {
      if (!ignore) {
        const source = sources.find(Boolean)
        if (source) {
          setPublishedVideo(source)
        }
      }
    })

    return () => {
      ignore = true
    }
  }, [])

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
        {hasVideo ? (
          <video className={styles.playerVideo} src={videoSource} poster={player.poster} controls playsInline preload="metadata" />
        ) : (
          <div className={styles.playerPlaceholder}>
            <img src={player.poster} alt="" />
            <div>
              <strong>Фильм готов к загрузке</strong>
              <span>Добавьте MP4-файл или выберите его с устройства.</span>
            </div>
          </div>
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
