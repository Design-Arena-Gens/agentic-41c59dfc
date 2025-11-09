import LogoWordmark from '../components/LogoWordmark'
import Palette from '../components/Palette'
import Section from '../components/Section'
import CanMockup from '../components/CanMockup'

export default function Home(){
  return (
    <div>
      <header className="container hero">
        <div>
          <span className="heroTag"><span className="badgeDot"></span> New Beverage Brand</span>
          <h1 className="heroTitle">TwistUp</h1>
          <p className="heroSubtitle">A fresh, energetic beverage identity with a signature twist-cap flavor release. Confident wordmark, balanced palette, and crisp layouts that feel fizzy, modern, and shelf-ready.</p>
          <div style={{height:16}} />
          <div className="badge"><span className="badgeDot"/> Mint Aqua ? Tangerine ? Off?White ? Charcoal</div>
        </div>
        <div className="heroVisual">
          <div className="can">
            <div className="canTop"/>
            <div className="capRing"/>
            <div className="capHint">twist to release</div>
            <div className="canLabel">
              <div className="logoInCan"><LogoWordmark size="lg" /></div>
            </div>
            <div className="fizz"/>
          </div>
        </div>
      </header>

      <main className="container">
        <Section title="Logo">
          <p>Big, rounded, and active. The upward motion lives in the custom ligature between the ?t? and ?U? and the lifted baseline on ?Up?. No literal icons; just confident type and a subtle twist underline.</p>
          <div style={{height:16}}/>
          <div className="lockups">
            <div className="lockupCard" style={{background:'white'}}>
              <LogoWordmark />
            </div>
            <div className="lockupCard" style={{background:'var(--tw-mint)'}}>
              <LogoWordmark variant="light" />
            </div>
            <div className="lockupCard" style={{background:'var(--tw-charcoal)'}}>
              <LogoWordmark variant="mint" />
            </div>
          </div>
        </Section>

        <Section title="Color System">
          <p>A unified four-color palette: off?white base, charcoal text, mint aqua primary, and a tangerine accent that signals twist energy.</p>
          <Palette />
        </Section>

        <Section title="Typography">
          <div className="typoRow">
            <div className="typoSample" style={{fontSize:44}}>TwistUp ? Rubik Bold</div>
            <div className="typoP">UI & body: Rubik Regular for friendliness and clarity. Use tight letter?spacing for headings; generous line?height for paragraphs.</div>
          </div>
        </Section>

        <Section title="Packaging Preview">
          <div className="gridTwo">
            <CanMockup flavor="Mint Aqua" />
            <div>
              <h3 style={{marginTop:0}}>Flavor logic</h3>
              <p className="typoP">Mint Aqua drives the primary surface; Tangerine accent cues the twist?cap release. Keep backgrounds clean off?white for retail clarity.</p>
              <div style={{height:16}}/>
              <h4>Do</h4>
              <ul>
                <li>Keep logo large and centered on light surfaces</li>
                <li>Use Tangerine only for accents and calls to action</li>
                <li>Maintain generous negative space</li>
              </ul>
              <h4>Don?t</h4>
              <ul>
                <li>Overuse gradients or textures</li>
                <li>Place logo on busy photos</li>
                <li>Use more than four brand colors</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Downloads">
          <div className="downloads">
            <a className="downloadBtn" href="/assets/twistup-wordmark.svg" download>
              <span className="badgeDot"/> SVG Wordmark
            </a>
            <a className="downloadBtn" href="/assets/favicon.svg" download>
              <span className="badgeDot"/> Favicon
            </a>
            <a className="downloadBtn" href="/assets/twistup-wordmark.svg" target="_blank" rel="noreferrer">
              <span className="badgeDot"/> View Logo
            </a>
          </div>
        </Section>

        <footer className="footer">? {new Date().getFullYear()} TwistUp. Brand identity guidelines.</footer>
      </main>
    </div>
  )
}
