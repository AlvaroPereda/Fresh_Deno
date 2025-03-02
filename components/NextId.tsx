import { FunctionalComponent } from "preact/src/index.d.ts";

type Data = {
    id: number
}

const NextId:FunctionalComponent<Data> = (props) => {
    return (
        <div class="buttons_next">
            <a href={`/characterid?id=${props.id - 1 < 1?1:props.id - 1}`}><button name="left" type="submit">Previous</button></a>
            <a href={`/characterid?id=${props.id + 1}`}><button name="right" type="submit">Next</button></a>
        </div>
    )

} 

export default NextId