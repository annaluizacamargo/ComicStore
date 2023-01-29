import './Comic.css';

export const Comic = (props) => {
    //console.log(props.comic)
    return (
        <div className='comic'>
            <img src={props.comic.image + '.' +props.comic.imageExtension}/>
            <div className='descricao'>
                <h4>{props.comic.title}</h4>
                <h3>${props.comic.price}</h3>
            </div>
            <div className='btn-action'>
                <button>Buy</button>
                <i class="fa-regular fa-bookmark"></i>
            </div>
        </div>
    )
}
