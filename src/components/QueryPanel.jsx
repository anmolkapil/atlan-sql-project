import { useState } from 'react';
import Papa from 'papaparse';
import Split from 'react-split';

import QueryRunner from './QueryRunner';
import QueryEditor from './QueryEditor';
import QueryResults from './QueryResults';
import useAppStore from '../store/useAppStore';

function QueryPanel({ tabId, initialQueryName, initialQuery }) {
  const fullScreen = useAppStore((store) => store.fullScreen);
  const activeTab = useAppStore((store) => store.activeTab);
  const [queryName, setQueryName] = useState(initialQueryName);
  const [query, setQuery] = useState(initialQuery);
  const [loading, setLoading] = useState(false);
  const [csvData, setCSVData] = useState(null);
  const [executionTime, setExecutionTime] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [splitSize, setSplitSize] = useState([100, 0]);

  const isActiveTab = activeTab === tabId;

  const handleRunQuery = async () => {
    setLoading(true);

    //Fetching Demo Data
    try {
      setCurrentPage(1);
      const startTime = performance.now();
      let tableName;
      if (query.toLowerCase().trim() === 'select * from customers;')
        tableName = 'customers.csv';
      else if (query.toLowerCase().trim() === 'select * from order_details;')
        tableName = 'order_details.csv';
      else tableName = 'products.csv';
      const response = await fetch(tableName);
      const csvText = await response.text();

      Papa.parse(csvText, {
        header: true,
        complete: (results) => {
          setCSVData(results.data);
          setLoading(false);
          const endTime = performance.now();
          setExecutionTime(endTime - startTime);
          setSplitSize([40, 60]);
        },
        error: (error) => {
          console.error('Error parsing CSV:', error);
          setLoading(false);
          setExecutionTime(0);
        },
      });
    } catch (error) {
      console.error('Error fetching CSV:', error);
      setLoading(false);
      setExecutionTime(0);
    }
  };

  return (
    <div className={`${isActiveTab === false && 'hidden'}`}>
      <QueryRunner
        onRunQuery={handleRunQuery}
        queryName={queryName}
        setQueryName={setQueryName}
        query={query}
        setQuery={setQuery}
        loading={loading}
      />

      <Split
        className={
          fullScreen ? 'h-[calc(100vh-109px)]' : 'h-[calc(100vh-59px)]'
        }
        direction='vertical'
        minSize={0}
        snapOffset={30}
        sizes={splitSize}
      >
        <div className='overflow-auto dark:bg-[#0d1117] text-base'>
          <QueryEditor query={query} setQuery={setQuery} />
        </div>

        <div className='overflow-auto relative dark:bg-slate-600'>
          <QueryResults
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            csvData={csvData}
            isLoading={loading}
            executionTime={executionTime}
            setSplitSize={setSplitSize}
          />
        </div>
      </Split>
    </div>
  );
}
export default QueryPanel;
