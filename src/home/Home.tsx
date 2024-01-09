import './Home.css';
import { Carrossel } from '../components/carrosel/Carrossel';

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
                        <p className='info-text'>𝔖𝔭𝔦𝔫𝔫𝔢ß é um DJ e produtor originário de são paulo. Apaixonado por música eletrônica, começou sua jornada de mixagem com o coletivo de Dj´s TetaSesh onde após tantas GiG´s, teve a oportunidade de tocar em clubs de mogi e são paulo. Agora seu foco está tanto na apresentação quanto produção musical de estilos como detroit techno, hypnotic e dark.</p>
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
            <section className='setsection'>
                <div className='section-two'>
                    <h3 className='tittle-other-sections-1'>Áudios:</h3>
                </div>
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
            <section className='carousel-color'>
                <div className='section-two'>
                    <h3 className='tittle-other-sections-1'>Mídias:</h3>
                </div>
                <br />
                <br />
                <br />
                <aside className='section-carosel'>
                    <div className='carrossel-container'>
                        <Carrossel />
                    </div>
                </aside>
            </section>
        </main>
    );
}
