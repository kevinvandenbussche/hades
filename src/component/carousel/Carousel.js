import './carousel.css';
import '../../asset/css/generic.css'
import  fondImage from './img/fond2.jpeg';
import chevron from './img/left-chevron.png'
import { useState } from 'react';

export function Carousel(props){
    const itemsCarouselLength = props.itemsCarousel.length;
    const [positionItem, setPositionItem] = useState(0);
    const itemCarousel = props.itemsCarousel;
    let classChevronLeft = 'chevron-left chevron';
    let classChevronRight = 'chevron-right chevron';

    const chevronLeft = ()=>{
        setPositionItem(positionItem - 1);
    }

    const chevronRight = ()=>{
        setPositionItem(positionItem + 1);
    }

    return(
        <section className="carousel-item flex" style={{ backgroundImage:`url(${fondImage})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
            <div className={classChevronLeft} onClick={chevronLeft}><img className='img-fluid' src={chevron} alt='chevron'/></div>
                <div className='flex container'>
                    <div className='items flex'>
                        <div key={itemCarousel[positionItem].id} className='parent-carousel'>
                            <div className='div-image'>
                                <img className='img-fluid' src={itemCarousel[positionItem].image} alt={itemCarousel[positionItem].name} />
                            </div>
                            <h3 style={{backgroundColor:itemCarousel[positionItem].color}}>{itemCarousel[positionItem].name}</h3>
                            <p>{itemCarousel[positionItem].text}</p>
                        </div>
                    </div>
                </div>
            <div className={classChevronRight} onClick={chevronRight}><img className='img-fluid' src={chevron} alt='chevron'/></div>
        </section>
    );
}