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

const PROOF = [
  '90% fewer code changes per integration',
  'Consent system passed legal and security review',
  '7+ years shipping production software',
]

function SectionHead({ id, label, title }: { id?: string; label: string; title: string }) {
  return (
    <header className="section-head" id={id}>
      <div className="label">{label}</div>
      <h2>{title}</h2>
    </header>
  )
}

function App() {
  return (
    <>
      <Header />

      <main>
        <div className="wrap">
          <section className="hero">
            <p className="hero-kicker">Software engineer · AI systems consultant · New York</p>
            <h1>
              You’re paying for AI inference. <span>Do you trust it yet?</span>
            </h1>
            <p className="hero-copy">
              I build the kit that makes AI work trustworthy. Every result gets checked, agents
              stay inside safe limits, every model call is on the record, and the same work gets
              cheaper over time.
            </p>
            <div className="actions">
              <a className="btn primary" href={`mailto:${EMAIL}`}>
                Talk about your setup
              </a>
              <a className="btn" href="#tests">
                Take the four tests
              </a>
            </div>
            <ul className="proof-strip">
              {PROOF.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </section>

          <section>
            <SectionHead id="tests" label="Four tests" title="Trust is not a feeling. It’s four yes-or-no questions." />
            <ol className="tests">
              {TESTS.map((t, i) => (
                <li className="test" key={t.name}>
                  <span className="box" aria-hidden="true" />
                  <div>
                    <div className="test-num">0{i + 1}</div>
                    <h3>{t.name}</h3>
                    <p>{t.question}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="verdict">
              If any answer is no, demand more from your engineering team or your AI vendor.{' '}
              <a href={`mailto:${EMAIL}`}>Or talk to me.</a>
            </p>
          </section>

          <section>
            <SectionHead id="kit" label="The kit" title="What the kit does" />
            <div className="kit">
              {KIT.map((k) => (
                <div className="kit-part" key={k.name}>
                  <h3>{k.name}</h3>
                  <p>{k.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHead id="work" label="Proof" title="Where I’ve built it" />
            <div className="proof">
              <div className="proof-item">
                <div className="label">New Visions for Public Schools · 2025 – present</div>
                <p>
                  I built an AI trust kit for the engineering team of a multi-tenant student-data
                  platform. Before handing it over, I ran its security review myself and hardened
                  what the review found. Before that, I rebuilt the team’s daily work around an AI
                  coding assistant: I moved repeated model steps into scripts and stored state, and
                  measured a lasting rise in shipped work.
                </p>
              </div>
              <div className="proof-item">
                <div className="label">My own systems · every day</div>
                <p>
                  I run the same kit on my own work. Agents take on tasks, an independent check
                  accepts or rejects each result, and every run leaves a cost record and an audit
                  trail.
                </p>
              </div>
            </div>

            <h3 className="sub-head">Experience</h3>
            <ol className="jobs">
              {JOBS.map((j) => (
                <li className="job" key={j.org}>
                  <div className="label">{j.years}</div>
                  <div>
                    <h4>
                      {j.org} <span>· {j.role}</span>
                    </h4>
                    <p>{j.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="stack">
              TypeScript · Node.js · React · Angular · NestJS · PostgreSQL · MongoDB · Docker · AWS
              · Agent orchestration · Sandboxed execution · Verification
            </p>
            <div className="actions">
              <a className="btn" href={RESUME_PDF} download>
                Download resume (PDF)
              </a>
              <a className="btn" href={RESUME_DOCX} download>
                Download resume (Word)
              </a>
            </div>
          </section>

          <section>
            <SectionHead id="notes" label="Notes" title="How I think about it" />
            <div className="notes">
              {POSTS.map((post) => (
                <article className="note" key={post.title}>
                  <div className="label">{post.category}</div>
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <SectionHead id="about" label="About" title="A little context" />
            <div className="about">
              <img className="about-photo" src="/avatar.jpg" alt="Daniel Berryman" loading="lazy" />
              <div className="about-copy">
                <p>
                  I’m a software engineer in New York. I build the systems that let a company stop
                  checking AI work by hand.
                </p>
                <p>
                  Before software, I spent years as a professional performer. That is where I
                  learned to make a muddled problem clear to a room before anyone acts on it.
                </p>
              </div>
            </div>
          </section>

          <section className="contact">
            <SectionHead id="contact" label="Contact" title="Let’s look at your setup" />
            <p className="contact-copy">
              Tell me how your team uses AI today, and I’ll tell you which of the four tests you
              pass.
            </p>
            <div className="actions">
              <a className="btn primary" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
              <a className="btn" href={LINKEDIN} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <div className="wrap footer-inner">
          <span>© {new Date().getFullYear()} Daniel Berryman</span>
          <div className="footer-links">
            <a href={GITHUB} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${EMAIL}`}>Email</a>
            <a href={RESUME_PDF} download>
              Resume
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
