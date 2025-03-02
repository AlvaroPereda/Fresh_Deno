import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Personaje } from "../../components/Personaje.tsx";
import { Character } from "../index.tsx";

type Data = {
    character: Character
}

export const getCharacter = async(id: string) => {
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
        <div class="personaje_id">
           <Personaje results={character}/>
        </div>
    )
}

export default Page