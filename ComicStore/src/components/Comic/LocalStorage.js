const comicKeySave = 'comicSaved';

export const SaveLocalStorage = (comic) => {
    let arrayComicsLocalStorage = JSON.parse(localStorage.getItem(comicKeySave));

    if (arrayComicsLocalStorage == null) {
        localStorage.setItem(comicKeySave, JSON.stringify([comic]));
    } else {
        arrayComicsLocalStorage.push(comic);
        localStorage.setItem(comicKeySave, JSON.stringify(arrayComicsLocalStorage));
    }
}

export const DeleteLocalStorage = (comic) => {
    let arrayComicsLocalStorage = JSON.parse(localStorage.getItem(comicKeySave));
    const indexRemove = arrayComicsLocalStorage.findIndex(objComic => objComic.title === comic.title);

    arrayComicsLocalStorage.splice(indexRemove, 1);
    localStorage.setItem(comicKeySave, JSON.stringify(arrayComicsLocalStorage));
}

export const GetLocalStorage = () => JSON.parse(localStorage.getItem(comicKeySave));
