import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Books() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then(response => response.json())
      .then(data => setBooks(data))
  }, [])

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Dr. Seuss Books</h2>
      <div style={styles.grid}>
        {books.map(book => (
          <Link to={`/books/${book.id}`} key={book.id} style={styles.card}>
            <img src={book.image} alt={book.title} style={styles.image} />
          </Link>
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: { padding: '32px' },
  heading: { textAlign: 'center', marginBottom: '24px', fontSize: '1.8rem', color: '#333' },
  grid: { display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' },
  card: { display: 'inline-block', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' },
  image: { width: '160px', height: '220px', objectFit: 'cover', display: 'block' },
}

export default Books