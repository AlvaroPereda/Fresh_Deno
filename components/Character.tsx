import { FunctionalComponent } from "preact/src/index.d.ts";
import { DataID } from "../utils/rickAPI.ts";

const Character:FunctionalComponent<DataID> = (props) => {
    const { name, status, species, gender, image, origin, episode } = props
    return (
        <div class="character_container">
            <div class="hero">
                <h1>{name}</h1>
                <a href="/"><img src="/rick.png" alt="Home" width="50px"/></a>
            </div>
            <div class="character_data">
                <img src={image} alt={name} width="300px"/>
                <ul>
                    <li><h3>Character Information</h3></li>
                    <li><strong>Status:</strong> {status}</li>
                    <li><strong>Species:</strong> {species}</li>
                    <li><strong>Gender:</strong> {gender}</li>
                    <li><strong>Origin:</strong> {origin}</li>
                </ul>
            </div>
            <div>
                <h3>Episodes</h3>
                <ul>
                    {episode.map(e => <a key={e.id} href={`/episode/${e.id}`}><li key={e.id}>{e.name}</li></a>)}
                </ul>
            </div>
        </div>
    )
}

export default Character