import { FunctionComponent } from "preact/src/index.d.ts";
import { Character } from "../routes/index.tsx";

type Data = {
  results: Character
}


export const Personaje:FunctionComponent<Data> = (props) => {
    return (
        <div id="character">
            <img src={props.results.image} width={100} />
            <h3>{props.results.name}</h3>
        </div>
    )

}