import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Character } from "../index.tsx";

type Data = {
    character: Character
}

const getCharacter = async(id: string) => {
    const url = `https://rickandmortyapi.com/api/character/${id}`
    const data = await fetch(url)
    return await data.json()
  }

export const handler: Handlers = {
    GET: async(_req: Request, ctx: FreshContext<unknown, Data>) => {
       const { id } = ctx.params
       const character:Character = await getCharacter(id)
       return ctx.render({character})
    }
}

const Page = (props: PageProps<Data>) => {    
    const { character } = props.data
    debugger
    return (
        <div>
            <h1>{character.name}</h1>
            <p>{character.gender}</p>
            <p>{character.species}</p>
            <p>{character.status}</p>
        </div>
    )
}

export default Page