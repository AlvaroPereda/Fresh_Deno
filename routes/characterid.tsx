import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Character } from "./index.tsx";
import { Personaje } from "../components/Personaje.tsx"
import { getCharacter } from "./character/[id].tsx";
import NextId from "../components/NextId.tsx";

export const handler:Handlers = {
    GET: async (req: Request, ctx: FreshContext<unknown>) => {
        const url = new URL(req.url)
        const character = await getCharacter(url.searchParams.get("id") || "1")
        return ctx.render(character)
    }
}

const Page = (props:PageProps<Character>) => {
    return (
        <div class="characters">
            <Personaje results={props.data}/>
            <NextId id={props.data.id}/>
        </div>
    )
}

export default Page