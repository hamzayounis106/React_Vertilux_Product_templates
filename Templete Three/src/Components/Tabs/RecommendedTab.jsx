export default function RecommendedTab({ recommendedProducts }) {
  return (
    <div className='flex flex-wrap md:flex-nowrap items-center justify-center gap-3'>
      {recommendedProducts.map((product, index) => (
        <div
          key={index}
          className='flex flex-col items-center justify-center border px-2 py-4 rounded-lg'
        >
          <img
            src={product.image}
            alt={`Product ${index + 1}`}
            className='w-48 h-48 object-contain'
          />
          <div className='text-center text-sm text-gray-600 font-semibold'>
            <p>{product.data.measurement}</p>
            <p>{product.data.tubeType}</p>
            <p>{product.data.modelNumber}</p>
            <p>{product.data.driveType}</p>
            <p>{product.data.solutionNumber}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
