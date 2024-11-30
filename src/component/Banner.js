"use client";
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="flex px-12 pb-8">
      <Image 
        src="https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/664acd7f69554c8e502d2846_WhatsApp%20Image%202024-05-20%20at%2010.09.18_1552.webp" 
        alt="Banner Image" 
        width={1300} 
        height={500} 
        layout="intrinsic" 
      />
    </div>
  );
}

export default Banner;
