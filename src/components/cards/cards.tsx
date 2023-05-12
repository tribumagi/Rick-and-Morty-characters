import React, {useEffect} from 'react';
import {CardType, fetchCardsTC} from "../../BLL/appReducer";
import {useSelector} from "react-redux";
import {AppDispatch, AppRootState} from "../../BLL/store";
import Card from "./card/card";
import s from "./cards.module.css"

const Cards = () => {

 const  selectCards = (state: AppRootState):CardType[] => state.app.cards
    const cards = useSelector(selectCards)
    const  selectFilter = (state: AppRootState):boolean => state.app.filter
const filter = useSelector(selectFilter)


    const dispatch = AppDispatch();

    useEffect(() => {
        dispatch(fetchCardsTC())
    }, [])

const showCards = (filter:boolean, cards:CardType[]) => {
        if(filter) {
            return cards.filter(c => c.isLiked)
        } else {
            return cards
        }
}

    const filteredCards = showCards(filter,cards)

    return (
        <div className={s.cards}>
            {filteredCards.map((c: CardType) => {
                    return (


                            <Card key={c.id} card={c}/>


                    )
                }
            )}
        </div>
    );
};

export default Cards;