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
      'When AI says a task is finished, has something other than the AI proved it?',
  },
  {
    name: 'Safe limits',
    question: 'Do you know what each AI tool can read, change, and send outside your walls?',
  },
  {
    name: 'Moving work',
    question:
      'Can you say how long a request takes to go from Slack to a merged PR, and is that time getting shorter?',
  },
  {
    name: 'Spend that falls',
    question: 'Can you say what one finished task costs, and is it lower than last month?',
  },
  {
    name: 'Free to switch',
    question:
      'Could you change your model provider next month without losing your rules, checks, or context?',
  },
]

interface KitPart {
  name: string
  text: string
}

const DOORS: KitPart[] = [
  {
    name: 'Protect',
    text: 'Your rules for customer data, security, and compliance become checks that every AI change must pass. Your security people can see that the rules hold.',
  },
  {
    name: 'Then flow',
    text: 'Once the checks hold, AI changes are safe to merge. Requests from Slack and tickets become PRs that move quickly and meet your standards.',
  },
]

const KIT: KitPart[] = [
  {
    name: 'A filter on the way in',
    text: 'Tickets and requests pass a PII filter before any model sees them.',
  },
  {
    name: 'Agents off the host',
    text: 'Agents work in a container, never on your machine. A step on the host needs approval. Each agent gets only the access the work needs.',
  },
  {
    name: 'Checks on the way out',
    text: 'Every change passes your checks before it merges: tests, a running app, and guards for databases, PII, and outbound calls. A separate process checks the real result, never the agent’s own report.',
  },
  {
    name: 'Open in the middle',
    text: 'Your team keeps the tools and models it likes. Switch any of them; the checks stay.',
  },
  {
    name: 'A record of every call',
    text: 'For every task you see the model, the cost, what went in, and what came out, in an audit trail that nobody can quietly rewrite.',
  },
  {
    name: 'Stored work',
    text: 'When a model works something out, the kit keeps the result. Repeated steps become plain code, so you stop paying for the same thinking twice.',
  },
]

interface Offer {
  name: string
  price: string
  text: string
}

const OFFERS: Offer[] = [
  {
    name: 'The AI spend review',
    price: '$5,000 · one week',
    text: 'I find what your AI spend buys, where it is wasted, and where your data goes. Read-only access to billing and admin consoles is enough. On Friday you get money to save, risks to close, and one fix already running, such as a spend cap or a data rule. The fee counts toward the build. Founding clients: $2,500 in return for a public case study.',
  },
  {
    name: 'Build your checks',
    price: 'From $30,000 · 90 days',
    text: 'I turn your rules into checks that every AI change must pass, on your own inference. Your team changes one rule on its own before I leave. You own all of it.',
  },
  {
    name: 'Keep it current',
    price: 'From $3,000 a month',
    text: 'New models and tools arrive every month. I test each one against your checks, so you can adopt it with proof.',
  },
  {
    name: 'Or hire me',
    price: 'Full time',
    text: 'I am open to AI engineering and AI enablement roles in New York or remote.',
  },
]

const CUTS: Finding[] = [
  {
    name: 'Context the code could hand over',
    text: 'Code gathers the exact place to change, then one model call makes the change. On the two smallest real changes: $1.43 down to $0.04, and $1.49 down to $0.47. On larger changes the saving shrank, so I split them first.',
  },
  {
    name: 'The wrong model',
    text: 'The cheap model tries first, and a free check decides when to move up. About $2.50 against $3.93 on the top model alone.',
  },
  {
    name: 'Big changes in one go',
    text: 'The same change in four small, checked steps: $0.67 to $1.79, against $7.77 in one call.',
  },
  {
    name: 'Searching for the code',
    text: 'A tool that points the model at the exact code behind a styling change. Searches fell from about 14 to about 4, and cost per change from about $2.50 to $0.85.',
  },
  {
    name: 'Work a script can do',
    text: 'I replaced token burners with plain scripts. One background job went from 103 model calls every 15 minutes to 3.',
  },
  {
    name: 'The model checking itself',
    text: 'Automated checks answer “did it do it?” for free, so no model pays to grade its own work.',
  },
]

interface Finding {
  name: string
  text: string
}

