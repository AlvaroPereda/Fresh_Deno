
export type Character = {
  id: number,
  name: string
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
    <div>
      <h1>Personajes de Rick & Morty</h1>
      <ul>
        {character.results.map(e => <li>{e.name}</li>)}
      </ul>
    </div>
  );
}
