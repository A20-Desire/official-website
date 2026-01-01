import React from 'react'
import Home from './pages/Home'
import DesvenLanding from './pages/DesvenLanding'

export default function App() {
  const template = import.meta.env.VITE_TEMPLATE?.toLowerCase() ?? 'desven'
  if (template === 'legacy') {
    return <Home />
  }
  return <DesvenLanding />
}
