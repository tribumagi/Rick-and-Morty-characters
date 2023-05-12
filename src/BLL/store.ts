import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";
import {AppActionType, appReducer} from "./appReducer";




const rootState = combineReducers({app: appReducer})

export type AppRootState = ReturnType<typeof rootState>

export const store = legacy_createStore(rootState, applyMiddleware(thunk));

export type AppDispatchType = ThunkDispatch<AppRootState, any, AppActionType>

export const AppDispatch = () => useDispatch<AppDispatchType>()

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootState, unknown, AppActionType>


