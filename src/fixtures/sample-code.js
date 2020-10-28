export const USE_STATE_CODE = `
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

export const USE_EFFECT_CODE = `
import React, { useState, useEffect } from 'react'

const MyComponent = () => {
  const [name, setName] = useState('')

  useEffect(() => {
    console.log('console here 1')
  })
  
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

export const USE_CALLBACK_CODE = `
import React, { useState, useCallback } from 'react'

const MyComponent = () => {
  const [name, setName] = useState('')
  
  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleClick = useCallback(() => {
    if(name === 'Johnny') {
      alert('Here comes Johnny')
    }
  }, [name])

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <button onClick={handleClick}>Click me</button>
      {name}
    </div>
  )
}
`

export const BAD_CODE_1 = `
import React, { useState, useEffect } from 'react'

const nameComponent = () => {
  const [name, setName] = useState('Jao');
  
  if(name === 'Jao') {
    useEffect(() => {
      setName('Chi')
    })
  }

  return <div>{name}</div>
}
`

export const BAD_CODE_2 = `
import React, { useState } from 'react'

function addOne(num) {
  const [name, setName] = useState('Jao')

  return num + 1
}

document.getElementById('root').innerHTML = addOne
`

export const GOOD_CODE_1 = `
import React, { useState, useEffect } from 'react'

const nameComponent = () => {
  const [name, setName] = useState('Jao');

  useEffect(() => {
    if(name === 'Jao') {
      setName('Chi')
    }
  }, [])

  return <div>{name}</div>
}
`

export const GOOD_CODE_2 = `
import React, { useState, useEffect } from 'react'

const useName = () => {
  const [name, setName] = useState('Jao')

  useEffect(() => {
    setTimeout(() => {
      setName('Chi')
    }, 5000)
  }, [])

  return name
}

const nameComponent = () => {
  const name = useName()

  return <div>{name}</div>
}
`
export const CUSTOM_HOOKS_CODE = `
import React, { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchSomeData = async () => {
      const result = await fetch(url)
      setData(result.data)
    }

    fetchSomeData()
  }, [url])

  return data
}

const FetchDataComponent = () => {
  const data = useFetch('SomeApiUrl')
  return data ? <div>{data}</div> : <div>No data yet</div>
}
`
