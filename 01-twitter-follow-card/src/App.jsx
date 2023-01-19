import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TwiterFollowCard from './TwiterFollowCard'

const users = [
  {
    userName: 'rubxnb',
    name: 'Rubxnb',
    isFollowing: true,
  },
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true,
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

function App() {

  return (
    <section>
      {
        users.map((user)=> (<TwiterFollowCard key={user.userName} user={user} />))

      }
    </section>
    
  )
}

export default App
