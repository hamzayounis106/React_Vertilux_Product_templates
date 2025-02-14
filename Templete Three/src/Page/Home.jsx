import { createContext } from 'react';
import Gallery from '../Components/Gallery';
import AluminumSideBar from '../Components/AluminumSideBar';
import HeadingBar from '../Components/HeadingBar';
import Certificates from '../Components/Certificates';
import RecommendedTab from '../Components/Tabs/RecommendedTab';
import SmartSolutions from '../Components/SmartSolutions';
import ControlSolutions from '../Components/ControlSolutions';
import PowerSolutions from '../Components/PowerSolutions';
import Note from '../Components/Note';
import Accessories from '../Components/Accessories';

export const AcfContext = createContext();

export default function Home() {
  const acfData = {
    main_heading:
      'VTI®RE-LION Celtic Bidirectional Battery Motor 25mm | 1Nm | 30rpm',
    note: 'Crown and drive for 38 mm tube already installed in the motor.',
    smartSolution: [
      {
        icon: '/SmartSolutions/6800HAVTI01.jpg',
        name: 'VTi® Re-lion SMARTHUB Plus',
      },
      {
        icon: '/SmartSolutions/6800HAVTI02.jpg',
        name: 'VTi HomeMate+ App',
      },
      {
        icon: '/SmartSolutions/6800HAVTI03.jpg',
        name: 'VTi® Re-lion SMARTHUB Plu',
      },
      {
        icon: '/SmartSolutions/6800HAVTI04.jpg',
        name: 'VTi HomeMate+ Apps',
      },
      {
        icon: '/SmartSolutions/Logo_app_HomeMate_2023.png',
        name: 'VTi HomeMate + App',
      },
    ],
    powerSolution: [
      {
        icon: '/PowerSolutions/6800MABUSBE.jpg',
        name: 'VTi® Bus Battery Backup - Black Edition',
      },
      {
        icon: '/PowerSolutions/6800MABUSBT.jpg',
        name: 'VTi® Bus Battery Backup - Titanium',
      },
      {
        icon: '/PowerSolutions/6800MABUSBU.jpg',
        name: 'VTi® Bus Battery Backup - Blue Edition',
      },
      {
        icon: '/PowerSolutions/6800MAMBSOL.jpg',
        name: 'VTi® Solar Battery Backup',
      },
    ],
    accessories: [
      {
        application_name: 'Roller Shades',
        icon: '/Accessories/6700BR4SLAM.jpg',
      },
      {
        application_name: 'Indoor Use Only',
        icon: '/Accessories/6700BRSQ001.jpg',
      },
      {
        application_name: 'Cord Safe Solutions',
        icon: '/Accessories/6700BRSQ002.jpg',
      },
    ],
    control_solutions: [
      {
        id: '6800ATCHB02',
        url: '/ControlSolutions/6800ATCHB02.jpg',
        link: 'https://pt-two-sable.vercel.app/',
      },
      {
        id: '6800ATCHB06',
        url: '/ControlSolutions/6800ATCHB06.jpg',
        link: 'https://pt-two-sable.vercel.app/',
      },
      {
        id: '6800ATDEB02',
        url: '/ControlSolutions/6800ATDEB02.jpg',
        link: 'https://pt-two-sable.vercel.app/',
      },
      {
        id: '6800ATDEB06',
        url: '/ControlSolutions/6800ATDEB06.jpg',
        link: 'https://pt-two-sable.vercel.app/',
      },
      {
        id: '6800ATESB16',
        url: '/ControlSolutions/6800ATESB16.jpg',
        link: 'https://pt-two-sable.vercel.app/',
      },
      {
        id: '6800ATESBT6',
        url: '/ControlSolutions/6800ATESBT6.jpg',
        link: 'https://pt-two-sable.vercel.app/',
      },
      {
        id: '6800ATPOU02',
        url: '/ControlSolutions/6800ATPOU02.jpg',
        link: 'https://pt-two-sable.vercel.app/',
      },
      {
        id: '6800ATPOU06',
        url: '/ControlSolutions/6800ATPOU06.jpg',
        link: 'https://pt-two-sable.vercel.app/',
      },
      {
        id: '6800ATPOU16',
        url: '/ControlSolutions/6800ATPOU16.jpg',
        link: 'https://pt-two-sable.vercel.app/',
      },
    ],
    tubes: [
      {
        image: '/Tubes/0-154-TU-452XX.jpg',
        data: {
          measurement: '1¾" | 45 mm',
          tubeType: 'Aluminum Tube',
          modelNumber: '0-154-TU-452XX',
          driveType: 'Crown & Drive',
          solutionNumber: '6-700-AS-35045',
        },
      },
      {
        image: '/Tubes/0-154-TU-5021X.jpg',
        data: {
          measurement: '2" | 50 mm',
          tubeType: 'Keyed Aluminum Tube',
          modelNumber: '0-154-TU-5021X',
          driveType: 'Crown & Drive',
          solutionNumber: '6-700-AC-35K50',
        },
      },
      {
        image: '/Tubes/0-154-TU-50522.jpg',
        data: {
          measurement: '2" | 50 mm',
          tubeType: 'Grooved Aluminum Tube',
          modelNumber: '0-154-TU-50522',
          driveType: 'Crown & Drive',
          solutionNumber: '6-700-AS-35G50',
        },
      },
      {
        image: '/Tubes/0-154-TU-630XX.jpg',
        data: {
          measurement: '2" | 50 mm',
          tubeType: 'Grooved Aluminum Tube',
          modelNumber: '0-154-TU-630XX',
          driveType: 'Crown & Drive',
          solutionNumber: '6-700-AS-25038',
        },
      },
      {
        image: '/Tubes/0-154-TU-830XX.jpg',
        data: {
          measurement: '2" | 50 mm',
          tubeType: 'Grooved Aluminum Tube',
          modelNumber: '0-154-TU-830XX',
          driveType: 'Crown & Drive',
          solutionNumber: '6-700-AS-25038',
        },
      },
    ],
    certificates: [
      '/Certifications/FC (Federal Communications Commission) Mark.png',
      '/Certifications/cRUus (Component Recognition Underwriters Laboratories - UL) Mark.png',
    ],
    sideBarLinkImages: [
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
    // charging_Solution: [
    //   {
    //     id: '6-800-MA-BUSBT',
    //     url: 'https://s3.amazonaws.com/vertilux-website/public/thumb/6800MABUSBT.jpg',
    //   },
    //   {
    //     id: '6-800-MA-MBSOL',
    //     url: 'https://s3.amazonaws.com/vertilux-website/public/thumb/6800MAMBSOL.jpg',
    //   },
    //   {
    //     id: '6-800-MA-BUSBC',
    //     url: 'https://s3.amazonaws.com/vertilux-website/public/thumb/6800MABUSBC.jpg',
    //   },
    // ],

    // technical_specs: {
    //   torque: '1.1 Nm',
    //   speed: '20-25-30 rpm',
    //   soundLevel: '32 dB',
    //   limits: 'Electronic',
    //   indexProtection: 'IP 44',
    //   power: '9.6 W',
    //   current: '0.8 A',
    //   thermalProtection: '6 Minutes',
    //   voltageSupply: '5 V DC (USB-C TYPE)',
    //   radioFrequency: '433.92 MHz',
    //   weightCapacity: '10 lb | 4.5 kg',
    //   batteryType: 'Li-ion 2600 mAh',
    //   workingTemp: '14-131ºF | -10 ~ 55 ºC',
    //   rfModulation: 'FSK',
    // },

    // care_maintenance_icons: [
    //   'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/TS_RX-Daku-1-icon.png',
    //   'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/TS_RX-Daku-2-icon.png',
    //   'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/TS_RX-Daku-3-icon.png',
    //   'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/TS_RX-Daku-4-icon.png',
    //   'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/TS_RX-Daku-5-icon.png',
    // ],
    // text: '1. Vacuum clean for regular maintenance.\r\n2. Do not wash.\r\n3. Do not wring dry.\r\n4. Do not bleach.\r\n5. Do not dry clean nor use steam cleaning',
    // manufacturing_box: [
    //   {
    //     box_name: 'Can be Railroaded',
    //     box_image:
    //       'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/TS_RX-Daku-6-icon.png',
    //   },
    //   {
    //     box_name: 'Ultrasonic Cut NOT Required',
    //     box_image:
    //       'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/TS_RX-Daku-7-icon.png',
    //   },
    //   {
    //     box_name: 'dummy-1',
    //     box_image:
    //       'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/p_2_3.png',
    //   },
    //   {
    //     box_name: 'dummy-2',
    //     box_image:
    //       'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/18.png',
    //   },
    //   {
    //     box_name: 'dummy-3',
    //     box_image:
    //       'https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/p_3_9-removebg-preview.png',
    //   },
    // ],
  };

  return (
    <AcfContext.Provider value={acfData}>
      <section className='max-w-6xl mx-auto px-4 my-12'>
        <h1 className='text-2xl md:text-3xl text-gray-500 mb-4'>
          {acfData.main_heading}
        </h1>
        <div className='flex justify-center flex-col lg:flex-row'>
          <div className='lg:w-3/4'>
            <Gallery />
          </div>
          <div className=' w-full lg:w-1/4 bg-white rounded-md'>
            <AluminumSideBar />
          </div>
        </div>
        <ControlSolutions />
        <main className='my-12'>
          <HeadingBar heading={'Tubes'} />
          <RecommendedTab recommendedProducts={acfData.tubes} />
        </main>

        <main className='w-full flex md:flex-row flex-col justify-between items-stretch mt-12'>
          <div className='p-[20px] w-[100%] md:w-1/2'>
            <HeadingBar heading={'Smart Solutions'} />
            <SmartSolutions />
          </div>
          <div className='p-[20px] w-[100%] md:w-1/2'>
            <HeadingBar heading='Power Solution' />
            <PowerSolutions />
          </div>
        </main>
        {/* <TabbedInterface /> */}

        {/* <div className='w-full flex md:flex-row flex-col justify-between items-stretch mt-12'>
          <div className='p-[20px] w-[100%] md:w-1/2'>
            <HeadingBar heading='CARE & MAINTENANCE' />
            <CareAndMaintenance />
          </div>
          <div className='p-[20px] w-[100%] md:w-1/2'>
            <HeadingBar heading='MANUFACTURING' />
            <Manufacturing />
          </div>
        </div> */}
        <div className='w-full flex md:flex-row flex-col   justify-center md:justify-between items-stretch mt-12'>
          <div className='p-[20px] w-[100%] md:w-1/2'>
            <HeadingBar heading='INTERNATIONAL CERTIFICATIONS' />
            <Certificates />
          </div>
          <div className='p-[20px] w-[100%] md:w-1/2'>
            <HeadingBar heading='ACCESSORIES' />
            <Accessories />
          </div>
        </div>
        <Note />
      </section>
    </AcfContext.Provider>
  );
}
