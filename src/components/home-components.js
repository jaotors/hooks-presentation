import React from 'react'
import styled from 'styled-components/macro'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'

export const PageBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 50px;
`

export const Description = styled.p`
  font-size: 30px;
`

export const Code = ({ code, language = 'javascript' }) => {
  return (
    <SyntaxHighlighter language={language} style={okaidia}>
      {code}
    </SyntaxHighlighter>
  )
}

export const Group = styled.div`
  display: flex;
  justify-content: space-between;
`
export const IconBlock = styled.span`
  width: 70px;
  margin: 0 auto;
  display: block;

  svg {
    color: ${props => props.color};
  }
`
