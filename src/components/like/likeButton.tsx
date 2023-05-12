import React, {FC, useState} from 'react';
import l from "./likeButton.module.css"

type LikePropsType = {
    onClick: () => void
    isLiked: boolean
}


const LikeButton: FC<LikePropsType> = ({onClick, isLiked}) => {


    return (
        <button className={!isLiked ? l.button1 : l.button2} onClick={onClick}/>
    );
};

export default LikeButton;