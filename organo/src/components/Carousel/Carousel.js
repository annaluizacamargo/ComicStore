import Comic from "../Comic";
import React from "react";
import Slider from "react-slick";
import md5 from 'md5';
import Api from '../../services/index';


export const Carousel = async () => {
    const settingsCarrousel = {
        infinite: false,
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
    };

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
            const results = response.data.data.results

            const resultsTransform = results.map((comic) => {
                const title = comic.title
                const issueNumber = comic.issueNumber

                let image = ""
                let imageExtension = ""                    
                if(comic.images.length > 0){
                    image = comic.images[0].path
                    imageExtension = comic.images[0].extension
                }

                const price = comic.prices[0].price
                return {title, issueNumber, image, imageExtension, price}
            })

            //console.log(resultsTransform)
            return resultsTransform
        } catch (error) {
            console.error(error)
        }
    }

    //const comics = Array.from(Array(20).keys())
    const comics = await getComics();
    console.log(comics)
    //return (
    //    <Slider {...settingsCarrousel}>
    //        {comics.map((index) => (<Comic key={index} title={} issueNumber={} image={} price={}/>))}
    //    </Slider>
    //);
}