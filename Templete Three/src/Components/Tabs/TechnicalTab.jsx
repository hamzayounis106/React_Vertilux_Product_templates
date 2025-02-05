export default function TechnicalTab({ technicalSpecs, pdfLink }) {
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
        href={pdfLink}
        target='_blank'
        rel='noopener noreferrer'
        className='mt-8 flex items-center justify-center gap-2 bg-[#b71f39] text-white py-2 rounded hover:bg-[#b63046] transition-colors text-sm w-56 mx-auto'
      >
        View Technical Sheet
      </a>
      <p className='mt-2 text-sm text-gray-500'>
        * The Weight Capacity of a motor is calculated under optimal
        circumstances. Actual results may vary. Specifications are subject to
        change without notice.
      </p>
    </main>
  );
}
