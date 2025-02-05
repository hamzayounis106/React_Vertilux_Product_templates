import { createContext, useEffect } from 'react';
import Gallery from '../Components/Gallery';
import AluminumSideBar from '../Components/AluminumSideBar';
// import { useLocation } from 'react-router-dom';
import TabbedInterface from '../Components/TabbedInterface';

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
    // productsIds: [
    //   { name: '0-154-TU-20021' },
    //   { name: '0-154-TU-20021' },
    //   { name: '0-154-TU-20021' },
    //   { name: '0-154-TU-20021' },
    // ],
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
          </div>
          <div className='w-full lg:w-1/4 bg-white  rounded-md'>
            <AluminumSideBar />
          </div>
        </div>
      </section>
    </AcfContext.Provider>
  );
}
