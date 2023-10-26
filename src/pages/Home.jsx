import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const routes = [
    { path: '/filter', label: 'First Reactivity' },
    { path: '/todo', label: 'Second Reactivity' },
    { path: '/validate', label: 'Third Reactivity' },
    { path: '/consume', label: 'Fifth Reactivity' },
    { path: '/contact', label: 'Sixth Reactivity' },
  ]

  const [headerText, setHeaderText] = useState('Home')

  const handleHeaderClick = () => {
    if (headerText === 'Home') {
      setHeaderText('Fourth Reactivity')
    } else {
      setHeaderText('Home')
    }
  }

  return (
    <div
      style={{
        width: 640,
        display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <h1 onClick={handleHeaderClick}>{headerText}</h1>
      {routes.map((route) => (
        <Link key={route.path} to={route.path}>
          <button style={{ width: 160, fontWeight: 500 }}>{route.label}</button>
        </Link>
      ))}
    </div>
  )
}

export default Home
