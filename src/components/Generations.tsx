import { asset, generations } from '../data/content'
import styles from './KpdPage.module.css'

export function Generations() {
  return (
    <section className={styles.generations} id="generations">
      <span className={styles.textureLayer} aria-hidden="true" />
      <div className={styles.generationIntro}>
        <h2>{generations.title}</h2>
        <p>{generations.intro}</p>
      </div>
      <div className={styles.people}>
        {generations.people.map((person) => (
          <article className={styles.person} key={person.title}>
            <img className={styles.personPhoto} src={person.image} alt={person.title} />
            <div>
              <h3>{person.title}</h3>
              <p>{person.text}</p>
            </div>
          </article>
        ))}
      </div>
      <img className={styles.cityLine} src={asset('assets/images/panel-house.jpg')} alt="" />
    </section>
  )
}
