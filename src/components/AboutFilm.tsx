import { asset, film } from '../data/content'
import styles from './KpdPage.module.css'

export function AboutFilm() {
  return (
    <section className={styles.aboutFilm} id="film">
      <span className={styles.textureLayer} aria-hidden="true" />
      <div className={styles.filmIntro}>
        <h2>{film.title}</h2>
        <h3>{film.subtitle}</h3>
        {film.text.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className={styles.themeGrid}>
        {film.themes.map((theme, index) => (
          <article className={styles.theme} key={theme.title}>
            <div className={styles.themeImageStack} aria-hidden="true">
              <img src={index === 0 ? asset('assets/decor/5/grid-note.png') : theme.image} alt="" />
              {index === 2 && <img src={asset('assets/images/window.jpg')} alt="" />}
            </div>
            <h3>{theme.title}</h3>
            <p>{theme.text}</p>
          </article>
        ))}
        <article className={`${styles.theme} ${styles.mobileVision}`}>
          <div className={styles.themeImageStack} aria-hidden="true">
            <img src={asset('assets/decor/5/notebook-sheet.png')} alt="" />
          </div>
          <h3>{film.subtitle}</h3>
          <p>{film.text.join(' ')}</p>
        </article>
      </div>
      <span className={styles.plusMark} aria-hidden="true">
        +
      </span>
    </section>
  )
}
