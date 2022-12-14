import './carousel.css';
import '../../asset/css/generic.css'
import  fondImage from './img/fond2.jpeg';
import chevron from './img/left-chevron.png'
import { useState } from 'react';

export function Carousel(props){
    const itemsCarouselLength = props.itemsCarousel.length;
    const [positionItem, setPositionItem] = useState(0);
    const itemCarousel = props.itemsCarousel;
    const classChevronLeft = 'chevron-left chevron';
    const classChevronRight = 'chevron-right chevron';

    const chevronLeft = (e)=>{
        if(positionItem === 0){
            e.preventDefault();
        }else{
            setPositionItem(positionItem - 1);
        }
    }

    const chevronRight = (e)=>{
        if(positionItem === itemsCarouselLength -1){
            e.preventDefault();
        }else{
            setPositionItem(positionItem + 1);
        }
    }

    return(
        <section className="carousel-item flex" style={{ backgroundImage:`url(${fondImage})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
            <button className={classChevronLeft} onClick={(e)=>chevronLeft(e)}><img className='img-fluid' src={chevron} alt='chevron'/></button>
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
            <button className={classChevronRight} onClick={(e)=>chevronRight(e)}><img className='img-fluid' src={chevron} alt='chevron'/></button>
        </section>
    );
}