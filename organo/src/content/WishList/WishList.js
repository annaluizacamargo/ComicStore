import Header from "../../components/Header";
import Comic from "../../components/Comic";
import "./WishList.css";
import { useEffect, useState } from 'react';
import { DeleteLocalStorage, SaveLocalStorage } from '../../components/Comic/LocalStorage.js';

const comicKeySave = 'comicSaved';

export const WishList = () => {

    const [isSave, setIsSave] = useState(true)

    useEffect(() => {
        const arrayComicsLocalStorage = JSON.parse(localStorage.getItem('isSaved'));

        //if (arrayComicsLocalStorage != null) {
        //    setIsSave(comicIsSaved);
        //}
    }, [])
    
    let arrayComicsLocalStorage = JSON.parse(localStorage.getItem(comicKeySave));
    console.log(arrayComicsLocalStorage)

    return (
        <div>
            <Header />
            <div className="container-wish-list">
                <h3 className="h3">Wish List</h3>
                <div className="comics-save">
                    {arrayComicsLocalStorage.map((comic) => (<Comic key={comic.title} comic={comic} />))}
                </div>
            </div>
        </div>
    )
}
