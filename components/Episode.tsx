import { FunctionalComponent } from "preact/src/index.d.ts";
import { EpisodeID } from "../utils/rickAPI.ts";
import Characters from "./Characters.tsx";

const Episode:FunctionalComponent<EpisodeID> = (props) => {
    const { name, air_date, episode, characters } = props
    return (
        <div class="episode_container">
            <div class="hero">
                <h1>{name}</h1>
                <a href="/"><img src="/rick.png" alt="Home" width="50px"/></a>
            </div>
            <h3><strong>Date: </strong>{air_date}</h3>
            <p>Episode: {episode}</p>
            <div id="index">
                {characters.map(e => <Characters key={e.id} {...e}/>)}
            </div>
        </div>
    )
}

export default Episode