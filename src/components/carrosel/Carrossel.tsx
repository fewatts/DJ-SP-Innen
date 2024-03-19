import AliceCarousel from "react-alice-carousel";
import gig1 from './../../assets/gigs/1.jpeg';
import gig2 from './../../assets/gigs/2.jpeg';
import gig3 from './../../assets/gigs/3.jpeg';
import gig5 from './../../assets/gigs/5.jpeg';
import gig6 from './../../assets/gigs/6.jpeg';
import gig7 from './../../assets/gigs/7.jpeg';
import gig8 from './../../assets/gigs/8.jpeg';
import gig10 from './../../assets/gigs/10.jpeg';
import gig11 from './../../assets/gigs/panca.png';
import './Carrossel.css'

const pics = [
    {
        name: "TetaSesh",
        pic: gig1
    },
    {
        name: "TetaSesh",
        pic: gig2
    },
    {
        name: "HomeSession",
        pic: gig3
    },
    {
        name: "DmTech",
        pic: gig5
    },
    {
        name: "DmTech",
        pic: gig6
    },
    {
        name: "TetaSesh",
        pic: gig7
    },
    {
        name: "DmTech",
        pic: gig8
    },
    {
        name: "Select Techno indoor",
        pic: gig10
    },
    {
        name: "Panca",
        pic: gig11
    }
];

export const Carrossel = () => (
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