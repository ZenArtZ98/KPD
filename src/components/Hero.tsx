import { asset, project } from '../data/content'
import styles from './KpdPage.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <span className={styles.textureLayer} aria-hidden="true" />
      <div className={styles.archiveStamp} aria-hidden="true">
        <span>13</span>
        <span>72</span>
        <span>86</span>
        <span>90</span>
        <span>11</span>
        <span>24</span>
      </div>
      <img className={styles.heroGhost} src={asset('assets/images/panel-house.jpg')} alt="" />
      <img className={styles.heroHouse} src={asset('assets/images/panel-house.jpg')} alt="" />
      <div className={styles.heroText}>
        <h1>{project.title}</h1>
        <p className={styles.slogan}>{project.slogan}</p>
        <p className={styles.lead}>{project.lead}</p>
        <p className={styles.handwritten}>{project.note}</p>
      </div>
      <img
        className={`${styles.paperPhoto} ${styles.posterStub}`}
        src={asset('assets/images/poster.png')}
        alt="Афиша документального фильма КПД"
      />
      <img
        className={`${styles.paperPhoto} ${styles.heroSchool}`}
        src={asset('assets/images/address-wall.jpg')}
        alt="Фрагмент стены с адресной табличкой"
      />
      <img
        className={`${styles.paperPhoto} ${styles.heroWindow}`}
        src={asset('assets/images/window.jpg')}
        alt="Окна панельного дома"
      />
      <img
        className={`${styles.paperPhoto} ${styles.heroYard}`}
        src={asset('assets/images/yard.jpg')}
        alt="Двор района КПД"
      />
    </section>
  )
}
