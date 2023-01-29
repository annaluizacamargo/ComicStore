import { Comic } from '../Comic/Comic';
import './ComicContainer.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Carousel from '../Carousel';

export const ComicContainer = () => {
    return (
        <div className='comicContainer'>
            <h3 className='tipe'>Guardians Of The Galaxy</h3>
            <Carousel />
        </div>
    )
}
