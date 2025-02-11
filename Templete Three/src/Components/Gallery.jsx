import { useContext } from 'react';
import { AcfContext } from '../Page/Home';
import HeadingBar from './HeadingBar';

export default function Gallery() {
  const acfData = useContext(AcfContext);

  // Reusable section title component with horizontal lines

  return (
    <div className='w-full'>
      {/* Control Solutions Section */}
      <div className='md:w-3/4'>
        {/* Main Product Image */}
        <img
          src={acfData.product_images[0].url}
          alt='Main product'
          className='w-full h-auto rounded-lg shadow-md mb-6 '
        />
      </div>
      <div className='flex my-8 flex-wrap gap-x-12 gap-y-4 items-start justify-start text-2xl '>
        <a
          href={
            'https://s3.amazonaws.com/vertilux-website/cabinet_files/files/000/002/075/original/TS_6800MB25B01.pdf'
          }
          target='_blank'
          rel='noopener noreferrer'
          className=' bg-[#b71f39] text-gray-200 py-2  hover:bg-[#b63046] transition-colors  px-6'
        >
          Technical Sheet
        </a>
        <a
          href={
            'https://s3.amazonaws.com/vertilux-website/cabinet_files/files/000/002/075/original/TS_6800MB25B01.pdf'
          }
          target='_blank'
          rel='noopener noreferrer'
          className=' bg-[#b71f39] text-gray-200 py-2  hover:bg-[#b63046] transition-colors  px-6'
        >
          Programing Sheet
        </a>
      </div>
      <section className='md:pr-12'>
        <HeadingBar heading={'Control Solutions'} />

        {/* Related Products Grid */}
        <div className='grid grid-cols-2 md:grid-cols-5 gap-4 mt-12'>
          {acfData.product_images.map((product) => (
            <a
              key={product.id}
              href={product.link}
              className='group relative block hover:transform hover:scale-105 transition-all duration-300'
              target='_blank'
            >
              <img
                src={product.url}
                alt={product.id}
                className='w-full h-auto rounded-md border-2 '
              />
              <div className='absolute inset-0 bg-black rounded-md bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center'>
                <span className='text-white font-medium text-sm text-center px-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                  {product.id}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Charging Solutions Section */}
      {/* <div className='w-full mt-12'>
        <img
          src={acfData.charging_Solution[0].url}
          alt='Main charging solution'
          className='w-full h-auto rounded-lg shadow-md mb-6'
        />
        <HeadingBar heading={'Charging Solutions'} />

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
          {acfData.charging_Solution.map((product) => (
            <a
              key={product.id}
              href='#'
              className='group relative block hover:transform hover:scale-105 transition-all duration-300'
              target='_blank'
            >
              <img
                src={product.url}
                alt={product.id}
                className='w-full h-auto rounded-md border-2  '
              />
              <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center'>
                <span className='text-white font-medium text-sm text-center px-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                  {product.id}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div> */}
    </div>
  );
}
