import { AboutFilm } from './components/AboutFilm'
import { AboutProject } from './components/AboutProject'
import { Collective } from './components/Collective'
import { FilmFrames } from './components/FilmFrames'
import { Generations } from './components/Generations'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MediaPlayer } from './components/MediaPlayer'
import { PixelDirector } from './components/PixelDirector'
import { TeamContacts } from './components/TeamContacts'
import { asset } from './data/content'
import styles from './components/KpdPage.module.css'
import type { CSSProperties } from 'react'

function App() {
  const fontFaces = `
    @font-face {
      font-family: "Capture It KPD";
      src: url("${asset('assets/fonts/asphalticscratchrusbylyajka.otf')}") format("opentype");
      font-display: swap;
    }

    @font-face {
      font-family: "The Capt KPD";
      src: url("${asset('assets/fonts/thecapt.otf')}") format("opentype");
      font-display: swap;
    }
  `

  const textureVars = {
    '--paper-texture': `url("${asset('assets/decor/4/paper-aged-beige.png')}")`,
    '--paper-clean': `url("${asset('assets/decor/4/paper-clean-ivory.png')}")`,
    '--paper-striped': `url("${asset('assets/decor/4/paper-light-striped.png')}")`,
    '--paper-concrete': `url("${asset('assets/decor/4/paper-concrete-light.png')}")`,
    '--concrete-dark': `url("${asset('assets/decor/4/concrete-dark-texture.png')}")`,
    '--ragged-1': `url("${asset('assets/decor/1/ragged_paper (1).png')}")`,
    '--ragged-2': `url("${asset('assets/decor/1/ragged_paper (2).png')}")`,
    '--ragged-3': `url("${asset('assets/decor/1/ragged_paper (3).png')}")`,
    '--ragged-4': `url("${asset('assets/decor/1/ragged_paper (4).png')}")`,
    '--ragged-5': `url("${asset('assets/decor/1/ragged_paper (5).png')}")`,
    '--ragged-shadow-1': `url("${asset('assets/decor/1/ragged_paper (2).png')}")`,
    '--ragged-shadow-2': `url("${asset('assets/decor/1/ragged_paper (3).png')}")`,
    '--ragged-shadow-3': `url("${asset('assets/decor/1/ragged_paper (4).png')}")`,
    '--ragged-shadow-4': `url("${asset('assets/decor/1/ragged_paper (5).png')}")`,
    '--ragged-shadow-5': `url("${asset('assets/decor/1/ragged_paper (1).png')}")`,
    '--torn-paper': `url("${asset('assets/decor/1/ragged_paper (1).png')}")`,
    '--tape': `url("${asset('assets/decor/2/tape (4).png')}")`,
    '--tape-small': `url("${asset('assets/decor/2/tape (1).png')}")`,
    '--poster-image': `url("${asset('assets/images/poster.png')}")`,
    '--poster-paper': `url("${asset('assets/decor/5/poster-paper.png')}")`,
    '--stacked-paper': `url("${asset('assets/decor/5/stacked-paper.png')}")`,
    '--polaroid-landscape': `url("${asset('assets/decor/5/polaroid-landscape.png')}")`,
    '--film-strip': `url("${asset('assets/decor/3/film-strip-empty.png')}")`,
    '--noise': `url("${asset('assets/decor/4/paper-archive-speckled.png')}")`,
  } as CSSProperties

  return (
    <>
      <style>{fontFaces}</style>
      <main className={styles.page} style={textureVars}>
        <div className={styles.paperVeil} aria-hidden="true" />
        <Header />
        <Hero />
        <AboutProject />
        <AboutFilm />
        <Generations />
        <FilmFrames />
        <MediaPlayer />
        <Collective />
        <TeamContacts />
      </main>
      <PixelDirector />
    </>
  )
}

export default App
