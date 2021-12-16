import React from 'react'
import Main from './components/Main'
import NavBar from './components/NavBar'
import data from './data'

export default function App() {
  const items = data.map(item => {
    return (
      <Main
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <div className='app'>
      <NavBar />
      {items}
    </div>
  )
}
