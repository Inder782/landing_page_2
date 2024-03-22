import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className=''>
            <div className=''>
            <Image src="/hero_section/first.svg" width={525} height={65} alt='hero' className="ml-auto mt-[-11vh] relative"/>
            <Image src="/hero_section/second.svg" width={555} height={55} alt='hero' className="ml-auto absolute top-0 right-8 mt-28"/>
            </div>
        </div>
    </div>
  )
}

export default Hero