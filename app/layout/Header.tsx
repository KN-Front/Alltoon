import Link from 'next/link';

const Header = () => {
  return (
    <header className="mx-auto justify-center px-6 md:px-24  relative w-full h-24 md:mb-0 mb-8 md:grid grid-cols-1 md:grid-cols-12">
      <div className="text-black font-medium flex col-span-2 lg:justify-start justify-center items-center mx-auto mt-6  dark:text-dark-white">
        <a> Alltoon </a>
      </div>
      <div className="col-span-8 space-x-8 lg:mt-0 mt-4 justify-center flex items-center text-center mx-auto">
        <div className="relative text-gray-400 font-medium transition-all duration-200 hover:text-black cursor-pointer dark:hover:text-dark-white">
          <Link href="/week">Week</Link>
        </div>
        <div className="relative text-gray-400 font-medium transition-all duration-200 hover:text-black cursor-pointer dark:hover:text-dark-white">
          <Link href="/search">Search</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
