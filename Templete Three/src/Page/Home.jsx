import { createContext } from 'react';
import Gallery from '../Components/Gallery';
import AluminumSideBar from '../Components/AluminumSideBar';
import TabbedInterface from '../Components/TabbedInterface';
import HeadingBar from '../Components/HeadingBar';
import Certificates from '../Components/Certificates';
import Applications from '../Components/Applications';
import { LuNotepadText } from 'react-icons/lu';
import CareAndMaintenance from '../Components/CareAndMaintenance';
import Manufacturing from '../Components/Manufacturing';

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
        link: 'https://pt-two-sable.vercel.app/',
      },
      {
        id: '6-800-ATCHB-02',
        url: 'https://s3.amazonaws.com/vertilux-website/public/thumb/6800ATCHB02.jpg',
        link: 'https://pt-two-sable.vercel.app/',
      },
      {
        id: '6-800-ATCHB-06',
        url: 'https://s3.amazonaws.com/vertilux-website/public/thumb/6800ATCHB06.jpg',
        link: 'https://pt-two-sable.vercel.app/',
      },
      {
        id: '6-800-ATESBT-6',
        url: 'https://s3.amazonaws.com/vertilux-website/public/thumb/6800ATESBT6.jpg',
        link: 'https://pt-two-sable.vercel.app/',
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
          measurement: '1¾" | 45 mm',
          tubeType: 'Aluminum Tube',
          modelNumber: '0-154-TU-452XX',
          driveType: 'Crown & Drive',
          solutionNumber: '6-700-AS-35045',
        },
      },
      {
        image:
          'https://vertilux-website.s3.amazonaws.com/motorization/RecomendedTubes/0-154-TU-380XX.jpg',
        data: {
          measurement: '2" | 50 mm',
          tubeType: 'Keyed Aluminum Tube',
          modelNumber: '0-154-TU-5021X',
          driveType: 'Crown & Drive',
          solutionNumber: '6-700-AC-35K50',
        },
      },
      {
        image:
          'https://vertilux-website.s3.amazonaws.com/motorization/RecomendedTubes/0-154-TU-384XX.jpg',
        data: {
          measurement: '2" | 50 mm',
          tubeType: 'Grooved Aluminum Tube',
          modelNumber: '0-154-TU-501XX',
          driveType: 'Crown & Drive',
          solutionNumber: '6-700-AS-35G50',
        },
      },
      {
        image:
          'https://vertilux-website.s3.amazonaws.com/motorization/RecomendedTubes/0-154-TU-452XX.jpg',
        data: {
          measurement: '2" | 50 mm',
          tubeType: 'Grooved Aluminum Tube',
          modelNumber: '0-154-TU-501XX',
          driveType: 'Crown & Drive',
          solutionNumber: '6-700-AS-25038',
        },
      },
      {
        image:
          'https://vertilux-website.s3.amazonaws.com/motorization/RecomendedTubes/0-154-TU-452XX.jpg',
        data: {
          measurement: '2" | 50 mm',
          tubeType: 'Grooved Aluminum Tube',
          modelNumber: '0-154-TU-501XX',
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
    care_maintenance_icons: [
      'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/TS_RX-Daku-1-icon.png',
      'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/TS_RX-Daku-2-icon.png',
      'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/TS_RX-Daku-3-icon.png',
      'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/TS_RX-Daku-4-icon.png',
      'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/TS_RX-Daku-5-icon.png',
    ],
    text: '1. Vacuum clean for regular maintenance.\r\n2. Do not wash.\r\n3. Do not wring dry.\r\n4. Do not bleach.\r\n5. Do not dry clean nor use steam cleaning',
    manufacturing_box: [
      {
        box_name: 'Can be Railroaded',
        box_image:
          'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/TS_RX-Daku-6-icon.png',
      },
      {
        box_name: 'Ultrasonic Cut NOT Required',
        box_image:
          'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/TS_RX-Daku-7-icon.png',
      },
      {
        box_name: 'dummy-1',
        box_image:
          'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/p_2_3.png',
      },
      {
        box_name: 'dummy-2',
        box_image:
          'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/18.png',
      },
      {
        box_name: 'dummy-3',
        box_image:
          'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/p_3_9-removebg-preview.png',
      },
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
            <div className='w-full flex md:flex-row flex-col justify-between items-stretch mt-12'>
              <div className='p-[20px] w-[100%] md:w-1/2'>
                <HeadingBar heading='CARE & MAINTENANCE' />
                <CareAndMaintenance />
              </div>
              <div className='p-[20px] w-[100%] md:w-1/2'>
                <HeadingBar heading='MANUFACTURING' />
                <Manufacturing />
              </div>
            </div>

            <div className='w-full flex md:flex-row flex-col   justify-center md:justify-between items-stretch mt-12'>
              <div className='p-[20px] w-[100%] md:w-1/2'>
                <HeadingBar heading='INTERNATIONAL CERTIFICATIONS' />
                <Certificates />
              </div>
              <div className='p-[20px] w-[100%] md:w-1/2'>
                <HeadingBar heading='ACCESSORIES' />
                <Applications />
              </div>
            </div>
            <TabbedInterface />
            <div className='flex items-center justify-center gap-4 text-'>
              <LuNotepadText className='h-1/2    w-1/2 text-[#b71f39]' />
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
