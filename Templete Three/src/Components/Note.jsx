import { LuNotepadText } from 'react-icons/lu';

const Note = () => {
  return (
    <div className='flex items-center justify-center flex-col-reverse sm:flex-row gap-4 text-center sm:text-left'>
      <LuNotepadText className='h-12 w-12 sm:h-1/2 sm:w-1/2 text-[#b71f39]' />
      <p className='text-gray-500'>
        IMPORTANT: The values and recommendations in this card are not
        contractual and can not be used as claim for order cancellations or
        returns. This technical data may vary at any time without previous
        notice. Color samples may not necessarily be an exact match of the
        material to be used to produce your order. Returns will not be accepted
        due to minor variations of color or texture.
      </p>
    </div>
  );
};
export default Note;
