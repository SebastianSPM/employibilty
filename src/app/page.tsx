'use client'
import { getCharacters } from "@/services/api"
import { Card } from "@/components/ui/Card"
import { useEffect, useState } from "react"
import { Character } from "@/types/character"

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Cargando...</p>

  return (
    <div>
      <h1>Rick and Morty</h1>
      {characters.map((char:Character) => (
        <div key={char.id}>
          <h3>{char.name}</h3>
          <Card
            title={char.name}
            description={char.description}
            imageUrl={char.image}
            onClick={() => getCharacters()}
          />
        </div>
      ))}
    </div>
  )
}
