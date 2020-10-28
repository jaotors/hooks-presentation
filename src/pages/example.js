import React, { useState, useCallback, useEffect } from 'react'

const MyComponent = () => {
  const [name, setName] = useState('')

  const handleNameChange = e => {
    setName(e.target.value)
  }

  const handleClick = useCallback(() => {
    if (name === 'Johnny') {
      alert('HERE COMES JOHNNY')
    }
  }, [name])

  useEffect(() => {
    console.log('1st useEffect Name: ', name)
  }, [])

  useEffect(() => {
    console.log('2nd useEffect Name: ', name)
  }, [name])

  return (
    <div>
      <div>
        <input value={name} onChange={handleNameChange} />
      </div>
      <div>
        <button onClick={handleClick}>Click me</button>
      </div>
      <p>{name}</p>
    </div>
  )
}

export default MyComponent
