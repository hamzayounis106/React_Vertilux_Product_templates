import { useContext } from 'react';
import { AcfContext } from '../Page/Home';

import { FaBarcode } from 'react-icons/fa';
import { TbPackages } from 'react-icons/tb';
import { FaSliders } from 'react-icons/fa6';

const AluminumSideBar = () => {
  const acfData = useContext(AcfContext);

  return (
    <aside className='flex flex-col '>
      <main className='my-8 flex  flex-col gap-y-4'>
        <div className='flex items-center gap-4'>
          <FaBarcode className='text-[#b71f39]' />
          <div className='text-gray-600'>
            <span className='font-semibold text-gray-800'>Item Code:</span>
            {acfData.item_code}
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <TbPackages className='text-[#b71f39]' />
          <div className='text-gray-600'>
            <span className='font-semibold text-gray-800'>Packing Unit:</span>
            {acfData.packing_unit}
          </div>
        </div>
        <div className='flex items-center gap-4 '>
          <FaSliders className='text-[#b71f39]' />
          <div className='text-gray-600'>
            <span className='font-semibold text-gray-800'>
              Unit of Measurement:
            </span>
            {acfData.unit_of_measurement}
          </div>
        </div>
      </main>
      <h1 className='text-[#b71f39] font-semibold py-6 border-y-2'>
        Programming Instruction Manual
      </h1>

      <main className='my-8'>
        <div className='border border-gray-300 w-60 mx-auto'>
          <img
            src={acfData.product_images[0].url}
            alt='hwlo'
            className='w-full'
          />
        </div>
        <a
          href={acfData.pdf}
          target='_blank'
          rel='noopener noreferrer'
          className='mt-4 flex items-center justify-center gap-2 bg-[#B71F39] text-white px-4 py-2 rounded hover:bg-[#b63046] transition-colors  text-sm w-56 mx-auto'
        >
          View Programming Instruction
        </a>{' '}
      </main>
      {/* smart solution */}
      {/* <main className='my-12'>
        <h1 className='text-[#900909] font-semibold'>Smart Solutions</h1>
        <div>
          {acfData.smartSolution.map((smart) => {
            return (
              <div key={smart.name} className='w-60 mx-auto'>
                <img src={smart.icon} alt='' className='w-full' />
                <h1 className='text-center text-sm text-gray-600'>
                  {smart.name}
                </h1>
              </div>
            );
          })}
        </div>
      </main> */}

      <div className='text-gray-600  border-b-2 pb-6'>
        <h1 className='mb-2'>Note:</h1>
        <p className='text-sm'>{acfData.note}</p>
      </div>

      <main className='mt-6 '>
        <h1>Applications(s)</h1>
        <div className='flex flex-wrap gap-1'>
          {acfData.link_icons.map((item, index) => {
            return (
              <div key={index} className='w-20'>
                <a
                  key={index}
                  href={item.link}
                  className='group w-20 transition-transform hover:scale-105'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src={item.icon}
                    alt={`item at ${item.link}`}
                    className='w-full'
                  />
                </a>
              </div>
            );
          })}
        </div>
      </main>
    </aside>
  );
};

export default AluminumSideBar;
