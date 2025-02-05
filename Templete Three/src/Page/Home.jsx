import { createContext, useEffect } from 'react';
import Gallery from '../Components/Gallery';
import AluminumSideBar from '../Components/AluminumSideBar';
// import { useLocation } from 'react-router-dom';
import TabbedInterface from '../Components/TabbedInterface';
import HeadingBar from '../Components/HeadingBar';
import Certificates from '../Components/Certificates';
import Applications from '../Components/Applications';
import { FaExclamationTriangle } from 'react-icons/fa';

export const AcfContext = createContext();

export default function Home() {
  const acfData = {
    main_heading:
      'VTI®RE-LION Celtic Bidirectional Battery Motor 25mm | 1Nm | 30rpm',
    item_code: '6-800-MB-25B01',
    packing_unit: '1 EA',
    unit_of_measurement: 'EA',
    note: 'Crown and drive for 38 mm tube already installed in the motor.',
    smartSolution: [
      {
        icon: 'https://s3.amazonaws.com/vertilux-website/public/thumb/6800HAVTI02.jpg',
        name: 'VTi® Re-lion SMARTHUB Plus',
      },
      {
        icon: 'https://s3.amazonaws.com/vertilux-website/public/thumb/6800HAVTI02.jpg',
        name: 'VTi HomeMate+ App',
      },
    ],

    product_images: [
      {
        id: '6-800-MB-25B01',
        url: 'https://vertilux-website.s3.amazonaws.com/public/original/6800MB25B01.jpg',
      },
      {
        id: '6-800-ATCHB-02',
        url: 'https://s3.amazonaws.com/vertilux-website/public/thumb/6800ATCHB02.jpg',
      },
      {
        id: '6-800-ATCHB-06',
        url: 'https://s3.amazonaws.com/vertilux-website/public/thumb/6800ATCHB06.jpg',
      },
      {
        id: '6-800-ATESBT-6',
        url: 'https://s3.amazonaws.com/vertilux-website/public/thumb/6800ATESBT6.jpg',
      },
    ],

    charging_Solution: [
      {
        id: '6-800-MA-BUSBT',
        url: 'https://s3.amazonaws.com/vertilux-website/public/thumb/6800MABUSBT.jpg',
      },
      {
        id: '6-800-MA-MBSOL',
        url: 'https://s3.amazonaws.com/vertilux-website/public/thumb/6800MAMBSOL.jpg',
      },
      {
        id: '6-800-MA-BUSBC',
        url: 'https://s3.amazonaws.com/vertilux-website/public/thumb/6800MABUSBC.jpg',
      },
    ],

    technical_specs: {
      torque: '1.1 Nm',
      speed: '20-25-30 rpm',
      soundLevel: '32 dB',
      limits: 'Electronic',
      indexProtection: 'IP 44',
      power: '9.6 W',
      current: '0.8 A',
      thermalProtection: '6 Minutes',
      voltageSupply: '5 V DC (USB-C TYPE)',
      radioFrequency: '433.92 MHz',
      weightCapacity: '10 lb | 4.5 kg',
      batteryType: 'Li-ion 2600 mAh',
      workingTemp: '14-131ºF | -10 ~ 55 ºC',
      rfModulation: 'FSK',
    },
    recommended_products: [
      {
        image:
          'https://vertilux-website.s3.amazonaws.com/motorization/RecomendedTubes/0-154-TU-380XX.jpg',
        data: {
          measurement: '1½" | 38 mm',
          tubeType: 'Aluminum Tube',
          modelNumber: '0-154-TU-32XXX',
          driveType: 'Crown & Drive',
          solutionNumber: '6-700-AS-25032',
        },
      },
      {
        image:
          'https://vertilux-website.s3.amazonaws.com/motorization/RecomendedTubes/0-154-TU-380XX.jpg',
        data: {
          measurement: '1½" | 38 mm',
          tubeType: 'Smooth Aluminum Tube**',
          modelNumber: '0-154-TU-38420 | 21',
          driveType: 'Crown & Drive',
          solutionNumber: '6-700-AS-25038',
        },
      },
      {
        image:
          'https://vertilux-website.s3.amazonaws.com/motorization/RecomendedTubes/0-154-TU-384XX.jpg',
        data: {
          measurement: '1½" | 38 mm',
          tubeType: 'Aluminum Tube**',
          modelNumber: '0-154-TU-38420 | 21',
          driveType: 'Crown & Drive',
          solutionNumber: '6-700-AS-25038',
        },
      },
      {
        image:
          'https://vertilux-website.s3.amazonaws.com/motorization/RecomendedTubes/0-154-TU-452XX.jpg',
        data: {
          measurement: '1½" | 45 mm',
          tubeType: 'Aluminum Tube**',
          modelNumber: '0-154-TU-38420 | 21',
          driveType: 'Crown & Drive',
          solutionNumber: '6-700-AS-25038',
        },
      },
    ],
    pdf: '/DummyPdf.pdf',
    applications_boxes: [
      {
        application_name: 'Roller Shades',
        application_image:
          'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/12/Aplications_64x64px-01.png',
      },
      {
        application_name: 'Indoor Use Only',
        application_image:
          'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/TS_RX-Daku-11-icon.png',
      },
      {
        application_name: 'Cord Safe Solutions',
        application_image:
          'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/12/Aplications_64x64px-19.png',
      },
      {
        application_name: 'Vertical Blinds',
        application_image:
          'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/12/Aplications_64x64px-07.png',
      },
      {
        application_name: 'Cellular Shades',
        application_image:
          'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/12/Aplications_64x64px-08.png',
      },
    ],
    certificates: [
      'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/12/Allergy_Friendly_1736_300x193px.png',
      'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/12/Logo_Prop_65_compliant_fullcolor.png',
      'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/12/logo_USGBC.png',
      'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/12/logo_aitex.png',
      'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/12/logo_vertilux_warranty_5years.png',
      'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/12/logo_vertilux_warranty_10years.png',
      'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/TS_RX-Daku-9-icon.png',
    ],
  };

  return (
    <AcfContext.Provider value={acfData}>
      <section className='max-w-6xl mx-auto px-4 my-12'>
        <div className='w-full flex flex-col lg:flex-row gap-5'>
          <div className='w-full lg:w-3/4 flex items-center justify-center lg:items-start lg:justify-start flex-col'>
            <h1 className='text-2xl md:text-3xl text-gray-500 mb-4'>
              {acfData.main_heading}
            </h1>
            <Gallery />
            <TabbedInterface />

            <div className='w-full flex md:flex-row flex-col   justify-center md:justify-between items-stretch'>
              <div className='p-[20px] w-[100%] md:w-1/2'>
                <HeadingBar heading='INTERNATIONAL CERTIFICATIONS' />
                <Certificates />
              </div>
              <div className='p-[20px] w-[100%] md:w-1/2'>
                <HeadingBar heading='ACCESSORIES' />
                <Applications />
              </div>
            </div>
            <div className='flex items-center justify-center gap-4 text-'>
              <FaExclamationTriangle className='h-full w-1/2 text-[#b71f39]' />
              <p className='text-gray-500'>
                IMPORTANT: The values and recommendations in this card are not
                contractual and can not be used as claim for order cancellations
                or returns. This technical data may vary at any time without
                previous notice. Color samples may not necessarily be an exact
                match of the material to be used to produce your order. Returns
                will not be accepted due to minor variations of color or
                texture.
              </p>
            </div>
          </div>
          <div className='w-full lg:w-1/4 bg-white  rounded-md'>
            <AluminumSideBar />
          </div>
        </div>
      </section>
    </AcfContext.Provider>
  );
}
