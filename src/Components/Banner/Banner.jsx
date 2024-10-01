import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalItems = 3;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Carousel
            className='mx-3' // Adjusts margin for responsiveness
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            slide
            wrap={true}
            controls={false}
        >
            <Carousel.Item style={{ padding: '10px' }}>
                <img
                    className="d-block w-100 img-fluid"
                    src="https://zymo.app/static/media/heroSecImage.012372867a73d0320a1b.jpg"
                    alt="First slide"
                    style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '5px', padding: '2px' }}
                />
            </Carousel.Item>
            <Carousel.Item style={{ padding: '10px' }}>
                <img
                    className="d-block w-100 img-fluid"
                    src="https://pbs.twimg.com/media/FxCWQ3rXoAANmrX?format=jpg&name=large"
                    alt="Second slide"
                    style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '5px', padding: '2px' }}
                />
            </Carousel.Item>
            <Carousel.Item style={{ padding: '10px' }}>
                <img
                    className="d-block w-100 img-fluid"
                    src="https://s3-us-west-2.amazonaws.com/issuewireassets/primg/108145/zymo-india297080116.jpg"
                    alt="Third slide"
                    style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '5px', padding: '2px' }}
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
