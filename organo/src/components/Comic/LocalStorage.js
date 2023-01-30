//export const SaveLocalStorage = (comic) => {
//    localStorage.setItem(comic.title, JSON.stringify(comic));
//}


export const SaveLocalStorage = (comic) => {
    let localStorageValue = JSON.parse(localStorage.getItem('isSaved'));

    if (localStorageValue == null) {
        localStorage.setItem('isSaved', JSON.stringify([comic]))
    } else {
        localStorageValue.push(comic)
        localStorage.setItem('isSaved', JSON.stringify(localStorageValue))
    }
}

export const DeleteLocalStorage = (comic) => {
    let localStorageValue = JSON.parse(localStorage.getItem('isSaved'));
    const indexRemove = localStorageValue.findIndex(obj => obj.title === comic.title)
    localStorageValue.splice((indexRemove), 1)
    localStorage.setItem('isSaved', JSON.stringify(localStorageValue))
}
