import { asset, collective } from '../data/content'
import styles from './KpdPage.module.css'

export function Collective() {
  return (
    <section className={styles.collective} id="collective">
      <span className={styles.textureLayer} aria-hidden="true" />
      <div className={styles.collectiveCollage}>
        <img src={asset('assets/images/window.jpg')} alt="" />
        <div className={styles.collectiveCard}>
          <strong>{collective.cardTitle}</strong>
          <span>{collective.cardText}</span>
          <small>Мы объединяем кинематографистов, исследователей истории сохраните память о месте.</small>
        </div>
      </div>
      <div className={styles.collectiveText}>
        <h2>{collective.title}</h2>
        <p>{collective.text}</p>
      </div>
      <div className={styles.collectiveList}>
        {collective.directions.map((direction) => (
          <span key={direction}>{direction}</span>
        ))}
        <a className={styles.greenLink} href="#contacts">
          Поддержать дело
          <span aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
