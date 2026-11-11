import './App.css'
import Header from './components/Header'

const EMAIL = 'dberrymandev@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/daniel-berryman'
const GITHUB = 'https://github.com/danielberryman'
const RESUME_PDF = '/resume/Daniel_Berryman_Resume.pdf'
const RESUME_DOCX = '/resume/Daniel_Berryman_Resume.docx'

interface Test {
  name: string
  question: string
}

const TESTS: Test[] = [
  {
    name: 'Done means done',
    question:
      'When your system says a task is finished, has something other than the agent proved it?',
  },
  {
    name: 'Secure',
    question: 'Do you know what each agent can read, change, and send outside your walls?',
  },
  {
    name: 'Visible spend',
    question: 'Can you say what one finished task costs?',
  },
  {
    name: 'Cheaper over time',
    question: 'Does the same work cost less this month than last month?',
  },
]

interface KitPart {
  name: string
  text: string
}

const KIT: KitPart[] = [
  {
    name: 'Independent checks',
    text: 'A separate process checks each result against the real outcome, never against the agent’s own report. Each result is sealed into an audit trail that nobody can quietly rewrite.',
  },
  {
    name: 'Gates at the edges',
    text: 'Agents run in a sandbox with only the access they need. Data passes a filter before it reaches an outside model. What can’t be made safe gets refused, not routed around.',
  },
  {
    name: 'A record of every call',
    text: 'For every task you see the model, the cost, what went in, and what came out.',
  },
  {
    name: 'Stored work',
    text: 'When a model works something out, the kit keeps the result. Repeated steps become plain code, so you stop paying for the same thinking twice.',
  },
]

interface Job {
  org: string
  role: string
  years: string
  text: string
}

const JOBS: Job[] = [
  {
    org: 'New Visions for Public Schools',
    role: 'Software Engineer Consultant',
    years: '2025 – present',
    text: 'Shipped about 100 PRs on a multi-tenant student-data platform. Built an electronic parental-consent system end to end in two weeks; it passed legal and security review.',
  },
  {
    org: 'Marin Software',
    role: 'Software Engineer',
    years: '2022 – 2024',
    text: 'Built a rule-driven integration service that cut code changes for new integrations by 90%. Cut customer onboarding time by 85%.',
  },
  {
    org: 'Herff Jones',
    role: 'Software Engineer',
    years: '2019 – 2022',
    text: 'Fixed 300+ production issues in the first year, and documented an undocumented system for the whole team.',
  },
]

interface Post {
  title: string
  summary: string
  category: string
}

const POSTS: Post[] = [
  {
    title: 'Verification Doesn’t Take Your Word For It',
    summary:
      'An agent that says “done” isn’t the same thing as done. I build systems where a task’s own report of success never gets trusted — a separate process checks the actual, real-world state the task was supposed to change, and only then does the result get sealed.',
    category: 'Verification',
  },
  {
    title: 'A Gate That Can Never Fail You Isn’t a Gate',
    summary:
      'Most “quality checks” quietly become theater the moment the thing being checked also controls the checking. The judge has to be a separate party from the work, and it has to be provably capable of saying no.',
    category: 'Evaluation',
  },
  {
    title: 'Yesterday’s Trust Doesn’t Carry Over',
    summary:
      'Code that was trustworthy when it was written isn’t automatically trustworthy when it runs. I treat build time and run time as separate trust zones by default, with no implicit handoff between them.',
    category: 'Architecture',
  },
]

