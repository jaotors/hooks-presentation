import React from 'react'
import Layout from '../components/layout'
import Home from './home'
import 'styled-components/macro'

const App = () => {
  return (
    <Layout>
      <div
        css={`
          width: 100%;
          height: 100vh;
          font-family: 'Open Sans', sans-serif;
          overflow: hidden;
        `}
      >
        <Home />
      </div>
    </Layout>
  )
}

export default App
