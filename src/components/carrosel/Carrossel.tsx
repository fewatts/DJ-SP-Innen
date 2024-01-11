import AliceCarousel from "react-alice-carousel";
import gig1 from './../../assets/gigs/IMG_2748 (1).jpeg'
import gig2 from './../../assets/gigs/IMG_6686.jpeg'
import gig3 from './../../assets/gigs/IMG_6688.jpeg'
import gig4 from './../../assets/gigs/DSC07679.jpeg'
import gig5 from './../../assets/gigs/IMG_6691.jpeg'
import gig6 from './../../assets/gigs/DSC07685.jpeg'
import gig7 from './../../assets/gigs/DSC07688.jpeg'
import './Carrossel.css'

const pics = [
    {
        name: "TetaSesh",
        pic: gig1
    },
    {
        name: "DM Tech",
        pic: gig2
    },
    {
        name: "DM Tech",
        pic: gig3
    },
    {
        name: "TetaSesh",
        pic: gig4
    },
    {
        name: "TetaSesh",
        pic: gig5
    },
    {
        name: "TetaSesh",
        pic: gig6
    },
    {
        name: "TetaSesh",
        pic: gig7
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