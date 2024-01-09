import logo from './../../assets/web.svg'
import './NavBar.css';

export function NavBar() {
    return (
        <header>
            <nav className='navbar'>
                <picture className='logo-navbar'>
                    <img src={logo} alt="logo" className='logo' />
                </picture>
                <ul id='nav-links'>
                    <li>𝔖𝔭𝔦𝔫𝔫𝔢ß</li>
                </ul>
            </nav>
        </header>
    );
}