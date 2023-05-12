


export type AppStatusType = {

}

export const initialState: AppStatusType = {

}

export const appReducer = (state = initialState, action: AppActionType) => {
    switch(action.type) {
        case "SET-CARDS" :
            return state
        case "LIKE-CARD" :
            return state
        case "DELETE-CARD" :
            return state
        case "FILTER-CARDS" :
            return state
        default:
            return state
    }
}

export type AppActionType =
    ReturnType<typeof appSetStatusAC> |
    ReturnType<typeof appSetErrorAC> |
    ReturnType<typeof setInitializedAC>
