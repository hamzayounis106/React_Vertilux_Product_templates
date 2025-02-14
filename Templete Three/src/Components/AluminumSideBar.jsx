import { useContext } from 'react';
import { AcfContext } from '../Page/Home';

const AluminumSideBar = () => {
  const acfData = useContext(AcfContext);

  return (
    <aside className='flex flex-col '>
      <main className='mt-6 mb-12 lg:mb-0 '>
        <h1 className='text-2xl mb-4'>Applications(s)</h1>
        <div className='flex flex-wrap gap-1'>
          {acfData.sideBarLinkImages?.map((item, index) => {
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
