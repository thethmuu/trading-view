export default function Header() {
  const navLinks = [
    'Chart',
    'Trade',
    'Markets',
    'Screeners',
    'Community',
    'More'
  ];

  return (
    <header className='border-b'>
      <div className='lg:container mx-auto px-6 lg:px-0'>
        {/* header top */}
        <div className='flex justify-between p-3'>
          <a href='/' className='flex items-center hover:bg-gray-100'>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='33'
                height='19'
                viewBox='0 0 33 19'
              >
                <path
                  fill='#2962FF'
                  d='M29.032 7.382a5.47 5.47 0 0 1 .963 2.872A4.502 4.502 0 0 1 28.5 19H6a5.98 5.98 0 0 1-4.222-1.737l9.546-7.556c.35.187.75.293 1.176.293a2.49 2.49 0 0 0 1.066-.238l4.55 3.981a2.5 2.5 0 1 0 4.711-.157l6.205-6.204zm-1.414-1.414l-6.204 6.204A2.494 2.494 0 0 0 20.5 12a2.49 2.49 0 0 0-1.066.238l-4.55-3.981a2.5 2.5 0 1 0-4.801-.118L.608 15.638A6 6 0 0 1 6.061 7a8.001 8.001 0 0 1 15.625-1.227A5.474 5.474 0 0 1 24.5 5c1.157 0 2.231.358 3.118.968z'
                ></path>
              </svg>
            </span>
            <span className='text-sm font-medium'>TradingView</span>
          </a>
          <div>
            Search bar
          </div>
          <div>
            Right
          </div>
        </div>

        {/* header bottom */}
        <nav className='space-x-12'>
          <ul className='flex'>
            {navLinks.map((link) => (
              <li>
                <a
                  href='#'
                  className='py-3 px-6 inline-block hover:bg-gray-100'
                >
                  {/* <svg
            width='28'
            height='28'
            viewBox='0 0 28 28'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M9 6.5h10A2.5 2.5 0 0121.5 9v10a2.5 2.5 0 01-2.5 2.5H9A2.5 2.5 0 016.5 19V9A2.5 2.5 0 019 6.5zM5 9a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H9a4 4 0 01-4-4V9zm14.52 3.54a.75.75 0 10-1.04-1.08l-2.88 2.8-2.82-2.11a.75.75 0 00-.97.06l-3.33 3.25a.75.75 0 001.04 1.08l2.88-2.8 2.82 2.11c.3.22.7.2.97-.06l3.33-3.25z'
              fill='currentColor'
            ></path>
          </svg> */}
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
