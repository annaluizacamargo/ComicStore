export const SaveLocalStorage = (comic) => {
    localStorage.setItem(comic.title, JSON.stringify(comic));
    
}

export const DeleteLocalStorage = (comic) => {
    localStorage.removeItem(comic.title);
}


