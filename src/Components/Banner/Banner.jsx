import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalItems = 2;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
        }, 3000);  // Increased interval time for smoother transitions

        return () => clearInterval(interval); 
    }, []);

    return (
        <Carousel
            className='mx-5'
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            slide
            wrap={true}
            controls={false}
        >
            <Carousel.Item style={{ height: '630px', padding: '20px' }}>
                <img
                    className="d-block w-100 img-fluid"
                    src="https://zymo.app/static/media/heroSecImage.012372867a73d0320a1b.jpg"
                    alt="First slide"
                    style={{ height: '100%', objectFit: 'cover', borderRadius: '5px', border: 'solid 2px', padding: '2px' }}
                />
            </Carousel.Item>
            <Carousel.Item style={{ height: '630px', padding: '20px' }}>
                <img
                    className="d-block w-100 img-fluid"
                    src="https://pbs.twimg.com/media/FxCWQ3rXoAANmrX?format=jpg&name=large"
                    alt="Third slide"
                    style={{ height: '100%', objectFit: 'cover', borderRadius: '5px', border: 'solid 2px', padding: '2px' }}
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
