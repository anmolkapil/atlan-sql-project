import { useState } from 'react';

function TableCollection({ table }) {
  const [hidden, setHidden] = useState(true);
  return (
    <div className='select-none mt-2'>
      <div
        className='flex items-center cursor-pointer'
        onClick={() => setHidden(!hidden)}
      >
        <span className='material-symbols-outlined select-none'>
          {hidden ? 'chevron_right' : 'expand_less'}
        </span>

        <span className='font-bold tracking-wide'>{table.tableName}</span>
      </div>
      <div className={hidden && 'hidden'}>
        <ul className='border-l-2 border-gray-500/30 pl-4 ml-5'>
          {table.columns.map((column, index) => (
            <li className='text-sm tracking-wider mr-4' key={index}>
              <div className='flex justify-between'>
                <span> {column.name}</span>
                <span className='text-gray-400'>{column.type}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TableCollection;
