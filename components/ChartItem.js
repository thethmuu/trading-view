import Image from 'next/image';

export default function ChartItem({ chart }) {
  const { title, description, image, user, date, symbol } = chart;

  return (
    <>
      {/* card */}
      <div className='flex flex-col min-h-[520px] border p-5 mb-5 text-sm rounded shadow-sm'>
        <a href='#' className='text-xl lg:text-2xl font-semibold hover:text-blue-600'>
          {title}
        </a>
        {/* info row */}
        <div className='flex items-center text-base mt-3'>
          <a href='#' className='inline-block truncate hover:text-blue-600'>
            {symbol.name}
          </a>
        </div>
        {/* cover image */}
        <div className='relative mt-6 mb-5 border-t transition hover:scale-95'>
          <Image
            src={image.formats.small.url}
            alt='cover image'
            height={254}
            width={500}
          />
        </div>
        {/* author */}
        <div className='flex justify-between items-center mb-4'>
          <span className='flex items-center truncate text-base '>
            <Image
              src='/images/author.png'
              width={28}
              height={28}
              className='rounded'
            />

            <a href='#' className='ml-2 hover:text-blue-600'>
              {user.username}
            </a>
          </span>
          <span className='text-gray-500'>{new Date(date).toDateString()}</span>
        </div>
        {/* description */}
        <p>{description.substr(0, 280)}...</p>
      </div>
    </>
  );
}
