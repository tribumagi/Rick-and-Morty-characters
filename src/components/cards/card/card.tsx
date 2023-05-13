import React, {FC, memo} from 'react';
import {CardType, deleteCardAC, likeCardAC} from "../../../BLL/appReducer";
import {AppDispatch} from "../../../BLL/store";
import s from "./card.module.css"
import DeleteButton from "../../deleteButton/deleteButton";
import LikeButton from "../../like/likeButton";

type CardPropsType = {
    card: CardType
}

const Card: FC<CardPropsType> = memo(({card}) => {

    const dispatch = AppDispatch();

    const deleteCard = () => {
        dispatch(deleteCardAC(card.id))
    }

    const changeLike = () => {
        dispatch(likeCardAC(card.id))
    }

    return (
        <div className={s.card}>
            <DeleteButton onClick={deleteCard}/>
            <LikeButton onClick={changeLike} isLiked={card.isLiked}/>
            <div><img src={card.image} className={s.img}/></div>
            <div>
                <span className={s.name}>{card.name}</span>
                <div className={s.description}>
                    <li className={s.status}>
                        status: <span className={s.description}>{card.status}</span>
                    </li>
                    <span>{card.species}  </span>
                    <span>{card.gender}</span>
                    <li className={s.status}>Last known location:</li>
                    <div>{card.location.name}</div>
                </div>
            </div>


        </div>
    );
});

export default Card;