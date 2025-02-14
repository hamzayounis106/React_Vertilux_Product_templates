import { useContext } from 'react';
import { AcfContext } from '../Page/Home';

export default function Gallery() {
  const acfData = useContext(AcfContext);

  return (
    <div className='w-full'>
      <div className='md:w-3/4'>
        <img
          src={acfData.control_solutions[0].url}
          alt='Main product'
          className='w-full h-auto rounded-lg shadow-md mb-6 '
        />
      </div>
      <div className='flex my-8 flex-wrap gap-x-12 gap-y-4  sm:items-start items-center justify-center sm:justify-start text-2xl '>
        <a
          href={'/TechnicalSheet.pdf'}
          target='_blank'
          rel='noopener noreferrer'
          className=' bg-[#b71f39] text-gray-200 py-2  hover:bg-[#b63046] transition-colors  px-6'
        >
          Technical Sheet
        </a>
        <a
          href={'/Programming.pdf'}
          target='_blank'
          rel='noopener noreferrer'
          className=' bg-[#b71f39] text-gray-200 py-2  hover:bg-[#b63046] transition-colors  px-6'
        >
          Programing Sheet
        </a>
      </div>
    </div>
  );
}
