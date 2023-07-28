import useAppStore from '../store/useAppStore';

function SavedQueries() {
  const savedQueries = useAppStore((store) => store.savedQueries);
  const deleteSavedQuery = useAppStore((store) => store.deleteSavedQuery);
  const addNewTab = useAppStore((store) => store.addNewTab);

  const handleDeleteQuery = (queryName) => {
    const userConfirmed = window.confirm('Are you sure you want to delete?');
    if (!userConfirmed) return;
    deleteSavedQuery(queryName);
  };

  return (
    <ul className='overflow-auto'>
      {Object.keys(savedQueries).map((queryName, index) => (
        <li
          className='my-2 cursor-pointer border dark:border-slate-700 dark:bg-slate-700 bg-white dark:hover:bg-slate-600 hover:bg-gray-100 active:bg-gray-200 rounded-lg'
          key={index}
        >
          <div className='flex items-center justify-between'>
            <div
              onClick={() => addNewTab(queryName, savedQueries[queryName])}
              className='grow mr-1 px-4 py-3 leading-none'
            >
              <span className='text-sm'>{queryName}</span>
            </div>
            <div
              onClick={() => handleDeleteQuery(queryName)}
              className='select-none mr-2 rounded-full hover:bg-gray-300 dark:hover:bg-slate-700 w-8 h-8 flex items-center justify-center'
            >
              <span className='material-symbols-outlined'>delete</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SavedQueries;
