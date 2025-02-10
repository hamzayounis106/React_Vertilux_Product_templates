import { useContext } from 'react';
import { AcfContext } from '../Page/Home';
import HeadingBar from './HeadingBar';

export default function Gallery() {
  const acfData = useContext(AcfContext);

  // Reusable section title component with horizontal lines

  return (
    <div className='w-full md:w-3/4 flex flex-col items-center'>
      {/* Control Solutions Section */}
      <div className='w-full'>
        {/* Main Product Image */}
        <img
          src={acfData.product_images[0].url}
          alt='Main product'
          className='w-full h-auto rounded-lg shadow-md mb-6'
        />
        <HeadingBar heading={'Control Solutions'} />

        {/* Related Products Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
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
              <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center'>
                <span className='text-white font-medium text-sm text-center px-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                  {product.id}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Charging Solutions Section */}
      <div className='w-full mt-12'>
        {/* Main Charging Solution Image */}
        <img
          src={acfData.charging_Solution[0].url}
          alt='Main charging solution'
          className='w-full h-auto rounded-lg shadow-md mb-6'
        />
        <HeadingBar heading={'Charging Solutions'} />

        {/* Related Charging Products Grid */}
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
      </div>
    </div>
  );
}
