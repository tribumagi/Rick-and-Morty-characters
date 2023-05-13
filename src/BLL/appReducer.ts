import {AppThunk} from "./store";
import {API} from "../API/api";

export type CardType = CardResponseType & { isLiked: boolean }

type InitialStateType = {
    cards: CardType[],
    filter: boolean
}

const initialState: InitialStateType = {cards: [], filter: false}


export const appReducer = (state = initialState, action: AppActionType): InitialStateType => {
    switch (action.type) {
        case "SET-CARDS" :

            return {...state, cards: action.cards.map(c => ({...c, isLiked: false}))}
        case "LIKE-CARD" :
            return {...state, cards: state.cards.map(c => c.id === action.id ? {...c, isLiked: !c.isLiked} : c)}
        case "DELETE-CARD" :
            return {...state, cards: state.cards.filter(c => c.id !== action.id)}
        case "FILTER-CARDS" :
            return {...state, filter: !state.filter}
        default:
            return state
    }
}

export type AppActionType =
    ReturnType<typeof setCardsAC> |
    ReturnType<typeof likeCardAC> |
    ReturnType<typeof deleteCardAC> |
    ReturnType<typeof filterCardsAC>

export type CardResponseType = {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {},
    location: any,
    image: string,
    episode: [],
    url: string,
    created: string
}

export const setCardsAC = (cards: CardType[]) => ({type: "SET-CARDS", cards} as const)
export const likeCardAC = (id: number) => ({type: "LIKE-CARD", id} as const)
export const deleteCardAC = (id: number) => ({type: "DELETE-CARD", id} as const)
export const filterCardsAC = () => ({type: "FILTER-CARDS"} as const)


export const fetchCardsTC = (): AppThunk =>
    async dispatch => {
        const res = await API.getCharacters()
        dispatch(setCardsAC(res.data.results))
    }

