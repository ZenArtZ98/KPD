import { frames } from '../data/content'
import styles from './KpdPage.module.css'

export function FilmFrames() {
  return (
    <section className={styles.framesSection} id="frames">
      <span className={styles.textureLayer} aria-hidden="true" />
      <div className={styles.framesCopy}>
        <h2>{frames.title}</h2>
        <p>{frames.subtitle}</p>
        <a className={styles.smallArrowLink} href="#watch">
          Смотреть фильм
          <span aria-hidden="true" />
        </a>
      </div>
      <div className={styles.filmStrip} aria-label="Кадры из будущего фильма">
        {frames.images.map((image) => (
          <figure key={image}>
            <img src={image} alt="" />
          </figure>
        ))}
      </div>
    </section>
  )
}
