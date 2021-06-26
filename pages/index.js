import ChartItem from '@/components/ChartItem';
import { API_URL } from '@/config/index';
import RightIcon from '@/components/icons/RightIcon';

export default function Home({ charts }) {
  return (
    <>
      {/* unauth header */}
      <div className='border-b'>
        <div className='lg:container mx-auto px-5 lg:px-0 py-20 text-center'>
          <h1 className='font-bold text-5xl mb-9'>
            The fastest way to follow markets
          </h1>
          <a
            href='#'
            className='inline-block bg-blue-600 hover:bg-blue-500 focus:ring text-white text-2xl px-10 py-3 rounded-full'
          >
            Launch Chart
          </a>
        </div>
      </div>

      {/* Feed section */}
      <div className='lg:container mx-auto px-2 lg:px-32'>
        <div className='flex flex-col lg:flex-row my-12'>
          <div className='flex-1 px-0 lg:px-3'>
            <div className='mb-6'>
              <h2 className='text-3xl text-black'>
                <a href='#' className='flex items-baseline group'>
                  <span className='group-hover:text-blue-600'>
                    Editor's picks
                  </span>
                  <span className='ml-2 group-hover:text-blue-600'>
                    <RightIcon />
                  </span>
                </a>
              </h2>
            </div>
            {/* cards container */}
            {charts &&
              charts.map((chart) => <ChartItem key={chart.id} chart={chart} />)}
          </div>
          <div className='flex-1 px-0 lg:px-3'>
            {/* Symbols */}
            <div className='mb-6'>
              <h2 className='text-3xl text-black'>
                <a href='#' className='flex items-baseline group'>
                  <span className='group-hover:text-blue-600'>
                    Market Summary
                  </span>
                  <span className='ml-2 group-hover:text-blue-600'>
                    <RightIcon />
                  </span>
                </a>
              </h2>
            </div>

            {/* News */}
            <div className='mb-6'>
              <h2 className='text-3xl text-black'>
                <a href='#' className='flex items-baseline hover:text-blue-600'>
                  News
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/charts`);
  const charts = await res.json();

  return {
    props: {
      charts
    }
  };
}
