import React from 'react'

const Hero = ({heading}) => {

    return (
        <div className='flex items-center justify-center flex-col text-4xl h-screen' >
            <div className='border flex items-center flex-col p-5 w-72 h-96 rounded-md'>
                {heading.map((ele, index) => {
                    return <h1 className='text-3xl'>{ele}</h1>
                })}
                <img src="" alt="img" className='border w-full h-1/2' />
                <ul className='text-2xl list-disc'>
                    <li className=''>para</li>
                    <li className=''>para</li>
                </ul>
                <div>
                    <p>realprise</p>
                    <p>saleprise</p>
                </div>
            </div>
        </div>
    )
}

export default Hero