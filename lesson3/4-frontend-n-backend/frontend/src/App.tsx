import { useEffect, useState } from 'react'

interface Person {
  name: string
  age: number
  skills: string[]
}

const App = () => {
  const [person, setPerson] = useState<Person | null>(null)

  useEffect(() => {
    fetch('http://localhost:3000')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setPerson(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <div>
      {person && (
        <div>
          <h1>{person.name}</h1>
          <h2>{person.age}</h2>
          <h3>{person.skills.join(', ')}</h3>
        </div>
      )}
    </div>
  )
}

export default App
