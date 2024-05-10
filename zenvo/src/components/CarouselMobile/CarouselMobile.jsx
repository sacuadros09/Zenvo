import "./CarouselMobile.css"
import { dataCarousel,dataCarousel1,dataCarousel2,dataCarousel3 } from "../../services/dataCarousel";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CardWeAre } from "../CardWeAre/CardWeAre";


export function CarouselMobile () {

    return (
        <div className="carousel-mobile">
        <Carousel autoPlay>
        <div>
        {dataCarousel.map(({id,img,name}) => {
    return(
    <div key={id} className="about-profile">
        <CardWeAre  variant = "section-img"photo={img} ></CardWeAre>  
        <CardWeAre variant = "button-name"name={name}></CardWeAre>
    </div>
    )
    })}
        </div>

        <div>
        {dataCarousel1.map(({id,img,name}) => {
    return(
    <div key={id} className="about-profile">
        <CardWeAre  variant = "section-img"photo={img} ></CardWeAre>  
        <CardWeAre variant = "button-name"name={name}></CardWeAre>
    </div>
    )
    })}
        </div>

        <div>
        {dataCarousel2.map(({id,img,name}) => {
    return(
    <div key={id} className="about-profile">
        <CardWeAre  variant = "section-img"photo={img} ></CardWeAre>  
        <CardWeAre variant = "button-name"name={name}></CardWeAre>
    </div>
    )
    })}
        </div>

        <div>
        {dataCarousel3.map(({id,img,name}) => {
    return(
    <div key={id} className="about-profile">
        <CardWeAre  variant = "section-img"photo={img} ></CardWeAre>  
        <CardWeAre variant = "button-name"name={name}></CardWeAre>
    </div>
    )
    })}
        </div>

        </Carousel>


        </div>
       
    )
    }