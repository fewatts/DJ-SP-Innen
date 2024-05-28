import './Home.css';

export function Home() {

    const tracks = [
        {
            link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1788199152%3Fsecret_token%3Ds-mXBsdgPFNd5&color=%230d7180&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        }
    ]

    const sets = [
        {
            link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1682579880&color=%230d7180&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        }
    ]

    const artists = [
        {
            name: 'SP Innen',
            genre: 'Techno',
            profilePic: "https://i1.sndcdn.com/avatars-1o5TXFfSwAkIytze-rNYw4g-t500x500.jpg",
            soundcloudLink: 'https://soundcloud.com/djspinnenn',
            instagramLink: 'https://www.instagram.com/sp__innen/'
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
                                    <button className='socialMediaButton'><a href="https://www.instagram.com/audiologics_studio/" target='_blank'>Mastering</a></button>
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
                    <iframe src="https://open.spotify.com/embed/playlist/5cJSzyscdjah2c7E6dYehZ?utm_source=generator&theme=0"></iframe>
                </figure>
                <figure className='spotifyPlaylist'>
                    <iframe src="https://open.spotify.com/embed/playlist/3bvpJz1Bql1de2utkbwMve?utm_source=generator&theme=0" ></iframe>
                </figure>
                <br />
            </section>
        </main>
    );
}
