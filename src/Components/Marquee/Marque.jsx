import React from 'react';
import Card from 'react-bootstrap/Card';
import specialOffer from "/specialOffer.png";



const Marque = () => {
    return (
        <div className='shadow-md container rounded-3xl my-8'>
            <div className="text-center w-100">
                <h1 className='text-4xl mb-5 font-bold'>OFFERS</h1>
            </div>
            <marquee behavior="" direction="" scrollamount="15">
                <div className='d-flex mb-4'>
                <Card className='shadow-md' style={{ width: '18rem', marginRight: '40px' }}>
                        <Card.Img variant="top" style={{ objectFit: 'cover', height: '100%' }} className='img-fluid' src={specialOffer} />
                    </Card>
                    <Card className='shadow-md' style={{ width: '18rem', marginRight: '40px' }}>
                        <Card.Img variant="top" style={{ objectFit: 'cover', height: '100%' }} className='img-fluid' src="https://s3-us-west-2.amazonaws.com/issuewireassets/primg/108145/rent-a-self-drive-car-with-zymo1370632798.jpeg" />
                    </Card>
                    <Card className='shadow-md' style={{ width: '18rem', marginRight: '40px' }}>
                        <Card.Img variant="top" style={{ objectFit: 'cover', height: '100%' }} className='img-fluid' src="https://s3-us-west-2.amazonaws.com/issuewireassets/primg/108145/zymo-refer-earn.jpeg" />
                    </Card>
                    <Card className='shadow-md' style={{ width: '18rem', marginRight: '40px' }}>
                        <Card.Img variant="top" style={{ objectFit: 'cover', height: '100%' }} className='img-fluid' src="https://s3-us-west-2.amazonaws.com/issuewireassets/primg/108145/zymo-upto-25-off-on-self-drive-car-rental2070678428.jpg" />
                    </Card>
                    <Card className='shadow-md' style={{ width: '18rem', marginRight: '40px' }}>
                        <Card.Img variant="top" style={{ objectFit: 'cover', height: '100%' }} className='img-fluid' src="https://zymo.app/static/media/ZymoFinalLogo.eda966803ca1be50c0f3.png" />
                    </Card>
                    <Card className='shadow-md' style={{ width: '18rem', marginRight: '40px' }}>
                        <Card.Img variant="top" style={{ objectFit: 'cover', height: '100%' }} className='img-fluid' src="https://s3-us-west-2.amazonaws.com/issuewireassets/primg/108145/zymo-india297080116.jpg" />
                    </Card>
                </div>
            </marquee>
        </div>
    );
};

export default Marque;
