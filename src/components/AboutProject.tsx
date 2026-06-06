import { asset, project } from '../data/content'
import styles from './KpdPage.module.css'

export function AboutProject() {
  return (
    <section className={styles.aboutProject} id="project">
      <span className={styles.textureLayer} aria-hidden="true" />
      <div className={styles.tornTop} aria-hidden="true" />
      <img
        className={`${styles.paperPhoto} ${styles.addressPhoto}`}
        src={asset('assets/images/address-wall.jpg')}
        alt="Адресная стена района"
      />
      <div className={styles.projectCopy}>
        <h2>О проекте</h2>
        <p>{project.body}</p>
        <p>{project.bodyMore}</p>
      </div>
      <a className={styles.arrowLink} href="#frames">
        Смотреть за кадром
        <span aria-hidden="true" />
      </a>
    </section>
  )
}
