import Axios from "npm:axios"

type DataAPi = {
    results: {
        id: number
        name: string
        image: string
    }[]
}

type DataAPiID = {
    id: number
    name: string
    status: string
    species: string
    gender: string
    image: string
    origin: {
        name: string
    }
    episode: string[]
}

export type EpisodeAPI = {
    id: number
    name: string
    air_date: string
    episode: string
    characters: string[]
}

export type Data = {
    id: number
    name: string
    image: string
}

export type DataID = {
    id: number
    name: string
    status: string
    species: string
    gender: string
    image: string
    origin: string
    episode: EpisodeAPI[]
}

export type EpisodeID = {
    id: number
    name: string
    air_date: string
    episode: string
    characters: Data[]
}

export const getCharacter = async():Promise<Data[]> => {
    const characterAPI = await Axios.get<DataAPi>("https://rickandmortyapi.com/api/character")
    const character: Data[] = characterAPI.data.results.map(e => e)
    return character
}

export const getCharacterID = async(id:string):Promise<DataID> => {
    const characterAPI = await Axios.get<DataAPiID>(`https://rickandmortyapi.com/api/character/${id}`)
    const character:DataID = {
        ...characterAPI.data,
        origin: characterAPI.data.origin.name,
        episode: await Promise.all(characterAPI.data.episode.map(e => getEpisodeID(e.split("/").pop()!)))
    }
    return character
}

export const getCharacterIDFromEpisode = async(id:string):Promise<Data> => {
    const characterAPI = await Axios.get<DataAPiID>(`https://rickandmortyapi.com/api/character/${id}`)
    const character:Data = {...characterAPI.data}
    return character
}

export const getEpisodeID = async(id:string):Promise<EpisodeAPI> => {
    const episodeAPI = await Axios.get<EpisodeAPI>(`https://rickandmortyapi.com/api/episode/${id}`)
    return episodeAPI.data
}