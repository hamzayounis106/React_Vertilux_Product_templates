import React, { useContext } from 'react';
import { AcfContext } from '../Page/Home';

export default function ColorTable() {
  const acfData = useContext(AcfContext);

  const colors = [
    {
      id: '01',
      name: 'SNOWFLAKES',
      code: '0-002-70-96072',
    },
    {
      id: '02',
      name: 'OFF WHITE',
      code: '0-002-70-93472',
    },
    {
      id: '03',
      name: 'BISQUE',
      code: '0-002-70-93372',
    },
    {
      id: '04',
      name: 'BLACK',
      code: '0-002-70-93372',
    },
  ];
  return (
    <div className=' w-[90%] xl:w-[100%] flex justify-start items-center flex-col'>
      <table className='w-[95%]'>
        <tbody>
          <tr>
            <th className='w-[50%] text-[#58585A] text-start capitalize md:text-[18px] text-[16px] font-[600] IBM'>
              Colors
            </th>
            <th className='w-[50%] text-[#58585A] text-start capitalize md:text-[18px] text-[16px] font-[600] IBM'>
              Codes
            </th>
          </tr>
          <tr>
            <td className='h-[15px]'></td>
          </tr>

          {colors.map((color) => (
            <>
              <tr key={color.id}>
                <td className='w-[50%] text-[#58585A] capitalize md:text-[18px] text-[16px] font-[600] IBM'>
                  {color.name}
                </td>
                <td className='text-[#A6A6A8] w-[50%] md:text-[18px] text-[16px] font-[400] IBM'>
                  {color.code}
                </td>
              </tr>
              <tr>
                <td className='h-[10px]'></td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
