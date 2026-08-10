import './App.css'
import QuoteAside from './components/QuoteAside'

interface CaseStudy {
  name: string
  blurb: string
}

const CASE_STUDIES: CaseStudy[] = [
  { name: 'exec-harness', blurb: 'Case study placeholder — content pass pending.' },
  { name: 'model-recurse', blurb: 'Case study placeholder — content pass pending.' },
  { name: 'hub', blurb: 'Case study placeholder — content pass pending.' },
]

function App() {
  return (
    <>
      <section id="hero">
        <h1>Daniel Berryman</h1>
        <p className="positioning">
          Positioning statement placeholder — real copy lands in a
          separate content pass.
        </p>
      </section>

      <section id="case-studies">
        <h2>Selected work</h2>
        <ul>
          {CASE_STUDIES.map((cs) => (
            <li key={cs.name}>
              <h3>{cs.name}</h3>
              <p>{cs.blurb}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Contact details placeholder.</p>
      </section>

      <QuoteAside />
    </>
  )
}

export default App
