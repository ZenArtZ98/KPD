import { useEffect, useState } from 'react'
import { asset } from '../data/content'
import styles from './KpdPage.module.css'

type Mode = 'desktop' | 'mobile'

export function ReferenceOverlay() {
  const [visible, setVisible] = useState(() => new URLSearchParams(window.location.search).has('ref'))
  const [mode, setMode] = useState<Mode>('desktop')
  const [opacity, setOpacity] = useState(45)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'r') {
        event.preventDefault()
        setVisible((value) => !value)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className={styles.referenceTool}>
      {visible && (
        <>
          <div className={styles.referenceControls}>
            <button type="button" onClick={() => setVisible((value) => !value)}>
              Ref
            </button>
            <button type="button" onClick={() => setMode('desktop')}>
              D
            </button>
            <button type="button" onClick={() => setMode('mobile')}>
              M
            </button>
            <input
              aria-label="Прозрачность референса"
              max="90"
              min="10"
              type="range"
              value={opacity}
              onChange={(event) => setOpacity(Number(event.target.value))}
            />
          </div>
          <img
            className={`${styles.referenceImage} ${mode === 'mobile' ? styles.referenceMobile : ''}`}
            src={asset(`assets/references/reference-${mode}.png`)}
            style={{ opacity: opacity / 100 }}
            alt=""
          />
        </>
      )}
    </div>
  )
}
