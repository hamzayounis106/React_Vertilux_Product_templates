import { useContext } from 'react';
import { AcfContext } from '../Page/Home';

const SmartSolutions = () => {
  const acfData = useContext(AcfContext);

  return (
    <main className='my-12 w-full'>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 '>
        {acfData.smartSolution.map((smart) => {
          return (
            <div key={smart.name}>
              <img src={smart.icon} alt='' className='w-full' />
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default SmartSolutions;
