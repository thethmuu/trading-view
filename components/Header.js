import PersonIcon from './icons/PersonIcon';
import LogoIcon from './icons/LogoIcon';
import ChartIcon from './icons/ChartIcon';
import DownIcon from './icons/DownIcon';
import SearchIcon from './icons/SearchIcon';

export default function Header() {
  const navLinks = ['Trade', 'Markets', 'Screeners', 'Community', 'More'];

  return (
    <header className='border-b text-gray-800'>
      <div className='lg:container mx-auto px-2 lg:px-32'>
        {/* header top */}
        <div className='flex justify-between items-center bg-white text-sm sticky top-0'>
          <a href='/' className='flex items-center py-3 px-6 hover:bg-blue-50'>
            <span className='mr-1'>
              <LogoIcon />
            </span>
            <span>TradingView</span>
          </a>
          <div className='lg:flex items-center hidden'>
            <span className='flex items-center pl-4 py-1 rounded-tl rounded-bl bg-blue-50'>
              Launch chart
              <DownIcon />
            </span>
            <span className='text-gray-500 flex items-center ml-1 px-2 py-1 rounded-tr rounded-br bg-blue-50'>
              <SearchIcon />
              <input className='w-80 bg-blue-50 outline-none pl-1 py-1' placeholder='Symbol, eg. APPL' />
            </span>
          </div>
          <div className='flex items-center'>
            <button className='p-3 hover:bg-blue-50 rounded-lg'>
              <PersonIcon />
            </button>

            <a
              href='#'
              className='hidden lg:block ml-3 px-5 py-1 bg-blue-600 hover:bg-blue-500 focus:ring text-base text-white rounded'
            >
              Start free trial
            </a>
          </div>
        </div>

        {/* header bottom */}
        <nav className='hidden lg:block space-x-12'>
          <ul className='flex'>
            <li>
              <a href='#' className='flex py-3 px-6 hover:bg-blue-50'>
                <ChartIcon />
                <span className='ml-1'>Chart</span>
              </a>
            </li>
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href='#'
                  className='py-3 px-6 inline-block hover:bg-blue-50'
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
