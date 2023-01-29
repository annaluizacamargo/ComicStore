import { useState } from 'react';
import './Comic.css';

export const Comic = (props) => {
    //console.log(props.comic)
    const buy = () => {
        console.log("oi")
    }

    const save = () => setIsSave(!isSave);

    const [isSave, setIsSave] = useState(false)

    return (
        <div className='comic'>
            <img src={props.comic.image + '.' +props.comic.imageExtension}/>
            <div className='descricao'>
                <h4>{props.comic.title}</h4>
                <h3>${props.comic.price}</h3>
            </div>
            <div className='btn-action'>
                <button onClick={buy}>Buy</button>
                <i className={isSave? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"} onClick={save}></i>
            </div>
        </div>
    )
}
