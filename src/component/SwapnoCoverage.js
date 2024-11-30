"use client";
import Image from 'next/image';

const SwapnoCoverage = () => {
  return (
    <div className="flex flex-col lg:flex-row px-12 pt-16 gap-6">
      {/* Left side */}
      <div className="lg:w-2/3 flex">
        <Image
          className="rounded-lg object-cover"
          src="https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/661fb0bf6e06f75fed58cab2_shera%20bazar%20v2_1552.png"
          alt="Banner Image"
          width={1300}
          height={500}
          layout="responsive"
        />
      </div>

      {/* Right side */}
      <div className="relative lg:w-1/3 flex">
       
        <Image
          className="rounded-lg"
          src="https://www.shwapno.com/_next/static/media/web_coverage_area.32a74525.jpg"
          alt="Coverage Image"
          width={1300}
          height={500}
          layout="responsive"
        />

        {/* Title on Image */}
        <div className="absolute inset-0 md:mb-20 flex flex-col items-center justify-center bg-opacity rounded-lg">
          <h1 className="text-sm font-semibold bg-slate-1 bg-slate-20000 mb-5">Swapno Coverage Area</h1>
          <div className="grid grid-cols-2 gap-4 text-xs-  w-full px-6">
            {/* Left side Information */}
            <div className="space-y-2 text-xs">
              <p className="flex justify-between bg-slate-200">
                <span>Dhaka</span>
                <span className="text-red-400 font-medium">- 188 outlets</span>
              </p>
              <p className="flex justify-between bg-gray-100">
                <span>Chattogram</span>
                <span className="text-red-400 font-medium">- 15 outlets</span>
              </p>
              <p className="flex justify-between bg-slate-200">
                <span>Cumilla</span>
                <span className="text-red-400 font-medium">- 9 outlets</span>
              </p>
              <p className="flex justify-between bg-gray-100">
                <span>Manikganj</span>
                <span className="text-red-400 font-medium">- 4 outlets</span>
              </p>
            </div>

            {/* Right side Information */}
            <div className="space-y-2 text-xs">
              <p className="flex justify-between bg-slate-200">
                <span>Sylhet</span>
                <span className="text-red-400 font-medium">- 12 outlets</span>
              </p>
              <p className="flex justify-between bg-gray-100">
                <span>Khulna</span>
                <span className="text-red-400 font-medium">- 13 outlets</span>
              </p>
              <p className="flex justify-between bg-slate-200">
                <span>Gazipur</span>
                <span className="text-red-400 font-medium">- 38 outlets</span>
              </p>
              <p className="flex justify-between bg-gray-100">
                <span>Barishal</span>
                <span className="text-red-400 font-medium">- 10 outlets</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapnoCoverage;
