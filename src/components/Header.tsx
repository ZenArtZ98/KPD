import { useState } from 'react'
import { navItems, project } from '../data/content'
import styles from './KpdPage.module.css'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#top" aria-label="КПД" onClick={() => setIsMenuOpen(false)}>
        <strong>{project.title}</strong>
        <span>{project.eyebrow}</span>
      </a>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`} aria-label="Основная навигация">
        {navItems.map((item) => (
          <a href={item.href} key={item.href} onClick={() => setIsMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
      <button
        className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ''}`}
        type="button"
        aria-expanded={isMenuOpen}
        aria-label="Открыть меню"
        onClick={() => setIsMenuOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}
