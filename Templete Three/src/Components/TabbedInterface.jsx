import { useContext, useState } from 'react';
import { AcfContext } from '../Page/Home';
import TechnicalTab from './Tabs/TechnicalTab';
import SchematicTab from './Tabs/SchematicTab';
import ProductListing from './ProductListing';

const TabbedInterface = () => {
  const [activeTab, setActiveTab] = useState('technical');
  const acfData = useContext(AcfContext);
  const [formData, setFormData] = useState({
    schematicName: '',
    schematicLink: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Schematic Data:', formData);
  };

  return (
    <div className='my-8 w-full'>
      <div className='flex border-b border-gray-200 flex-wrap'>
        <button
          className={`px-4 py-2 text-lg hover:text-[#b71f39] transition-colors duration-300 ${
            activeTab === 'technical'
              ? 'border-b-2 border-[#b71f39] text-[#b71f39]'
              : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('technical')}
        >
          Technical Specifications
        </button>
        <button
          className={`px-4 py-2 text-lg hover:text-[#b71f39] transition-colors duration-300 ${
            activeTab === 'recommended'
              ? 'border-b-2 border-[#b71f39] text-[#b71f39]'
              : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('recommended')}
        >
          Recommended Products
        </button>
        <button
          className={`px-4 py-2 text-lg hover:text-[#b71f39] transition-colors duration-300 ${
            activeTab === 'schematic'
              ? 'border-b-2 border-[#b71f39] text-[#b71f39]'
              : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('schematic')}
        >
          Schematic
        </button>
      </div>

      <div className='mt-6'>
        {activeTab === 'technical' && (
          <TechnicalTab
            technicalSpecs={acfData.technical_specs}
            pdfLink={acfData.pdf}
          />
        )}

        {activeTab === 'recommended' && <ProductListing />}

        {activeTab === 'schematic' && (
          <SchematicTab
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default TabbedInterface;
