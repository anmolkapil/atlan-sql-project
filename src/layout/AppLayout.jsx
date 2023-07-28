import Sidebar from '../components/Sidebar';
import QueryTab from '../components/QueryTab';

import useAppStore from '../store/useAppStore';

function AppLayout() {
  const darkMode = useAppStore((state) => state.darkMode);
  return (
    <main className={darkMode ? 'dark' : ''}>
      <div
        className={`flex dark:border-slate-100 h-screen divide-x dark:divide-slate-700`}
      >
        <Sidebar />
        <QueryTab />
      </div>
    </main>
  );
}

export default AppLayout;
