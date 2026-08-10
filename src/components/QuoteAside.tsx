import { useState } from 'react'
import { QUOTES } from '../quotes'
import './QuoteAside.css'

function randomQuote() {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)]
}

function QuoteAside() {
  const [quote] = useState(randomQuote)

  return (
    <aside className="quote-aside">
      <p className="quote-text">&ldquo;{quote.text}&rdquo;</p>
      <p className="quote-attribution">— {quote.attribution}</p>
    </aside>
  )
}

export default QuoteAside
