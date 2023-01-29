import Comic from "../Comic";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import md5 from 'md5';
import Api from '../../services/index';

export const Carousel = (props) => {
    const settingsCarrousel = {
        infinite: false,
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
    };

    const [comics, setComics] = useState([]);

    useEffect(
        () => {
            const listComics = async () => {
                const ts = Date.now();
                const apikey = '901618b8ac07dd281a0ce3fa55425002';
                const privateKey = '3f6091590e17861b7fb40b8ca0dac813692ddf18';
                const titleStartsWith = props.nameSection;

                const params = {
                    ts,
                    apikey,
                    hash: md5(ts + privateKey + apikey),
                    titleStartsWith,
                    orderBy: '-focDate',
                    formatType: 'comic',
                }

                try {
                    const response = await Api.get('/v1/public/comics', { params });
                    const results = response.data.data.results;

                    const resultsTransform = results.map((comic) => {
                        const title = comic.title;
                        const price = comic.prices[0].price;

                        let image = "";
                        let imageExtension = "";

                        if (comic.images.length > 0) {
                            image = comic.images[0].path;
                            imageExtension = comic.images[0].extension;
                        }

                        return { title, image, imageExtension, price };
                    })

                    setComics(resultsTransform);

                } catch (error) {
                    console.error(error)
                }
            }
            listComics();
        },
        []
    )

    return (
        <Slider {...settingsCarrousel}>
            {comics.map((comic) => (<Comic key={comic.title} comic={comic} />))}
        </Slider>
    );
}