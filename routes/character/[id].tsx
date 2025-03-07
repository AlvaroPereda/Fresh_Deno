import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import PersonajeDetallado from "../../components/PersonajeDetallado.tsx";


type Character = {
    id: number,
    name: string,
    status: string,
    species: string,
    gender: string,
    image: string,
    origin: {
      name: string
    }
    episode: string[] 
}

type DataEpisode = {
    name: string
}

export const getCharacter = async(id: string):Promise<Character> => {
    const url = `https://rickandmortyapi.com/api/character/${id}`
    const data = await fetch(url)
    return await data.json()
  }

  const getNameEpisode = async(episode: string):Promise<string> => {
    const data = await fetch(episode)
    const result:DataEpisode = await data.json()
    return result.name
  }


export const handler: Handlers = {
    GET: async(_req: Request, ctx: FreshContext<unknown, Character>) => {
       const { id } = ctx.params
       try{
       const character:Character = await getCharacter(id)
       character.episode = await Promise.all(character.episode.map((e) => getNameEpisode(e)))
       return ctx.render({...character})
       }catch(e) {
        return new Response("Error " + e)
       }
    }
}

const Page = (props: PageProps<Character>) => {    
    return <PersonajeDetallado {...props.data}/>
}

export default Page