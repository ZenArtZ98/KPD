import { asset, contacts, productionTeam } from '../data/content'
import styles from './KpdPage.module.css'

const portraits = [
  asset('assets/images/girl-walking.jpg'),
  asset('assets/images/stroitel.jpg'),
  asset('assets/images/yard.jpg'),
  asset('assets/images/panel-house.jpg'),
  asset('assets/images/mosaic.jpg'),
]

export function TeamContacts() {
  return (
    <section className={styles.teamContacts} id="team">
      <span className={styles.textureLayer} aria-hidden="true" />
      <div className={styles.teamBlock}>
        <h2>Команда</h2>
        <div className={styles.teamGrid}>
          {productionTeam.map((member, index) => (
            <article className={styles.member} key={member.name}>
              <img src={portraits[index]} alt={member.name} />
              <strong>{member.role}</strong>
              <span>{member.name}</span>
            </article>
          ))}
        </div>
      </div>
      <div className={styles.contactsBlock} id="contacts">
        <h2>{contacts.title}</h2>
        <p>{contacts.text}</p>
        <ul>
          {contacts.links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a className={styles.smallArrowLink} href="mailto:info@kpd-film.ru">
          Написать нам
          <span aria-hidden="true" />
        </a>
      </div>
      <aside className={styles.letter}>
        <p>{contacts.letter}</p>
        <span aria-hidden="true">♡</span>
      </aside>
      <footer className={styles.footer}>
        <span>© КПД 2024</span>
        <a href="#top">К началу</a>
      </footer>
    </section>
  )
}
