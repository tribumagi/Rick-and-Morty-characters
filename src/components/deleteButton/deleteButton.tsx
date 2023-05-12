import React, {FC} from 'react';
import db from "./deleteButton.module.css"

type DeleteProps = {
    onClick:()=>void
}

const DeleteButton:FC<DeleteProps> = ({onClick}) => {

    return (
        <button className={db.button} onClick={onClick}/>
    );
};

export default DeleteButton;