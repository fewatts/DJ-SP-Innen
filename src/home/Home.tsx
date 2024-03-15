import './Home.css';
import spinnen2 from './../assets/Spinnen-2.jpeg'
import { Carrossel } from '../components/carrosel/Carrossel';

export function Home() {

    const tracks = [
        {
            link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1775809638%3Fsecret_token%3Ds-nvrZW9lgLgS&color=%230d7180&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        }, 
        {
            link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1772793480%3Fsecret_token%3Ds-oNEFwkA3Q98&color=%230d7180&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        }, 
        {
            link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1767262017%3Fsecret_token%3Ds-BliAWcqYbsA&color=%230d7180&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        }, 
        {
            link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1752138186%3Fsecret_token%3Ds-r1iupkjeYDo&color=%230d7180&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        }, 
        {
            link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1762786371%3Fsecret_token%3Ds-FAGKnWQkDjC&color=%230d7180&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        }, 
        {
            link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1764811941%3Fsecret_token%3Ds-7FIb2BEqqYL&color=%230d7180&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        }, 
        {
            link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1710037950%3Fsecret_token%3Ds-QFiR70hOosM&color=%230d7180&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        }
    ]

    const sets = [
        {
            link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1772924406&color=%230d7180&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        },
        {
            link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1716744870&color=%231692bc&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        },
        {
            link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1738934964&color=%231692bc&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        }
    ]

    const artists = [
        {
            name: 'Spinnenn',
            genre: 'Techno',
            profilePic: spinnen2,
            soundcloudLink: 'https://soundcloud.com/djspinnenn',
            instagramLink: 'https://www.instagram.com/_spinnenn_/'
        }
    ];

    return (
        <main>
            <section className='section-one'>
                <section className='info-section'>
                    {artists.map(artist => (
                        <figure className='info-card'>
                            <div className='card'>
                                <img src={artist.profilePic} alt={artist.name} className='profilepic' />
                                <h3><strong>{artist.genre}</strong></h3>
                                <div className='info-buttons'>
                                    <button className='socialMediaButton'><a href={artist.soundcloudLink} target='_blank'>SoundCloud</a></button>
                                    <button className='socialMediaButton'><a href={artist.instagramLink} target='_blank'>Instagram</a></button>
                                    <button className='socialMediaButton'><a href="https://www.instagram.com/spinnenn_master/" target='_blank'>Mastering</a></button>
                                </div>
                            </div>
                        </figure>
                    ))}
                </section>
            </section>
            <section className='section-two'>
                <div className='audio-section'>
                    <h3 className='audio-section-tittle'>Audios:</h3>
                </div>

                <h4 className='audios-tittle'>Sets:</h4>
                {sets.map(set => (
                    <figure className='audio-set'>
                        <iframe src={set.link}></iframe>
                    </figure>
                ))}


                <h4 className='audios-tittle'>Promos:</h4>
                {tracks.map(track => (
                    <figure className='audio-set'>
                        <iframe src={track.link}></iframe>
                    </figure>
                ))}

                <h4 className='audios-tittle'>Playlists:</h4>
                <br />
                <br />
                <figure className='spotifyPlaylist'>
                    <iframe src="https://open.spotify.com/embed/playlist/3bvpJz1Bql1de2utkbwMve?utm_source=generator&theme=0" ></iframe>
                </figure>
                <figure className='spotifyPlaylist'>
                    <iframe src="https://open.spotify.com/embed/playlist/5cJSzyscdjah2c7E6dYehZ?utm_source=generator&theme=0"></iframe>
                </figure>

                <br />
            </section>
            <section className='carousel-color'>
                <div className='audio-section'>
                    <h3 className='audio-section-tittle'>Gigs:</h3>
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