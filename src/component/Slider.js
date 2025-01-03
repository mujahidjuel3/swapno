import { useRef } from "react";
import Link from "next/link";

const Slider = () => {
  const items = [
    { href: "/deals", label: "Great Deals" },
    { href: "/unilever", label: "Unilever's Winter Sale" },
    { href: "/buy", label: "Buy & Save More" },
    { href: "/brands", label: "Our Brands" },
    { href: "/filter/Reckitt%20Special", label: "Reckitt Special" },
  ];

  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = x - startX.current; // Calculate the distance moved
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div className="flex flex-col gap-2 md:gap-4 w-full container mx-auto items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      {/* Slider for Mobile and Tablet */}
      <div className="w-full max-w-[320px] md:max-w-[930px] lg:max-w-[500px]  overflow-x-auto xl:max-w-[800px] xl:overflow-x-hidden">
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        className="flex w-full gap-2  select-none "
        style={{
          cursor: "grab",
        }}
      >
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="hover:text-yellow-400 border-red-300 border-2 lg:border-none lg:rounded-none  px-2 py-1 rounded-full flex-shrink-0 font-semibold uppercase text-center min-w-[120px] text-[12px] lg:text-sm"
          >
            {item.label}
          </Link>
        ))}
      </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none; /* Internet Explorer 10+ */
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </div>
  );
};

export default Slider;
