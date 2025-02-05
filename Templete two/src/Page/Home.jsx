import React, { createContext, useEffect } from 'react';
import useFetchTemplate from '../Hook/useFetchTemplate';
import { Link, useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import Gallery from '../Components/Gallery';
import HeadingBar from '../Components/HeadingBar';
import TechnicalProperties from '../Components/TechnicalProperties';
import CareAndMaintenance from '../Components/CareAndMaintenance';
import Manufacturing from '../Components/Manufacturing';
import Applications from '../Components/Applications';
import Certificates from '../Components/Certificates';
import ColorTable from '../Components/ColorTable';
import { FaCircleArrowRight } from 'react-icons/fa6';

export const AcfContext = createContext();

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    console.log('Current Path:', location.pathname);
  }, [location.pathname]);

  const { data: acfData, error, isLoading } = useFetchTemplate(9452);

  if (isLoading) {
    return (
      <div className='flex flex-col justify-center items-center h-screen bg-gray-100'>
        <img
          src='https://aep.tdd.mybluehost.me/wp-content/uploads/2023/11/logo.png'
          alt='Site Logo'
          className='w-32 h-auto mb-4 animate-bounce'
        />
        <div className='text-gray-600 font-medium text-lg animate-pulse'>
          Loading, please wait...
        </div>
      </div>
    );
  }

  if (error) return <div>Error: {error.message || 'An error occurred.'}</div>;

  return (
    <AcfContext.Provider value={acfData}>
      <div className='w-full flex justify-center items-center mb-10'>
        <div className='flex flex-col lg:max-w-[1140px] justify-center items-center gap-5 w-full'>
          <Header />
          <Gallery />
          <div className='p-[20px] w-[100%] '>
            <HeadingBar heading='COLORS TABLE EXAMPLE' />
          </div>
          <ColorTable />
          <div className='p-[20px] w-[100%] '>
            <HeadingBar heading='TECHNICAL PROPERTIES' />
          </div>
          <TechnicalProperties />
          <div className='flex md:justify-start justify-center w-[95%] mt-7'>
            <Link
              to='#'
              className='flex gap-3 items-center font-medium text-[#aa2d35] group'
            >
              View Details{' '}
              <span>
                <FaCircleArrowRight className='group-hover:translate-x-2 transition-all duration-500' />
              </span>
            </Link>
          </div>
          <div className='w-full flex md:flex-row flex-col justify-between items-stretch'>
            <div className='p-[20px] w-[100%] md:w-1/2'>
              <HeadingBar heading='CARE & MAINTENANCE' />
              <CareAndMaintenance />
            </div>
            <div className='p-[20px] w-[100%] md:w-1/2'>
              <HeadingBar heading='MANUFACTURING' />
              <Manufacturing />
            </div>
          </div>
          <div className='w-full flex md:flex-row flex-col   justify-center md:justify-between items-stretch'>
            <div className='p-[20px] w-[100%] md:w-1/2'>
              <HeadingBar heading='INTERNATIONAL CERTIFICATIONS' />
              <Certificates />
            </div>
            <div className='p-[20px] w-[100%] md:w-1/2'>
              <HeadingBar heading='APPLICATIONS' />
              <Applications />
            </div>
          </div>
          <div className='w-full flex md:flex-row flex-col  justify-center md:justify-between items-stretch'>
            <div className='p-[20px] w-[90%] md:w-1/2 flex justify-end items-end'>
              <p className='Roboto text-[12px] text-[#7a7a7a]'>
                IMPORTANT: The values and recommendations in this card are not
                contractual and can not be used as claim for order cancellations
                or returns. This technical data may vary at any time without
                previous notice. Color samples may not necessarily be an exact
                match of the material to be used to produce your order. Returns
                will not be accepted due to minor variations of color or
                texture.
              </p>
            </div>
            <div className='p-[20px] w-[90%] md:w-1/2 flex flex-col justify-start items-end gap-2'>
              <img
                className='w-[96px]'
                src='https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/TS_RX-Daku-qr-icon.png'
                alt=''
              />
              <h2 className='Roboto text-[#58585a] font-[400] text-[20px]'>
                vertilux.com
              </h2>
              <p className='Roboto text-[12px] text-[#7a7a7a]'>
                © 2024. Vertilux, Ltd. All Rights Reserved. 1st Edition
              </p>
            </div>
          </div>
        </div>
      </div>
    </AcfContext.Provider>
  );
}
