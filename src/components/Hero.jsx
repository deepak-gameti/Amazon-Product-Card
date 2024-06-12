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
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem amet, officia tempora aliquid labore dolores fuga aut magni, totam eos molestias ipsam iste! Nemo beatae nam, quos modi dolore provident tenetur, aliquam, dolorum temporibus consequuntur atque nisi asperiores distinctio.</p>
                    <p>saleprise</p>
                </div>
            </div>
        </div>
    )
}

export default Hero