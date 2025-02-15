import { useContext } from 'react';
import { AcfContext } from '../Page/Home';
import HeadingBar from './HeadingBar';

const ControlSolutions = () => {
  const acfData = useContext(AcfContext);

  return (
    <main>
      {' '}
      <section className='md:pr-12'>
        <HeadingBar heading={'Control Solutions'} />

        <div className='grid grid-cols-2 md:grid-cols-5 gap-4 mt-12'>
          {acfData.control_solutions
            .slice(1, acfData.control_solutions.length)
            .map((product) => (
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
    </main>
  );
};
export default ControlSolutions;
