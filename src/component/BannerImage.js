"use client";
import Image from 'next/image';

const BannerImage = () => {
  return (
    <div className="flex px-12 gap-6">
      {/* left side */}
      <div className="rounded lg:w-2/5 flex flex-col gap-3">
        <Image
          className="rounded-lg h-full object-cover"
          src="https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/662e8f95ef6c997505e330af_Home%20care%20banner_1552.png"
          alt="Banner Image"
          width={1300}
          height={500}
          layout="intrinsic"
        />
        <Image
          className="rounded-lg h-full object-cover"
          src="https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/662e90221451bccbd9c358e3_Fresh%20fish%20&%20meat%20banner_1552.png"
          alt="Banner Image"
          width={1300}
          height={500}
          layout="intrinsic"
        />
      </div>

      {/* Right side */}
      <div className="lg:w-3/5 flex">
        <Image
          className="rounded-lg w-full h-full"
          src="https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/6684c69ddf3a953888336f20_Proton%20Mobile_1552.jpeg"
          alt="Banner Image"
          width={1300}
          height={500}
          layout="intrinsic"
        />
      </div>
    </div>
  );
};

export default BannerImage;
