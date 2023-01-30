import { useEffect, useState } from 'react';
import WishList from '../../content/WishList';
import './Comic.css';
import { DeleteLocalStorage, SaveLocalStorage } from './LocalStorage';



export const Comic = (props) => {
    //console.log(props.comic)
    const buy = () => {
        console.log("oi")
    }

    useEffect(() => {
        const arrayComicsLocalStorage = JSON.parse(localStorage.getItem('isSaved'))
        const indexComicSaved = arrayComicsLocalStorage.findIndex(value => value.title === props.comic.title)

        if (indexComicSaved > -1) {
            setIsSave(true)
        }
    }, [])

    const save = (comic) => {
        setIsSave(!isSave)
        !isSave? SaveLocalStorage(comic) : DeleteLocalStorage(comic);
    };

    const [isSave, setIsSave] = useState(false)

    return (
        <div className='comic' key={props.comic.title}>
            <img src={props.comic.image + '.' +props.comic.imageExtension}/>
            <div className='descricao'>
                <h4>{props.comic.title}</h4>
                <h3>${props.comic.price}</h3>
            </div>
            <div className='btn-action'>
                <button onClick={buy}>Buy</button>
                <i className={isSave? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"} onClick={() => save(props.comic)}></i>
            </div>
        </div>
    )
}
