import { createContext, useEffect } from 'react';
import Gallery from '../Components/Gallery';
import AluminumSideBar from '../Components/AluminumSideBar';
import { useLocation } from 'react-router-dom';

export const AcfContext = createContext();

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    console.log('Current Path:', location.pathname);
  }, [location.pathname]);

  const acfData = {
    main_heading: '3/4" (20mm) Aluminum Bottom Rail Tube',
    item_code: '0-154-TU-20021',
    packing_unit: '(30 PCS x 19FT ) 570 FT/BOX',
    unit_of_measurement: 'FT',
    share_link: ['http://localhost:5173'],
    link_icons: [
      {
        icon: 'https://s3.amazonaws.com/vertilux-website/applications/icons/000/000/002/original/Aplications_64x64px-07.png',
        link: '/applications/door-frames',
      },
      {
        icon: 'https://s3.amazonaws.com/vertilux-website/applications/icons/000/000/001/original/Aplications_64x64px-01.png',
        link: '/applications/door-frames',
      },

      {
        icon: 'https://s3.amazonaws.com/vertilux-website/applications/icons/000/000/005/original/Aplications_64x64px-02.png',
        link: '/applications/door-frames',
      },
      {
        icon: 'https://s3.amazonaws.com/vertilux-website/applications/icons/000/000/008/original/Aplications_64x64px-11.png',
        link: '/applications/door-frames',
      },
      {
        icon: 'https://s3.amazonaws.com/vertilux-website/applications/icons/000/000/004/original/Aplications_64x64px-04.png',
        link: '/applications/door-frames',
      },
      {
        icon: 'https://s3.amazonaws.com/vertilux-website/applications/icons/000/000/012/original/Aplications_64x64px-19.png',
        link: '/applications/door-frames',
      },
    ],
    product_images: [
      'https://vertilux-website.s3.amazonaws.com/public/original/0154TU20021.jpg',
      'https://s3.amazonaws.com/vertilux-website/public/thumb/0152SR00200.jpg',
      'https://s3.amazonaws.com/vertilux-website/public/thumb/014004EC02W.jpg',
      'https://s3.amazonaws.com/vertilux-website/public/original/014004EC02B.jpg',
    ],
    colors: [
      { name: '0-154-TU-20021' },
      { name: '0-154-TU-20021' },
      { name: '0-154-TU-20021' },
      { name: '0-154-TU-20021' },
    ],
  };

  return (
    <AcfContext.Provider value={acfData}>
      <section className='max-w-6xl mx-auto px-4   xl:pr-20 2xl:pr-4 my-12'>
        <div className='w-full flex flex-col lg:flex-row gap-5 lg:gap-2 '>
          <div className='w-full lg:w-3/4 flex items-center justify-center lg:items-start lg:justify-start flex-col'>
            <h1 className='text-2xl md:text-3xl text-gray-500 mb-4'>
              {acfData.main_heading}
            </h1>
            <Gallery />
          </div>
          <div className='w-full lg:w-1/4    rounded-md'>
            <AluminumSideBar />
          </div>
        </div>
      </section>
    </AcfContext.Provider>
  );
}
