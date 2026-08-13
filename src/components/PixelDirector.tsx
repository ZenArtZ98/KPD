import { useState } from 'react'
import { asset, pixelDirectorLinks } from '../data/content'
import styles from './KpdPage.module.css'

export function PixelDirector() {
  const [open, setOpen] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)

  return (
    <aside className={styles.pixelDirector}>
      {open && (
        <nav className={styles.pixelMenu} aria-label="Контакты режиссера">
          {pixelDirectorLinks.map((link) => (
            <a href={link.href} key={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'}>
              {link.label}
            </a>
          ))}
        </nav>
      )}
      <button
        className={styles.pixelButton}
        type="button"
        aria-expanded={open}
        aria-label="Открыть контакты Pixel Director"
        onClick={() => setOpen((value) => !value)}
      >
        {!videoFailed && (
          <video
            src={asset('assets/video/AnimatedAvatar.mp4')}
            autoPlay
            loop
            muted
            playsInline
            onError={() => setVideoFailed(true)}
          />
        )}
        {videoFailed && (
          <span className={styles.pixelFallback} aria-hidden="true">
            <i />
          </span>
        )}
        <strong>Режиссер</strong>
      </button>
    </aside>
  )
}