function App() {
  return (
    <>
      <Header />

      <main>
        <div className="wrap">
          <section className="intro">
            <div className="kicker eyebrow">
              Software engineer · AI systems consultant · New York
            </div>
            <h1>
              You’re paying for AI inference. <span>Can you trust it yet?</span>
            </h1>
            <p className="intro-copy">
              I build the kit that makes AI work trustworthy.{' '}
              <strong>
                Every result gets checked, agents stay inside safe limits, every model call is on
                the record, and the same work gets cheaper over time.
              </strong>
            </p>
            <div className="actions">
              <a className="btn primary eyebrow" href={`mailto:${EMAIL}`}>
                Talk about your setup
              </a>
              <a className="btn eyebrow" href={LINKEDIN} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </section>

          <section id="tests">
            <header className="section-heading">
              <div className="section-label eyebrow">Four tests</div>
              <h2>Trust is not a feeling. It’s four yes-or-no questions.</h2>
            </header>

            <ol className="post-list tests">
              {TESTS.map((t, i) => (
                <li className="post" key={t.name}>
                  <span className="post-date eyebrow">0{i + 1}</span>
                  <div>
                    <h3 className="post-title">{t.name}</h3>
                    <p className="post-summary">{t.question}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="verdict">
              If any answer is no, demand more from your engineering team or your AI vendor.{' '}
              <a href={`mailto:${EMAIL}`}>Or talk to me.</a>
            </p>
          </section>

          <section id="kit">
            <header className="section-heading">
              <div className="section-label eyebrow">The kit</div>
              <h2>What the kit does</h2>
            </header>

            <div className="notes">
              {KIT.map((k) => (
                <div className="note" key={k.name}>
                  <h3>{k.name}</h3>
                  <p>{k.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="work">
            <header className="section-heading">
              <div className="section-label eyebrow">Proof</div>
              <h2>Where I’ve built it</h2>
            </header>

            <div className="proof">
              <div className="proof-item">
                <small className="eyebrow">New Visions for Public Schools · 2025 – present</small>
                <p>
                  I built an AI trust kit for the engineering team of a multi-tenant student-data
                  platform. Before handing it over, I ran its security review myself and hardened
                  what the review found. Before that, I rebuilt the team’s daily work around an AI
                  coding assistant: I moved repeated model steps into scripts and stored state, and
                  measured a lasting rise in shipped work.
                </p>
              </div>
              <div className="proof-item">
                <small className="eyebrow">My own systems · every day</small>
                <p>
                  I run the same kit on my own work. Agents take on tasks, an independent check
                  accepts or rejects each result, and every run leaves a cost record and an audit
                  trail.
                </p>
              </div>
            </div>

            <header className="section-heading sub">
              <div className="section-label eyebrow">Experience</div>
              <h2>Production record</h2>
            </header>

            <ol className="jobs">
              {JOBS.map((j) => (
                <li className="job" key={j.org}>
                  <span className="post-date eyebrow">{j.years}</span>
                  <div>
                    <h3>
                      {j.org} <span>· {j.role}</span>
                    </h3>
                    <p>{j.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="stack eyebrow">
              TypeScript · Node.js · React · Angular · NestJS · PostgreSQL · MongoDB · Docker · AWS
              · Agent orchestration · Sandboxed execution · Verification
            </p>
            <div className="actions">
              <a className="btn eyebrow" href={RESUME_PDF} download>
                Résumé (PDF)
              </a>
              <a className="btn eyebrow" href={RESUME_DOCX} download>
                Résumé (Word)
              </a>
            </div>
          </section>

          <section id="notes">
            <header className="section-heading">
              <div className="section-label eyebrow">Notes</div>
              <h2>How I think about it</h2>
            </header>

            <ol className="post-list">
              {POSTS.map((post) => (
                <li className="post" key={post.title}>
                  <span className="post-date eyebrow">{post.category}</span>
                  <div>
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-summary">{post.summary}</p>
                  </div>
                </li>
              ))}
            </ol>
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
                  I’m a software engineer in New York. I build the systems that let a company{' '}
                  <strong>stop checking AI work by hand.</strong>
                </p>
                <p>
                  Before software, I spent years as a professional performer. That is where I
                  learned to make a muddled problem clear to a room before anyone acts on it.
                </p>
              </div>
            </div>
          </section>

          <section id="contact" className="contact">
            <header className="section-heading">
              <div className="section-label eyebrow">Contact</div>
              <h2>Let’s look at your setup</h2>
            </header>
            <p className="contact-copy">
              Tell me how your team uses AI today, and I’ll tell you which of the four tests you
              pass.
            </p>
            <a className="contact-mail" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
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
            <a href={GITHUB} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${EMAIL}`}>Email</a>
            <a href={RESUME_PDF} download>
              Résumé
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
