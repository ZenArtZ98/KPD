import { player } from '../data/content'
import styles from './KpdPage.module.css'

export function MediaPlayer() {
  return (
    <section className={styles.mediaPlayerSection} id="watch">
      <span className={styles.textureLayer} aria-hidden="true" />
      <div className={styles.playerCopy}>
        <p>{player.eyebrow}</p>
        <h2>{player.title}</h2>
      </div>
      <div className={styles.playerFrame}>
        <iframe
          className={styles.playerVideo}
          src={player.embedUrl}
          title={player.title}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  )
}
