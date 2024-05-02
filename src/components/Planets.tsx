import { useState, useEffect } from 'react'

export const Planets: React.FC = () => {

  const [planets, setPlanets] = useState<any>(null)

  useEffect(() => {

    const fetchData = async () => {
      const resp = await fetch('https://swapi.dev/api/planets')
      const data = await resp.json()
      setPlanets(data.results)
    }

    fetchData()

  }, [])


  return (
    <>
      <h1>Planety</h1>
      { planets &&
        <ul>
          { planets.map(planet => <li>{planet.name} ({planet.terrain})</li>) }
        </ul>
      }
    </>
  )
}

export default Planets