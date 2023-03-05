import Header from "../../components/Header";
import Comic from "../../components/Comic";
import "./WishList.css";
import { useEffect, useState } from 'react';

const comicKeySave = 'comicSaved';

export const WishList = () => {
    const [comicsSaved, setcomicsSaved] = useState([]);

    useEffect(() => {
        const arrayComicsLocalStorage = JSON.parse(localStorage.getItem(comicKeySave));
        setcomicsSaved(arrayComicsLocalStorage);
    }, [])

    const saveLocalStorage = (comic) => {
        const indexRemove = comicsSaved.indexOf(comic);
        comicsSaved.splice(indexRemove, 1);
        setcomicsSaved([...comicsSaved]);
    }


    return (
        <div>
            <Header />
            <div className="container-wish-list">
                <h3 className="h3">Wish List</h3>
                <div className="comics-save">
                    {comicsSaved.length > 0
                        ? (comicsSaved.map((comic) => (<Comic key={comic.title} comic={comic} saveLocalStorage={saveLocalStorage} />)))
                        : (<div className="inform-wish-list"><h3 >Your wish list is empty 😕</h3></div>)
                    }
                </div>
            </div>
        </div>
    )
}
