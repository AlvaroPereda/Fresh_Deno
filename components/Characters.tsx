import { FunctionalComponent } from "preact/src/index.d.ts";
import { Data } from "../utils/rickAPI.ts";

const Characters:FunctionalComponent<Data> = (props) => {
    const { id, name, image } = props
    return (
        <div>
            <a href={`/character/${id}`}><img src={image} alt={name} width="150"/></a>
            <p>{name}</p>
        </div>
    )
}

export default Characters