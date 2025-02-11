export default function TechnicalTab({ technicalSpecs }) {
  return (
    <main>
      <div className='grid sm:grid-cols-2 gap-x-12 flex-wrap '>
        {Object.entries(technicalSpecs).map(([key, value]) => (
          <div key={key} className='flex justify-between border-b py-2 text-sm'>
            <span className='font-semibold text-gray-700 capitalize'>
              {key}
            </span>
            <span className='text-gray-600'>{value}</span>
          </div>
        ))}
      </div>
      <a
        href={
          'https://s3.amazonaws.com/vertilux-website/cabinet_files/files/000/002/075/original/TS_6800MB25B01.pdf'
        }
        target='_blank'
        rel='noopener noreferrer'
        className='mt-8 flex items-center justify-center gap-2 bg-[#b71f39] text-white py-2 rounded hover:bg-[#b63046] transition-colors text-sm w-56 mx-auto'
      >
        View Technical Sheet
      </a>
    </main>
  );
}
