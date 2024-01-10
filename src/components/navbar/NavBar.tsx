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
                    <li><strong>𝔖𝔭𝔦𝔫𝔫𝔢ß</strong></li>
                </ul>
            </nav>
        </header>
    );
}