const FOUND: Finding[] = [
  {
    name: 'Development databases open to the Wi-Fi',
    text: 'Mongo and Postgres containers were reachable over the Docker network by anyone on the same Wi-Fi, with no passwords. The fix: bind to localhost, set passwords even in development, and keep real data out.',
  },
  {
    name: 'Shell history inside the agent’s container',
    text: 'The developer’s shell history was mounted into the agent’s container. History holds tokens and passwords, and the agent could read them and send them out. The fix: mount nothing from home by default, and guard outbound calls.',
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

const ROLES = [
  {
    name: 'Software Engineer',
    text: '7+ years shipping production TypeScript, Node, and React.',
  },
  {
    name: 'AI Engineer',
    text: 'Agent systems with sandboxes, independent checks, model routing, and a cost record for every call.',
  },
  {
    name: 'AI Enablement',
    text: 'Roll out AI coding tools to a team, measure what they cost and gain, and keep them safe.',
  },
]

const PROOF = [
  'About 35% lower model cost by routing on a free check',
  'Small changes 68–97% cheaper with code-gathered context',
  'Agent kit passed a security review',
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
            <p className="hero-kicker">Software engineer · AI engineer · Open to full-time and consulting</p>
            <h1>
              You’re paying for AI inference. <span>Do you trust it yet?</span>
            </h1>
            <p className="hero-copy">
              In one week, I find what your AI spend buys, cut the waste, and check where your
              data goes. Then I build the checks that let your engineers use AI fully and safely.
            </p>
            <div className="actions">
              <a className="btn primary" href={`mailto:${EMAIL}?subject=AI%20spend%20review`}>
                Book an AI spend review
              </a>
              <a className="btn" href="#tests">
                Take the five tests
              </a>
            </div>
            <ul className="proof-strip">
              {PROOF.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </section>

          <section>
            <SectionHead id="open-to" label="Open to" title="Roles I’m open to" />
            <div className="kit roles">
              {ROLES.map((r) => (
                <div className="kit-part" key={r.name}>
                  <h3>{r.name}</h3>
                  <p>{r.text}</p>
                </div>
              ))}
            </div>
            <p className="verdict">Full-time, contract, or consulting. New York or remote.</p>
            <div className="actions">
              <a className="btn primary" href={`mailto:${EMAIL}`}>
                Email me
              </a>
              <a className="btn" href={RESUME_PDF} download>
                Resume (PDF)
              </a>
            </div>
          </section>

          <section>
            <SectionHead id="tests" label="Five tests" title="Trust is not a feeling. It’s five yes-or-no questions." />
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
            <SectionHead
              id="promise"
              label="The promise"
              title="Use AI fully, without risking your customers’ data or your standards."
            />
            <div className="kit">
              {DOORS.map((d) => (
                <div className="kit-part" key={d.name}>
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHead id="kit" label="The kit" title="Fixed at both ends, open in the middle" />
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
                <div className="label">A team on a multi-tenant data platform · current role</div>
                <p>
                  I built a team kit so every engineer could use AI coding agents safely. Tickets
                  come in through a PII filter. Agents work in containers, never on the host.
                  Every result passes checks and guards for tests, databases, PII, and outbound
                  calls. The middle stays open to any tool. It runs on the team’s own inference,
                  and it stays with them.
                </p>
              </div>
              <div className="proof-item">
                <div className="label">My own systems · every day</div>
                <p>
                  I run my own systems this way every day. I write the goals, rules, and checks;
                  AI writes the code inside them; a separate check accepts or rejects each result
                  before anything ships.
                </p>
              </div>
            </div>

            <h3 className="sub-head">What I’ve already cut</h3>
            <p className="verdict">
              Measured on my own work, priced at Claude Opus API rates. Small samples: a direction,
              not a promise.
            </p>
            <div className="kit found">
              {CUTS.map((c) => (
                <div className="kit-part" key={c.name}>
                  <h3>{c.name}</h3>
                  <p>{c.text}</p>
                </div>
              ))}
            </div>

            <h3 className="sub-head">Things I found recently</h3>
            <div className="kit found">
              {FOUND.map((f) => (
                <div className="kit-part" key={f.name}>
                  <h3>{f.name}</h3>
                  <p>{f.text}</p>
                </div>
              ))}
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
            <SectionHead id="offers" label="Work with me" title="Start small. Own all of it." />
            <div className="offers">
              {OFFERS.map((o) => (
                <div className="proof-item offer" key={o.name}>
                  <div className="label">{o.name}</div>
                  <div className="offer-price">{o.price}</div>
                  <p>{o.text}</p>
                </div>
              ))}
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
            <SectionHead id="contact" label="Contact" title="Let’s talk" />
            <p className="contact-copy">
              Tell me your monthly AI bill and how your team uses AI today. I’ll tell you which of
              the five tests you pass. Hiring? I’m open to full-time roles.
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
