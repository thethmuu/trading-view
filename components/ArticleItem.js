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
        <h3 className='text-gray-800 font-semibold'>{title}</h3>
        <p className='text-gray-500 text-sm'>{description.substr(0, 100)}...</p>
      </div>
    </div>
  );
}
