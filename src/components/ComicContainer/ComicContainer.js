import './ComicContainer.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Carousel from '../Carousel';

export const ComicContainer = (props) => {
    const nameSection = props.nameSection;

    return (
        <div className='comicContainer'>
            <h3 className='tipe'>{nameSection}</h3>
            <Carousel nameSection={nameSection} key={nameSection} />
        </div>
    )
}
