import { useEffect, useState } from 'react';
import './Comic.css';
import { DeleteLocalStorage, GetLocalStorage, SaveLocalStorage } from './LocalStorage';

export const Comic = (props) => {
    const [isSave, setIsSave] = useState(false)

    useEffect(() => {
        const arrayComicsLocalStorage = GetLocalStorage();

        if (arrayComicsLocalStorage != null) {
            const comicIsSaved = arrayComicsLocalStorage.some(value => value.title === props.comic.title);
            setIsSave(comicIsSaved);
        }
    }, [])

    const buy = () => {
        //_ TO DO
        console.log("to do")
    }

    const save = (comic) => {
        setIsSave(!isSave);
        !isSave ? SaveLocalStorage(comic) : DeleteLocalStorage(comic);
        if (props.saveLocalStorage != null) {
            props.saveLocalStorage(comic);
        }
    };

    return (
        <div className='comic' key={props.comic.title}>
            <img src={props.comic.image + '.' + props.comic.imageExtension} />
            <div className='descricao'>
                <h4>{props.comic.title}</h4>
                <h3>${props.comic.price}</h3>
            </div>
            <div className='btn-action'>
                <button onClick={buy}>Buy</button>
                <i className={isSave ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"} onClick={() => save(props.comic)}></i>
            </div>
        </div>
    )
}
