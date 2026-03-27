import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>Seuss Treasury</h1>
      <div style={styles.links}>
        <Link to="/books" style={styles.link}>Books</Link>
        <Link to="/quotes" style={styles.link}>Quotes</Link>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 32px',
    backgroundColor: '#e63946',
    color: 'white',
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
  },
  links: {
    display: 'flex',
    gap: '24px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },
}

export default Nav