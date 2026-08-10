export interface Quote {
  text: string
  attribution: string
}

// Hand-picked, hardcoded on purpose -- see the portfolio-plan.md follow-up
// item for the real "day in the life" version (Ollama-paraphrased, approval-
// gated) this is standing in for until that gets its own pass.
export const QUOTES: Quote[] = [
  {
    text: 'Modules should be deep: they should have simple interfaces that hide significant implementation complexity.',
    attribution: 'John Ousterhout, A Philosophy of Software Design',
  },
  {
    text: 'Adding manpower to a late software project makes it later.',
    attribution: 'Fred Brooks, The Mythical Man-Month',
  },
  {
    text: 'Simplicity is a prerequisite for reliability.',
    attribution: 'Edsger W. Dijkstra',
  },
  {
    text: 'Simple things should be simple, complex things should be possible.',
    attribution: 'Alan Kay',
  },
  {
    text: "A distributed system is one in which the failure of a computer you didn't even know existed can render your own computer unusable.",
    attribution: 'Leslie Lamport',
  },
  {
    text: 'All problems in computer science can be solved by another level of indirection.',
    attribution: 'David Wheeler',
  },
]
