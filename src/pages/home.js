import React, { useState, useEffect } from 'react'
import 'styled-components/macro'
import { Close as CloseIcon } from '@styled-icons/evaicons-solid'
import { Check as CheckIcon } from '@styled-icons/boxicons-regular'
import { HappyBeaming } from '@styled-icons/boxicons-solid'

import {
  PageBlock,
  Title,
  Description,
  Code,
  Group,
  IconBlock,
} from '../components/home-components'

import {
  USE_STATE_CODE,
  USE_EFFECT_CODE,
  USE_CALLBACK_CODE,
  BAD_CODE_1,
  BAD_CODE_2,
  GOOD_CODE_1,
  GOOD_CODE_2,
  CUSTOM_HOOKS_CODE,
} from '../fixtures/sample-code'

const Home = () => {
  const [page, setPage] = useState(0)

  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight')
        setPage(state => (state < 14 ? ++state : state))
      if (e.key === 'ArrowLeft') setPage(state => (state > 0 ? --state : state))
      if (e.key === 'End') setPage(12)
      if (e.key === 'Home') setPage(0)
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
        <Title>REACT HOOKS based on my experience</Title>
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
          <li>
            <Description>
              <a href="https://www.smashingmagazine.com/2020/04/react-hooks-best-practices/">
                Best Practices With React Hooks
              </a>
            </Description>
          </li>
          <li>
            <Description>
              <a href="https://kentcdodds.com/blog/usememo-and-usecallback">
                When to useMemo and useCallback
              </a>
            </Description>
          </li>
          <li>
            <Description>
              <a href="https://dmitripavlutin.com/dont-overuse-react-usecallback/">
                Your Guide to React.useCallback()
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
        <Code code={USE_STATE_CODE} />
      </PageBlock>
      <PageBlock id="3">
        <Title>Hooks that I usually use</Title>
        <ul>
          <li>
            <Description>useState</Description>
          </li>
          <li>
            <Description>useEffect</Description>
          </li>
          <li>
            <Description>useCallback</Description>
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
      <PageBlock id="6">
        <Title>useCallback</Title>
        <Code code={USE_CALLBACK_CODE} />
      </PageBlock>
      <PageBlock id="7">
        <Title>There are 2 Rules of Hooks</Title>
      </PageBlock>
      <PageBlock id="8">
        <Description>Use it on Top level.</Description>
        <Description>
          (conditions, loop or nested functions are noppeee)
        </Description>
        <Group>
          <div css={'margin: 10px;'}>
            <IconBlock color="red">
              <CloseIcon />
            </IconBlock>
            <Code code={BAD_CODE_1} />
          </div>
          <div css={'margin: 10px;'}>
            <IconBlock color="green">
              <CheckIcon />
            </IconBlock>
            <Code code={GOOD_CODE_1} />
          </div>
        </Group>
      </PageBlock>
      <PageBlock id="9">
        <Description>
          Only call hooks from React functional components
        </Description>
        <Group>
          <div css={'margin: 10px;'}>
            <IconBlock color="red">
              <CloseIcon />
            </IconBlock>
            <Code code={BAD_CODE_2} />
          </div>
          <div css={'margin: 10px;'}>
            <IconBlock color="green">
              <CheckIcon />
            </IconBlock>
            <Code code={GOOD_CODE_2} />
          </div>
        </Group>
      </PageBlock>
      <PageBlock id="10">
        <Title>Custom Hooks</Title>
      </PageBlock>
      <PageBlock id="11">
        <Title>TADA</Title>
        <Code code={CUSTOM_HOOKS_CODE} />
      </PageBlock>
      <PageBlock id="12">
        <Title>Other Hooks</Title>
        <Description>
          Sorry can't discuss this now{' '}
          <IconBlock>
            <HappyBeaming />
          </IconBlock>
        </Description>
        <ul>
          <li>
            <Description>useContext</Description>
          </li>
          <li>
            <Description>useReducer</Description>
          </li>
          <li>
            <Description>useMemo</Description>
          </li>
          <li>
            <Description>useRef</Description>
          </li>
          <li>
            <Description>useImperativeHandle</Description>
          </li>
          <li>
            <Description>useLayoutEffect</Description>
          </li>
          <li>
            <Description>useDebugValue</Description>
          </li>
        </ul>
      </PageBlock>
      <PageBlock id="13">
        <Title>Questions?</Title>
      </PageBlock>
      <PageBlock id="14">
        <Title>Thanks</Title>
      </PageBlock>
    </>
  )
}

export default Home
