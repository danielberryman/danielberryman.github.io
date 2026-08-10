import './App.css'
import Header from './components/Header'

interface Post {
  date: string
  title: string
  summary: string
  category: string
  readTime: string
}

const POSTS: Post[] = [
  {
    date: 'Aug 10, 2026',
    title: 'Verification Doesn’t Take Your Word For It',
    summary:
      'An agent that says “done” isn’t the same thing as done. I build systems where a task’s own report of success never gets trusted — a separate process checks the actual, real-world state the task was supposed to change, and only then does the result get sealed. It sounds paranoid until you watch a worker confidently report success on something that silently didn’t happen.',
    category: 'Verification',
    readTime: '1 min',
  },
  {
    date: 'Aug 10, 2026',
    title: 'A Gate That Can Never Fail You Isn’t a Gate',
    summary:
      'Most “quality checks” quietly become theater the moment the thing being checked also controls the checking. I design evaluation as an adversarial relationship: the judge is a separate party from the work, and it has to be provably capable of saying no — not just capable of saying yes with reservations. No blending, no partial credit on the checks that actually matter.',
    category: 'Evaluation',
    readTime: '1 min',
  },
  {
    date: 'Aug 10, 2026',
    title: 'Yesterday’s Trust Doesn’t Carry Over',
    summary:
      'Code that was trustworthy when it was written isn’t automatically trustworthy when it runs — those are two different moments with two different threat models, and conflating them is how self-graded systems cheat without anyone noticing. I treat build-time and run-time as separate trust zones by default, with no implicit handoff between them.',
    category: 'Architecture',
    readTime: '1 min',
  },
]

interface Note {
  status: string
  name: string
  blurb: string
}

const NOTES: Note[] = [
  {
    status: 'Active',
    name: 'exec-harness',
    blurb: 'Sandboxed agent execution, independent verification, and immutable attestations.',
  },
  {
    status: 'Active',
    name: 'hub',
    blurb: 'A personal orchestration layer for routing work, persistent state, approvals, and services.',
  },
  {
    status: 'Active',
    name: 'model-recurse',
    blurb: 'Turning model reasoning into persistent deterministic operations that can be composed and reused.',
  },
]

function App() {
  return (
    <>
      <Header />

      <main>
        <div className="wrap">
          <section className="intro">
            <div className="kicker eyebrow">Software / systems / autonomous execution</div>
            <h1>
              I build systems that <span>need less watching.</span>
            </h1>
            <p className="intro-copy">
              I’m a software engineer interested in <strong>AI-native engineering, autonomous
              execution, verification, and durable organizational knowledge.</strong> This site
              is mostly notes from building those systems.
            </p>
          </section>

          <section id="writing">
            <header className="section-heading">
              <div className="section-label eyebrow">Recent</div>
              <h2>Writing</h2>
            </header>

            <ol className="post-list">
              {POSTS.map((post) => (
                <li className="post" key={post.title}>
                  <time className="post-date eyebrow">{post.date}</time>
                  <div>
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-summary">{post.summary}</p>
                    <div className="post-meta eyebrow">
                      <span>{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="notes">
            <header className="section-heading">
              <div className="section-label eyebrow">Building</div>
              <h2>Project notes</h2>
            </header>

            <div className="notes">
              {NOTES.map((note) => (
                <div className="note" key={note.name}>
                  <small className="eyebrow">{note.status}</small>
                  <h3>{note.name}</h3>
                  <p>{note.blurb}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="about">
            <header className="section-heading">
              <div className="section-label eyebrow">About</div>
              <h2>A little context</h2>
            </header>

            <div className="about-grid">
              <div className="about-mark" aria-hidden="true">
                +
              </div>
              <div className="about-copy">
                <p>
                  I’m a software engineer interested in the infrastructure around increasingly
                  autonomous systems.
                </p>
                <p>
                  Most of my work revolves around a fairly simple question:{' '}
                  <strong>
                    what has to become explicit, deterministic, and verifiable before we can
                    safely stop supervising the execution itself?
                  </strong>
                </p>
                <p>I write here about what I’m building, what isn’t working, and the architectural ideas underneath it.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <div className="wrap footer-inner">
          <h2 className="footer-title">
            Daniel
            <br />
            <span>Berryman</span>
          </h2>

          <div className="footer-links eyebrow">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Email</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
