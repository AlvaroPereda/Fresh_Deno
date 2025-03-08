import Characters from "../components/Characters.tsx";
import { Data, getCharacter } from "../utils/rickAPI.ts";


export default async function Home() {
  const character:Data[] = await getCharacter()
  return (
    <div id = "index">
      <h1>Personaje de Rick & Morty</h1>
      {character.map(e => <Characters key={e.id} {...e}/>)}
    </div>
  )
}
