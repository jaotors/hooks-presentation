import React, { useState, useEffect } from 'react'

const MyComponent = () => {
  const [name, setName] = useState('')

  const handleNameChange = e => {
    setName(e.target.value)
  }

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

export default MyComponent
