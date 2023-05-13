import axios from "axios";

const instance = axios.create({
    baseURL: "https://rickandmortyapi.com/api/"
})

export const API = {
    getCharacters() {
        return instance
            .get("character/?page=1")

    }
}