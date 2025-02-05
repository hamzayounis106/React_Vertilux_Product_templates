import { useContext } from 'react';
import { AcfContext } from '../Page/Home';
import {
  FaBarcode,
  FaLinkedin,
  FaEnvelope,
  FaTwitterSquare,
  FaWhatsappSquare,
} from 'react-icons/fa';
import { TbPackages } from 'react-icons/tb';
import { FaSliders } from 'react-icons/fa6';
import { ImFacebook2 } from 'react-icons/im';

const AluminumSideBar = () => {
  const acfData = useContext(AcfContext);

  // Create share URLs
  const shareUrl = encodeURIComponent(acfData.share_link[0]);
  const shareText = encodeURIComponent(acfData.main_heading);

  const socialLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    email: `mailto:?subject=${shareText}&body=${shareUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`,
  };

  return (
    <aside className='flex flex-col '>
      <h1 className='text-2xl'>General Information</h1>
      <main className='my-12 flex  flex-col gap-y-4'>
        <div className='flex items-center gap-4'>
          <FaBarcode className='text-red-600' />
          <div className='text-gray-600'>
            <span className='font-semibold text-gray-800'>Item Code:</span>
            {acfData.item_code}
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <TbPackages className='text-red-600' />
          <div className='text-gray-600'>
            <span className='font-semibold text-gray-800'>Packing Unit:</span>
            {acfData.packing_unit}
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <FaSliders className='text-red-600' />
          <div className='text-gray-600'>
            <span className='font-semibold text-gray-800'>
              Unit of Measurement:
            </span>
            {acfData.unit_of_measurement}
          </div>
        </div>
      </main>
      <main className=''>
        <h1 className='text-2xl'>Share it</h1>
        <div className='flex gap-4 mt-4 '>
          <a
            href={socialLinks.facebook}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:text-blue-700 transition-colors'
          >
            <ImFacebook2 className='w-8 h-8 ' />
          </a>
          <a
            href={socialLinks.twitter}
            target='_blank'
            rel='noopener noreferrer'
            className='text-sky-500 hover:text-sky-600 transition-colors'
          >
            <FaTwitterSquare className='w-8 h-8' />
          </a>
          <a
            href={socialLinks.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-700 hover:text-blue-800 transition-colors'
          >
            <FaLinkedin className='w-8 h-8' />
          </a>
          <a
            href={socialLinks.email}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-gray-700 transition-colors'
          >
            <FaEnvelope className='w-8 h-8' />
          </a>
          <a
            href={socialLinks.whatsapp}
            target='_blank'
            rel='noopener noreferrer'
            className='text-green-600 hover:text-green-700 transition-colors'
          >
            <FaWhatsappSquare className='w-8 h-8' />
          </a>
        </div>
      </main>
      <main className='my-12'>
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
