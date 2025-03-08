import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Episode from "../../components/Episode.tsx";
import { EpisodeID, getCharacterIDFromEpisode, getEpisodeID } from "../../utils/rickAPI.ts";

export const handler:Handlers = {
    GET: async(_req:Request, ctx:FreshContext<unknown, EpisodeID>) => {
        const { id } = ctx.params
        const episode = await getEpisodeID(id)
        const character = await Promise.all(episode.characters.map(e => getCharacterIDFromEpisode(e.split("/").pop()!)))
        const mezcla = {
            ...episode,
            characters: character
        }
        return ctx.render(mezcla)
    }
}

const Page = (props:PageProps<EpisodeID>) => {
    return <Episode {...props.data}/>
}

export default Page