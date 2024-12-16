"use client";
import Image from "next/image";

const SwapnoCoverage = () => {
  return (
    <div className="flex flex-col lg:flex-row pt-8 lg:pt-16 gap-6">
      {/* Left side */}
      <div className="relative lg:w-2/3">
        <Image
          className="rounded-lg object-cover"
          src="https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/661fb0bf6e06f75fed58cab2_shera%20bazar%20v2_1552.png"
          alt="Banner Image"
          width={1300}
          height={500}
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 rounded-lg px-6 sm:px-10 lg:px-16">
          <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-semibold mb-4 text-center">
            শেরার বাজার
          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200 text-center">
            দেশের সেরা বাজার নেটওয়ার্ক নিয়ে আসছে Swapno।
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="relative lg:w-1/3 flex">
        <Image
          className="rounded-lg object-cover"
          src="https://www.shwapno.com/_next/static/media/web_coverage_area.32a74525.jpg"
          alt="Coverage Image"
          width={1300}
          height={500}
        />

        {/* Coverage Area Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 rounded-lg px-4 sm:px-6 lg:px-10 text-center">
          <h1 className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white font-semibold mb-4">
            Swapno Coverage Area
          </h1>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 text-white text-xs md:text-xs lg:text-[10px] xl:text-[16px] w-full">
            {/* Left side Information */}
            <div className="space-y-1 xl:space-y-4">
              <p className="flex justify-between bg-transparent">
                <span>Dhaka</span>
                <span className="text-red-400 font-medium">- 188 outlets</span>
              </p>
              <p className="flex justify-between bg-transparent">
                <span>Chattogram</span>
                <span className="text-red-400 font-medium">- 15 outlets</span>
              </p>
              <p className="flex justify-between bg-transparent">
                <span>Cumilla</span>
                <span className="text-red-400 font-medium">- 9 outlets</span>
              </p>
              <p className="flex justify-between bg-transparent">
                <span>Manikganj</span>
                <span className="text-red-400 font-medium">- 4 outlets</span>
              </p>
            </div>

            {/* Right side Information */}
            <div className="space-y-1 sm:space-y-2">
              <p className="flex justify-between bg-transparent">
                <span>Sylhet</span>
                <span className="text-red-400 font-medium">- 12 outlets</span>
              </p>
              <p className="flex justify-between bg-transparent">
                <span>Khulna</span>
                <span className="text-red-400 font-medium">- 13 outlets</span>
              </p>
              <p className="flex justify-between bg-transparent">
                <span>Gazipur</span>
                <span className="text-red-400 font-medium">- 38 outlets</span>
              </p>
              <p className="flex justify-between bg-transparent">
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
