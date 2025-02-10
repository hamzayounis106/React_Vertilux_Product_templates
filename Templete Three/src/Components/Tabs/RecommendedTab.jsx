import { useActionData } from 'react-router-dom';
import { AcfContext } from '../../Page/Home';

export default function RecommendedTab({ recommendedProducts, acfData }) {
  if (!recommendedProducts || recommendedProducts.length === 0) return null;
  return (
    <section>
      <div className='overflow-x-auto'>
        <table className='border-collapse'>
          <tbody>
            <tr className='flex gap-4  flex-wrap items-center justify-center'>
              {recommendedProducts.map((product, index) => (
                <td key={index} className='  rounded-md shadow-md text-center'>
                  <img
                    src={product.image}
                    alt={`Product ${index + 1}`}
                    className='w-20 h-20 object-contain mx-auto'
                  />
                  <p className='text-sm text-gray-600  '>
                    {product.data.measurement}
                  </p>
                  <p className='text-sm text-gray-600 bg-gray-200'>
                    {product.data.tubeType}
                  </p>
                  <p className='text-sm text-gray-600'>
                    {product.data.modelNumber}
                  </p>
                  <p className='text-sm text-gray-600 bg-gray-200'>
                    {product.data.driveType}
                  </p>
                  <p className='text-sm text-gray-600'>
                    {product.data.solutionNumber}
                  </p>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <main className='my-12'>
        <h1 className='text-[#900909] font-semibold'>Smart Solutions</h1>
        <div className='flex '>
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
      </main>
    </section>
  );
}
