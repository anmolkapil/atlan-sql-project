import useAppStore from '../store/useAppStore';
import { memo } from 'react';

const DarkModeSwitch = memo(function DarkModeSwitch() {
  const darkMode = useAppStore((state) => state.darkMode);
  const toggleDarkMode = useAppStore((state) => state.toggleDarkMode);

  return (
    <div
      onClick={toggleDarkMode}
      className='flex items-center justify-center select-none cursor-pointer w-[50px] dark:hover:text-slate-100'
    >
      <span className='material-symbols-outlined'>
        {darkMode ? 'light_mode' : 'dark_mode'}
      </span>
    </div>
  );
});

export default DarkModeSwitch;
