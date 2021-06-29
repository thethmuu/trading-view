export default function ArticleItem({ article }) {
  const { title, description, date, news_agency } = article;

  return (
    <div className='lg:px-3 py-3 hover:bg-blue-50 hover:shadow border-b border-gray-100'>
      <div className='flex items-center justify-between text-sm mb-1'>
        <span className='text-gray-700'>{news_agency}</span>
        <span className='text-gray-500'>
          {new Date(date).toLocaleDateString()}
        </span>
      </div>
      <div>
        <a href='#' className='text-gray-800 hover:text-blue-600 font-semibold cursor-pointer'>{title}</a>
        <p className='text-gray-500 text-sm'>{description.substr(0, 100)}...</p>
      </div>
    </div>
  );
}
