import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Characters from "../components/Characters.tsx";
import { Data, getCharacter } from "../utils/rickAPI.ts";

export const handler:Handlers = {
  GET: async(req:Request, ctx:FreshContext) => {
      const url = new URL(req.url)
      const page = url.searchParams.get("page") || "1"
      const numberPage = +page
      const character:Data[] = await getCharacter(numberPage)
      return ctx.render({ character, numberPage })
  }
}


export default function Home(props:PageProps<{character: Data[], numberPage: number}>) {
  const { character, numberPage} = props.data
  return (
    <div id = "index">
      <h1>Personaje de Rick & Morty</h1>
      {character.map(e => <Characters key={e.id} {...e}/>)}
      <div id="change">
        <div class="change_button"><a href={`/?page=${ numberPage - 1 < 1? 1:numberPage-1}`}>Previous</a></div>
        <div class="change_button"><a href={`/?page=${numberPage + 1}`}>Next</a></div>
      </div>
    </div>

  )
}
