import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
    return (
        <header className='header'>

            <Link to='/' className='logo'>
                <h1>
                    <img src="/images/logo.svg" alt="Logo principal da página ComicStore" />
                </h1>
            </Link>

            <div className='menu'>
                <div className='user'>
                    <i class="fa-solid fa-user"></i>
                    <h4>Olá, Anna</h4>
                </div>
                <div className='wish-list'>
                    <Link to='/wish-list' className='h4-wish-list'>Wish List</Link>
                </div>
                <button className='btn-cart'>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <h4>Cart</h4>
                </button>
            </div>
        </header>
    )
}
