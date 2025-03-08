import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Character from "../../components/Character.tsx";
import { DataID, getCharacterID } from "../../utils/rickAPI.ts";

export const handler:Handlers = {
    GET: async(_req:Request, ctx:FreshContext<unknown, DataID>) => {
        const { id } = ctx.params
        const character:DataID = await getCharacterID(id)
        return ctx.render(character)
    }
}

const Page = (props:PageProps<DataID>) => {
    return <Character {...props.data}/>
}

export default Page