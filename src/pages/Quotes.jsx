import { useState, useEffect } from 'react'

function Quotes() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
      .then(response => response.json())
      .then(data => setQuotes(data))
  }, [])

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Dr. Seuss Quotes</h2>
      <div style={styles.list}>
        {quotes.map(quote => (
          <div key={quote.id} style={styles.card}>
            <p style={styles.quote}>"{quote.quote}"</p>
            <p style={styles.book}>— {quote.book.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: { padding: '32px', maxWidth: '800px', margin: '0 auto' },
  heading: { textAlign: 'center', marginBottom: '32px', fontSize: '1.8rem', color: '#333' },
  list: { display: 'flex', flexDirection: 'column', gap: '20px' },
  card: { backgroundColor: '#fff8f0', border: '1px solid #f4c78e', borderLeft: '5px solid #e63946', borderRadius: '8px', padding: '20px 24px' },
  quote: { fontSize: '1.1rem', fontStyle: 'italic', color: '#333', margin: '0 0 10px 0', lineHeight: '1.6' },
  book: { margin: 0, fontSize: '0.95rem', color: '#888', textAlign: 'right', fontWeight: 'bold' },
}

export default Quotes