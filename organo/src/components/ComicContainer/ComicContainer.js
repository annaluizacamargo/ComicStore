import { Comic } from '../Comic/Comic';
import './ComicContainer.css';
import md5 from 'md5';
import Api from '../../services/index';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Carousel from '../Carousel';

const getComics = async () => { //!PASSAR PARÂMETRO DA VARIÁVEL
    const ts = Date.now();
    const apikey = '901618b8ac07dd281a0ce3fa55425002';
    const privateKey = '3f6091590e17861b7fb40b8ca0dac813692ddf18';

    const params = {
        ts,
        apikey,
        hash: md5(ts + privateKey + apikey),
        titleStartsWith: 'avengers', //!SUBSTITUIR POR VARIÁVEL
        orderBy: '-focDate',
    }

    try {
        const response = await Api.get('/v1/public/comics', { params })
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}

export const ComicContainer = () => {
    //getComics();
    return (
        <div className='comicContainer'>
            <h3 className='tipe'>Guardians Of The Galaxy</h3>
            <Carousel />
        </div>
    )
}
