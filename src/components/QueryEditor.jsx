import { memo } from 'react';
import ReactCodeMirror from '@uiw/react-codemirror';
import { sql } from '@codemirror/lang-sql';
import { githubLight, githubDark } from '@uiw/codemirror-theme-github';
import useAppStore from '../store/useAppStore';

const QueryEditor = memo(function QueryEditor({ query, setQuery }) {
  const darkMode = useAppStore((state) => state.darkMode);

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <ReactCodeMirror
      value={query}
      extensions={[sql()]}
      onChange={handleQueryChange}
      theme={darkMode ? githubDark : githubLight}
    />
  );
});

export default QueryEditor;
