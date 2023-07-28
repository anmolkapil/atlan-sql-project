import TableCollection from './TableCollection';
import SavedQueries from './SavedQueries';
import useAppStore from '../store/useAppStore';

function Sidebar() {
  const fullScreen = useAppStore((state) => state.fullScreen);
  const tables = [
    {
      tableName: 'customers',
      columns: [
        { name: 'customerID', type: 'string' },
        { name: 'companyName', type: 'string' },
        { name: 'contactName', type: 'string' },
        { name: 'contactTitle', type: 'string' },
        { name: 'address', type: 'string' },
        { name: 'city', type: 'string' },
        { name: 'region', type: 'string' },
        { name: 'postalCode', type: 'integer' },
        { name: 'country', type: 'string' },
        { name: 'phone', type: 'integer' },
        { name: 'fax', type: 'integer' },
      ],
    },
    {
      tableName: 'order_details',
      columns: [
        { name: 'orderID', type: 'integer' },
        { name: 'productID', type: 'integer' },
        { name: 'unitPrice', type: 'integer' },
        { name: 'quantity', type: 'integer' },
        { name: 'discount', type: 'integer' },
      ],
    },
  ];

  return fullScreen ? (
    <div className='flex flex-col divide-y px-4 dark:bg-slate-800 dark:text-slate-300 bg-gray-50 min-w-[300px] dark:divide-slate-700 max-h-screen overflow-auto'>
      {/* Database Information */}
      <div className='py-4'>
        <div className='flex items-center justify-center gap-3 font-bold text-center bg-white dark:bg-slate-600 border dark:border-slate-600 rounded-lg p-4 text-xl text-gray-950/70 dark:text-white/90'>
          <span className='-ml-2 material-symbols-outlined'>database</span>
          <span>Demo Database</span>
        </div>
      </div>

      {/* Table Collection */}
      <div className='py-4'>
        <h2 className='font-bold text-gray-500 dark:text-slate-400'>TABLES</h2>
        {tables.map((table) => (
          <TableCollection key={table.tableName} table={table} />
        ))}
      </div>

      {/* Saved Queries */}
      <div className='py-4'>
        <h2 className='font-bold text-gray-500 dark:text-slate-400'>
          SAVED QUERIES
        </h2>
        <SavedQueries />
      </div>
    </div>
  ) : null;
}

export default Sidebar;
