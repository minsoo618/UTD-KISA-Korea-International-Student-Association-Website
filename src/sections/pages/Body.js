import React, { useState, useEffect } from "react";
import { SliderData } from './SliderData';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Body = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 4000;

    const nextSlide = () => {
        let slideCurrentLoc = current;
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setCurrent(current === 0 ? length - 1 : current - 1)
          
    };

    function auto() {
        slideInterval = setInterval(nextSlide,intervalTime)
    }

    useEffect(() => {
        setCurrent(0);
    }, []);

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [current]);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div id='main'>
            <div className='header-heading'>
                <section className="slider">
                    <FaChevronLeft className='left-arrow' onClick={prevSlide} />
                    <FaChevronRight className='right-arrow' onClick={nextSlide} />
                    {SliderData.map((slide, index) => {
                        return (
                            <div
                                className={index === current ? 'slide active' : 'slide'}
                                key={index}
                            >
                                {index === current && (
                                    < img src={slide.image} alt="travel image" className="image"
                                        onClick={nextSlide} onContextMenu={prevSlide}/>
                                )}
                            </div>
                        );
                    })}
                </section>

            </div>

            
        </div>
    )
}

export default Body;