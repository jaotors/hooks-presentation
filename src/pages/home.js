import React, { useState, useEffect } from 'react'
import 'styled-components/macro'

import {
  PageBlock,
  Title,
  Description,
  Code,
} from '../components/home-components'

const USE_STATE_CODE = `
import React, { useState } from 'react'

const MyComponent = () => {
  const [name, setName] = useState('')
  
  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      {name}
    </div>
  )
}
`

const USE_EFFECT_CODE = `
import React, { useState, useEffect } from 'react'

const MyComponent = () => {
  const [name, setName] = useState('')
  
  useEffect(() => {
    console.log('console here 1')
  }, [])

  useEffect(() => {
    console.log('console here 2')
  }, [name])

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      {name}
    </div>
  )
}
`

const Home = () => {
  const [page, setPage] = useState(0)

  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') setPage(state => ++state)
      if (e.key === 'ArrowLeft') setPage(state => --state)
    })
  }, [])

  useEffect(() => {
    if (page > -1) {
      window.location = '#' + page
      // window.location = '#4'
    }
  }, [page])

  return (
    <>
      <PageBlock id="0">
        <Title>REACT HOOKS base on my experience</Title>
      </PageBlock>
      <PageBlock id="1">
        <Title>Resources</Title>
        <ul>
          <li>
            <Description>
              <a href="https://youtu.be/dpw9EHDh2bM?t=1060">
                React Today and Tomorrow and 90% Cleaner React With Hooks
              </a>
            </Description>
          </li>
          <li>
            <Description>
              <a href="https://reactjs.org/docs/hooks-overview.html">
                Hooks at a Glance
              </a>
            </Description>
          </li>
        </ul>
      </PageBlock>
      <PageBlock id="2">
        <Title>Hooks</Title>
        <Description>
          They let you use state and other React features without writing a
          class.
        </Description>
      </PageBlock>
      <PageBlock id="3">
        <Title>Funcations that I usually use</Title>
        <ul>
          <li>
            <Description>useState</Description>
          </li>
          <li>
            <Description>useEffect</Description>
          </li>
        </ul>
      </PageBlock>
      <PageBlock id="4">
        <Title>useState</Title>
        <Code code={USE_STATE_CODE} />
      </PageBlock>
      <PageBlock id="5">
        <Title>useEffect</Title>
        <Code code={USE_EFFECT_CODE} />
      </PageBlock>
    </>
  )
}

export default Home
