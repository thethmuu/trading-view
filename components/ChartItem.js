import Image from 'next/image';

export default function ChartItem({ chart }) {
  const { title, description, image } = chart;
  return (
    <>
      {/* card */}
      <div className='flex flex-col min-h-[520px] border p-5 mb-5 text-sm rounded shadow-sm'>
        <a href='#' className='text-2xl font-semibold'>
          {title}
        </a>
        {/* info row */}
        <div className='flex items-center text-base mt-3'>
          <a href='#' className='inline-block truncate'>
            BTCUSD
          </a>
          <span>,</span>
          <span className='text-gray-500 ml-1'>1D</span>
        </div>
        {/* cover image */}
        <div className='relative mt-6 mb-5'>
          <Image
            src={image.formats.small.url}
            alt='cover image'
            height={254}
            width={500}
          />
        </div>
        {/* description */}
        <p>{description.substr(0, 200)}...</p>
      </div>
    </>
  );
}
