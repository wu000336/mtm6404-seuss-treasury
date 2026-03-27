import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function BookDetail() {
  const { id } = useParams()
  const [book, setBook] = useState(null)

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then(response => response.json())
      .then(data => setBook(data))
  }, [id])

  if (!book) {
    return <p style={{ textAlign: 'center', marginTop: '60px' }}>Loading...</p>
  }

  return (
    <div style={styles.container}>
      <Link to="/books" style={styles.back}>← Back to Books</Link>
      <div style={styles.detail}>
        <img src={book.image} alt={book.title} style={styles.image} />
        <div style={styles.info}>
          <h2 style={styles.title}>{book.title}</h2>
          <p style={styles.description}>{book.description}</p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: { padding: '32px', maxWidth: '900px', margin: '0 auto' },
  back: { display: 'inline-block', marginBottom: '24px', color: '#e63946', textDecoration: 'none', fontWeight: 'bold' },
  detail: { display: 'flex', gap: '40px', alignItems: 'flex-start' },
  image: { width: '220px', height: '300px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', flexShrink: 0 },
  info: { flex: 1 },
  title: { fontSize: '2rem', marginTop: 0, color: '#333' },
  description: { fontSize: '1.1rem', lineHeight: '1.7', color: '#555' },
}

export default BookDetail