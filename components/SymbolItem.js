import Image from 'next/image';
export default function SymbolItem({ symbol }) {
  const { name, long_form, stock_price, change_amount } = symbol;
  return (
    <div className='flex rounded-md py-2'>
      <div className='flex-1'>
        <div className='flex items-center pr-11'>
          <span className='flex items-center px-2'>
            <Image
              src='/images/country.svg'
              width={24}
              height={24}
              alt='Symbol Icon'
              className='rounded-full'
            />
          </span>
          <span className='flex flex-col'>
            <a href='#' className='text-base truncate'>
              {name}
            </a>
            <span className='text-xs uppercase w-full text-gray-500 truncate'>
              {long_form.substr(0, 10)}...
            </span>
          </span>
        </div>
      </div>
      <div className='flex-1'>
        <div className='flex justify-end py-2 pr-2 text-base text-right'>
          <span>{stock_price}</span>
          <span
            className={`text-sm w-[126px] ${
              change_amount > 0 ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {change_amount}
          </span>
        </div>
      </div>
    </div>
  );
}
