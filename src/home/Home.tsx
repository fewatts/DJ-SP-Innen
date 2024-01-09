import './Home.css';
import spinneb from './../../src/assets/spinneb.jpeg'
import gig1 from './../../src/assets/gigs/IMG_6685.jpeg'
import gig2 from './../../src/assets/gigs/IMG_6686.jpeg'
import gig3 from './../../src/assets/gigs/IMG_6688.jpeg'
import gig4 from './../../src/assets/gigs/IMG_6689.jpeg'
import gig5 from './../../src/assets/gigs/IMG_6691.jpeg'
import soundcloudIcon from './../../src/assets/soundcloud.svg';
import gmail from './../assets/gmail.svg'
import AliceCarousel from 'react-alice-carousel';

export function Home() {
    const tracks = [
        {
            link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1752639249%3Fsecret_token%3Ds-tlH9QFPvhdg&color=%231f5673&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        }
    ]

    const sets = [
        {
            link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1682579880&color=%231f5673&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        }
    ]

    const pics = [
        {
            name: "𝔖𝔭𝔦𝔫𝔫𝔢ß",
            pic: spinneb
        },
        {
            name: "",
            pic: gig1
        },
        {
            name: "",
            pic: gig2
        },
        {
            name: "",
            pic: gig3
        },
        {
            name: "",
            pic: gig4
        },
        {
            name: "",
            pic: gig5
        }
    ];

    const Carrossel = () => (
        <AliceCarousel
            mouseTracking
            items={pics.map((pic, index) => (
                <>
                    <figcaption><h3 className='corosel-tittle'><strong>{pic.name}</strong></h3></figcaption>
                    <figure key={index} className="corosel-picture">
                        <img src={pic.pic} alt={`Imagem ${index + 1}`} className="carosel-img" />
                    </figure>
                </>
            ))}
            infinite={true}
            animationDuration={3000}
            disableButtonsControls={true}
            controlsStrategy="responsive"
            autoPlayStrategy="action"
            autoPlay={true} />
    );

    const artist = [
        {
            name: '𝔖𝔭𝔦𝔫𝔫𝔢ß',
            genre: 'Detroit Techno',
            profilePic: 'https://i1.sndcdn.com/avatars-SbO34mERUbdXPgJp-IDGy7Q-t500x500.jpg',
            soundcloudLink: 'https://soundcloud.com/djspinneb',
            instagramLink: 'https://www.instagram.com/__spinneb__/'
        }
    ];

    return (
        <main>
            <section className='section-one'>
                <section className='info-section'>
                <aside className='text-home'>
                    <h1 className='main-tittle'>Bem-Vindo(a)!</h1>
                    <p className='info-text'>𝔖𝔭𝔦𝔫𝔫𝔢ß é um DJ e produtor Paulista apaixonado em música eletrônica, seu foco é nos gêneros de Detroit Techno, Hypnotic e Dark. Explore seus sets e demos e mídias abaixo!</p>
                </aside>    
                {artist.map(artist => (
                    <figure className='info-card'>
                        <div className='card'>
                            <img src={artist.profilePic} alt={artist.name} className='profilepic' />
                            <h2 className='info-tittle-3'>{artist.name}</h2>
                            <h3><strong>{artist.genre}</strong></h3>
                            <div className='info-buttons'>
                                <button className='butGetCv'><a href={artist.soundcloudLink} target='_blank'>SoundCloud</a></button>
                                <button className='butGetCv'><a href={artist.instagramLink} target='_blank'>Instagram</a></button>
                            </div>
                        </div>  
                    </figure>
                ))}
            </section>
            </section>
            <section>
                <h3>Para escutar o set ou demo na sequência arraste o player do soundcloud até o final C:</h3>

                <h4 className='audios-tittle'>Sets:</h4>
                {sets.map(set => (
                    <figure className='audio-set'>
                        <iframe src={set.link}></iframe>
                    </figure>
                ))}

                <h4 className='audios-tittle'>Demos:</h4>
                {tracks.map(track => (
                    <figure className='audio-set'>
                        <iframe src={track.link}></iframe>
                    </figure>
                ))}

                <br />
            </section>
            <section>
                <Carrossel />
            </section>
            <section>
                <h5>contato | gigs | bookings:</h5>
                <ul className='social-links'>
                    <li>
                        <a href="https://soundcloud.com/djspinneb" target='blank' ><img src={soundcloudIcon} alt="Soundcloud" className='soundcloud' /></a>
                    </li>
                    <li>
                        <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=feralveswatts@gmail.com" target='blank' ><img src={gmail} alt="gmail" className='gmail' /></a>
                    </li>
                </ul>
            </section>
        </main>
    );
}
