import './Footer.css';
import soundcloudIcon from './../../assets/soundcloud.svg';
import gmail from './../../assets/gmail.svg'


export function Footer() {
    return (
        <footer>
            <p>© Copyright</p>
            <ul className='social-links'>
                <li>
                    <a href="https://soundcloud.com/djspinnenn" target='blank' ><img src={soundcloudIcon} alt="Soundcloud" className='soundcloud' /></a>
                </li>
                <li>
                    <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=feralveswatts@gmail.com" target='blank' ><img src={gmail} alt="gmail" className='gmail' /></a>
                </li>
            </ul>
        </footer>
    );
}
