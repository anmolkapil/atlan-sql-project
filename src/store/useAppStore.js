import { create } from 'zustand';
import throttle from 'lodash.throttle';

const demoQueries = {
  'All Customers': 'SELECT * FROM customers;',
  'All Order Details': 'SELECT * FROM order_details;',
};

const savedQueries = JSON.parse(localStorage.getItem('savedQueries'));
localStorage.setItem(
  'savedQueries',
  JSON.stringify({ ...savedQueries, ...demoQueries })
);

const useAppStore = create((set) => ({
  fullScreen: true,
  darkMode: true,
  tabCount: 1,
  activeTab: 1,
  tabs: [
    {
      id: 1,
      title: 'Tab 1',
      queryName: 'All Customers',
      query: 'SELECT * FROM customers;',
    },
  ],
  savedQueries: JSON.parse(localStorage.getItem('savedQueries')),
  toggleFullScreen: throttle(
    () =>
      set((state) => ({
        fullScreen: !state.fullScreen,
      })),
    250
  ),
  toggleDarkMode: throttle(
    () =>
      set((state) => ({
        darkMode: !state.darkMode,
      })),
    250
  ),
  saveNewQuery: (queryName, query) =>
    set((state) => {
      if (!queryName) {
        window.alert('Query Name Cannot be Empty');
        return {};
      }
      if (!query) {
        window.alert('Query Cannot be Empty');
        return {};
      }
      const alreadyExists = queryName in state.savedQueries;
      const newSavedQueries = { ...state.savedQueries, [queryName]: query };
      localStorage.setItem('savedQueries', JSON.stringify(newSavedQueries));
      window.alert(
        `${alreadyExists ? 'Updated' : 'Saved'} "${queryName}" Query!`
      );

      return { savedQueries: newSavedQueries };
    }),
  deleteSavedQuery: (queryName) =>
    set((state) => {
      // eslint-disable-next-line no-unused-vars
      const { [queryName]: _, ...remainingQueries } = state.savedQueries;
      localStorage.setItem('savedQueries', JSON.stringify(remainingQueries));
      return { savedQueries: remainingQueries };
    }),
  increaseTabCount: () => set((state) => ({ tabCount: state.tabCount + 1 })),
  changeActiveTab: (tabId) => set({ activeTab: tabId }),
  addNewTab: throttle(
    (queryName = '', query = '') =>
      set((state) => {
        if (state.tabs.length >= 15) {
          window.alert('Max Tab Limit Reached!!!');
          return {};
        }
        const newTabId = state.tabCount + 1;
        const newTabTitle = `Tab ${newTabId}`;
        const newTabData = {
          id: newTabId,
          title: newTabTitle,
          queryName: queryName,
          query: query,
        };
        state.increaseTabCount();
        state.changeActiveTab(newTabId);
        return { tabs: [...state.tabs, newTabData] };
      }),
    500
  ),
  removeTab: (tabId) =>
    set((state) => {
      let newActiveTabId = null;
      const nextTabs = state.tabs.filter((tab) => {
        if (tab.id !== tabId) {
          return true;
        } else {
          const currentIndex = state.tabs.findIndex((tab) => tab.id === tabId);
          const prevTab = state.tabs[currentIndex - 1];
          const nextTab = state.tabs[currentIndex + 1];
          newActiveTabId = prevTab ? prevTab.id : nextTab ? nextTab.id : null;
          return false;
        }
      });
      if (newActiveTabId === null) {
        window.alert('There must be one active Tab!');
        return {};
      }

      state.changeActiveTab(newActiveTabId);

      return { tabs: nextTabs };
    }),
}));

export default useAppStore;
