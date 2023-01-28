import './Comic.css';
import md5 from 'md5';
import Api from '../../services/index';

const getComics = async () => {
    const ts = Date.now();
    const apikey = '901618b8ac07dd281a0ce3fa55425002';
    const privateKey = '3f6091590e17861b7fb40b8ca0dac813692ddf18';

    const params = {
        ts,
        apikey,
        hash: md5(ts + privateKey + apikey),        
        titleStartsWith: 'avengers',
        orderBy: '-focDate',
    }

    try {
        const response = await Api.get('/v1/public/comics', {params})
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}

export const Comic = () => {
    getComics();
    return (
        <section className='comic'>
            <img src='https://comicboom.com.br/loja/wp-content/uploads/2018/11/guardioes-da-galaxia-1.jpg'/>
            <div className='descricao'>
                <h4>Título (ano)</h4>
                <p>Issue</p>
                <h3>$3.99</h3>
            </div>
            <div className='btn-action'>
                <button>Buy</button>
                <i class="fa-regular fa-bookmark"></i>
            </div>
        </section>
    )
}
