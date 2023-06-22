import React from 'react'
import Image from 'next/image'

type Props = {
    src: string,
    alt:string,
    prority?:string
}

export default function CustomImage({src, alt, prority}: Props) {

    const prty = prority ? true :false
  return (
    <div className='w-full h-full'>
        <Image className='rounded-lg mx-auto'
        src={src}
        alt={alt}
        width={600}
        height={600}
        />
    </div>
  )
}
