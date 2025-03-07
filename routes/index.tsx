import NextId from "../components/NextId.tsx";
import { Personaje } from "../components/Personaje.tsx"

export type Character = {
  id: number,
  name: string,
  status: string,
  species: string,
  gender: string,
  image: string,
  origin: {
    name: string
  }
  episode: string 
}
type Data = {
  results: Character[]
}

const getCharacter = async() => {
  const url = "https://rickandmortyapi.com/api/character"
  const data = await fetch(url)
  return await data.json()
}


export default async function Home() {
  const character:Data = await getCharacter()
  return (
    <div id="main">
      <h1>Personajes de Rick & Morty</h1>
      <div id="almacen">
        {character.results.map(e => <Personaje key={e.id} results={e}/>)}
      </div>
      <NextId id = {0}/>
    </div>
  );
}
