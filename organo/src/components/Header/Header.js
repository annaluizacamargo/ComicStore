import './Header.css';

export const Header = () => {
    return (
        <header className='header'>
            <h1><img src="/images/logo.svg" alt="Logo principal da página ComicStore" /></h1>
            <div className='menu'>
                <div className='user'>
                    <i class="fa-solid fa-user"></i>
                    <h4>Olá, Anna</h4>
                </div>
                <div className='wish-list'>
                    <h4>Wish List</h4>                    
                </div>
                <button className='btn-cart'>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <h4>Cart</h4>
                </button>
            </div>
        </header>
    )
}
