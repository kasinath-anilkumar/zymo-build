import React from 'react'


const AboutLanding = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 shadow-2xl container rounded-2xl'>
            <h4 className='text-3xl md:text-4xl font-bold p-4 md:p-6 col-span-full text-center'>About Us</h4>

            <div className='flex justify-center'>
                <img
                    src="https://s3-us-west-2.amazonaws.com/issuewireassets/primg/108145/zymo-logo355809676.jpg"
                    className='img-fluid p-5'
                    alt="About Us Image"
                />
            </div>

            <div className='flex flex-col justify-center items-center h-full text-center p-6 md:p-12'>
                <h1 className='text-2xl md:text-3xl font-bold mb-4'>
                    Welcome to Zymo – where your journey meets its perfect match! 🚗✨
                </h1>
                <p className='text-base md:text-lg'>
                    In the bustling world of wheels and dreams, Zymo is not just a company; it's your trusted companion in the world of mobility. We started with the simple idea of making car rental as easy as a walk in the park. But guess what? We didn't stop there! Imagine a place where every road trip is a story waiting to be told, and every drive is an adventure waiting to unfold. That's Zymo for you!
                </p>
            </div>
        </div>
    )
}

export default AboutLanding
