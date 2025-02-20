export default function RecommendedTab({ recommendedProducts }) {
  if (!recommendedProducts || recommendedProducts.length === 0) return null;
  return (
    <section>
      <div className='overflow-x-auto mt-6  '>
        <table className='border-collapse w-full'>
          <tbody>
            <tr className=' grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 items-center justify-center w-full py-4'>
              {recommendedProducts.map((product, index) => (
                <td
                  key={index}
                  className=' h-full rounded-md shadow-md text-center text-sm'
                >
                  <img
                    src={product?.image}
                    alt={`Product ${index + 1}`}
                    className='w-20 h-20 object-contain mx-auto'
                  />
                  <p className='text-sm text-gray-600 p-1  '>
                    {product?.data?.measurement}
                  </p>
                  <p className='text-sm text-gray-600 bg-gray-200 py-1 sm:px-1 px-2'>
                    {product?.data?.tubeType}
                  </p>
                  <p className='text-sm text-gray-600 p-1'>
                    {product?.data?.modelNumber}
                  </p>
                  <p className='text-sm text-gray-600 bg-gray-200 p-1'>
                    {product?.data?.driveType}
                  </p>
                  <p className='text-sm text-gray-600 p-1'>
                    {product?.data?.solutionNumber}
                  </p>
                  <p className='text-sm text-gray-600 p-1'>
                    {product?.data?.solutionNumberOptional}
                  </p>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
