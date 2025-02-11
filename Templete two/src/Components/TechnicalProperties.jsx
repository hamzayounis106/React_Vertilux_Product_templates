import React, { useContext } from 'react';
import { AcfContext } from '../Page/Home';

export default function TechnicalProperties() {
  const acfData = useContext(AcfContext);
  return (
    <div className=' w-[90%] xl:w-[100%]  flex justify-start items-center flex-col'>
      <table className='w-[95%]'>
        <tbody>
          <tr>
            <td className='w-[50%] text-[#58585A] capitalize md:text-[18px]  text-[16px] font-[600] IBM'>
              codigo
            </td>
            <td className='text-[#A6A6A8] w-[50%] md:text-[18px]  text-[16px] text-[400] IBM'>
              {acfData?.codigo}
            </td>
          </tr>
          <tr>
            <td className='h-[10px]'></td>
          </tr>
          <tr>
            <td className='w-[50%] text-[#58585A] capitalize md:text-[18px]  text-[16px] font-[600] IBM'>
              empaque
            </td>
            <td className='text-[#A6A6A8] w-[50%] md:text-[18px]  text-[16px] text-[400] IBM'>
              {acfData?.empaque}
            </td>
          </tr>
          <tr>
            <td className='h-[10px]'></td>
          </tr>
          <tr>
            <td className='w-[50%] text-[#58585A] capitalize md:text-[18px]  text-[16px] font-[600] IBM'>
              unidad de medida
            </td>
            <td className='text-[#A6A6A8] w-[50%] md:text-[18px]  text-[16px] text-[400] IBM'>
              {acfData?.unidad_de_medida}
            </td>
          </tr>
          <tr>
            <td className='h-[10px]'></td>
          </tr>
          <tr>
            <td className='w-[50%] text-[#58585A] capitalize md:text-[18px]  text-[16px] font-[600] IBM'>
              Composition
            </td>
            <td className='text-[#A6A6A8] w-[50%] md:text-[18px]  text-[16px] text-[400] IBM'>
              {acfData?.Composition}
            </td>
          </tr>
          <tr>
            <td className='h-[10px]'></td>
          </tr>
          <tr>
            <td className='w-[50%] text-[#58585A] capitalize md:text-[18px]  text-[16px] font-[600] IBM'>
              Weight
            </td>
            <td className='text-[#A6A6A8] w-[50%] md:text-[18px]  text-[16px] text-[400] IBM'>
              {acfData?.Weight}
            </td>
          </tr>
          <tr>
            <td className='h-[10px]'></td>
          </tr>
          <tr>
            <td className='w-[50%] text-[#58585A] capitalize md:text-[18px]  text-[16px] font-[600] IBM'>
              Thickness
            </td>
            <td className='text-[#A6A6A8] w-[50%] md:text-[18px]  text-[16px] text-[400] IBM'>
              {acfData?.Thickness}
            </td>
          </tr>
          <tr>
            <td className='h-[10px]'></td>
          </tr>
          <tr>
            <td className='w-[50%] text-[#58585A] capitalize md:text-[18px]  text-[16px] font-[600] IBM'>
              Roll Width
            </td>
            <td className='text-[#A6A6A8] w-[50%] md:text-[18px]  text-[16px] text-[400] IBM'>
              {acfData?.roll_width}
            </td>
          </tr>
          <tr>
            <td className='h-[10px]'></td>
          </tr>
          <tr>
            <td className='w-[50%] text-[#58585A] capitalize md:text-[18px]  text-[16px] font-[600] IBM'>
              Roll Length
            </td>
            <td className='text-[#A6A6A8] w-[50%] md:text-[18px]  text-[16px] text-[400] IBM'>
              {acfData?.roll_length}
            </td>
          </tr>
          <tr>
            <td className='h-[10px]'></td>
          </tr>
          <tr>
            <td className='w-[50%] text-[#58585A] capitalize md:text-[18px]  text-[16px] font-[600] IBM'>
              Light Fastness
            </td>
            <td className='text-[#A6A6A8] w-[50%] md:text-[18px]  text-[16px] text-[400] IBM'>
              {acfData?.light_fastness}
            </td>
          </tr>
          <tr>
            <td className='h-[30px]'></td>
          </tr>
          <tr>
            <td
              colSpan={2}
              className='text-[#A6A6A8]  text-[15px] text-[400] IBM'
            >
              {acfData?.model}
            </td>
          </tr>{' '}
          <tr>
            <td className='h-[10px]'></td>
          </tr>
          <tr>
            <td
              colSpan={2}
              className='text-[#A6A6A8]  text-[10px] text-[400] IBM'
            >
              {acfData?.note}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
