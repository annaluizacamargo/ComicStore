import './Comic.css';

export const Comic = () => {
    return (
        <section className='comic'>
            <img href='https://comicboom.com.br/loja/wp-content/uploads/2018/11/guardioes-da-galaxia-1.jpg'></img>
            <div className='descrição'>
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
