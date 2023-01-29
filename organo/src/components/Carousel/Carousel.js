import Comic from "../Comic";
import React from "react";
import Slider from "react-slick";

export const Carousel = () => {
    var settings = {
        dots: true,
        speed: 300,        
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true, 
    };

    return (
        <Slider {...settings}>
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
            <Comic />
        </Slider>
    );
}