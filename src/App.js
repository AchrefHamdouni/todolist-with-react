import React from 'react'
import Forms from './components/Forms.jsx'
import Section from './components/Section.jsx'
import List from './components/List.jsx'

function App() {
  return (
    <div className='ui container center aligned'>
      <Section>
        <h1> Todo App</h1>
      </Section>
      <Section>
        <Forms />
      </Section>
      <Section>
        <List />
      </Section>

    </div>
  )
}

export default App
