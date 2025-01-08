import Image from "next/image";

const NavTop = () => {
  return (
    <div className="flex lg:hidden w-full">
  <div className="w-full">
    <a href="https://play.google.com/store/apps/details?id=com.shwapno">
    <Image
      src="https://www.shwapno.com/images/app-download-mobile.webp"
      alt="Icon"
      width={500}
      height={100}
      className="object-cover h-10 w-full" 
    />
    </a>
  </div>
</div>

  );
};

export default NavTop;
