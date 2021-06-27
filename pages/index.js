import ChartItem from '@/components/ChartItem';
import SymbolItem from '@/components/SymbolItem';
import ArticleItem from '@/components/ArticleItem';
import { API_URL } from '@/config/index';
import RightIcon from '@/components/icons/RightIcon';

export default function Home({ charts, symbols, articles }) {
  return (
    <>
      {/* unauth header */}
      <div className='border-b'>
        <div className='lg:container mx-auto px-5 lg:px-0 py-20 text-center'>
          <h1 className='font-bold text-3xl lg:text-5xl mb-9'>
            The fastest way to follow markets
          </h1>
          <a
            href='#'
            className='inline-block bg-blue-600 hover:bg-blue-500 focus:ring text-white text-xl lg:text-2xl px-8 lg:px-10 py-2 lg:py-3 rounded-full'
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
          <div className='flex-1 lg:px-3'>
            {/* Symbols */}
            <div className='mb-5'>
              <div className='mb-6'>
                <h2 className='text-3xl text-black lg:px-2'>
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
              {/* Symbol items container */}
              <div className='px-2'>
                {symbols &&
                  symbols.map((symbol) => (
                    <SymbolItem key={symbol.id} symbol={symbol} />
                  ))}
              </div>
            </div>

            {/* News */}
            <div>
              <div className='mb-6'>
                <h2 className='text-3xl text-black lg:px-2'>
                  <a
                    href='#'
                    className='flex items-baseline hover:text-blue-600'
                  >
                    News
                  </a>
                </h2>
              </div>
              <div className='px-2'>
                {articles &&
                  articles.map((article) => (
                    <ArticleItem key={article.id} article={article} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const chartRes = await fetch(`${API_URL}/charts?_sort=date:ASC&_limit=5`);
  const charts = await chartRes.json();

  const symbolRes = await fetch(`${API_URL}/symbols?_sort=created_at:ASC&_limit=8`);
  const symbols = await symbolRes.json();

  const articleRes = await fetch(`${API_URL}/articles?_sort=date:ASC&_limit=10`);
  const articles = await articleRes.json();

  return {
    props: {
      charts,
      symbols,
      articles
    }
  };
}
