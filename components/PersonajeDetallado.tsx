import { FunctionalComponent } from "preact/src/index.d.ts";

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


const PersonajeDetallado:FunctionalComponent<Character> = (props) => {
    const {name, image, status, origin, species, gender, episode} = props
    return (
        <div class="personaje_detallado">
            <h1>{name}</h1>
            <div class="personaje_masdetallado">
                <img src={image} alt={name} width={300}/>
                <ul>
                    <li>{gender}</li>
                    <li>{status}</li>
                    <li>{origin.name}</li>
                    <li>{species}</li>
                </ul>
            </div>
            <div>
                <h3>Episodes</h3>
                <ul>
                    {episode.map(e => <li key={e}>{e}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default PersonajeDetallado