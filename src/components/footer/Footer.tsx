import './Footer.css';
import logo from './../../assets/web.svg';

export function Footer() {
    return (
        <footer>
            <p>© Copyright 𝔖𝔭𝔦𝔫𝔫𝔢ß</p>
            <abbr title="Label de Artistas Dj's" className='abbrt'><a href="https://www.instagram.com/__spinneb__/"><img src={logo} alt="𝔖𝔭𝔦𝔫𝔫𝔢ß" className='logo-footer' /></a></abbr>
        </footer>
    );
}