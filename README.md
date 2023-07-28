# SQL Editor App

## Overview

This project is a web application for executing and managing SQL queries. It provides a user-friendly interface for data analysts to run SQL queries, view the query results in a tabular format, and save their frequently used queries for future use. The application layout follows a user-friendly tabs design, allowing users to switch between multiple queries seamlessly.

## Features

1. **Tab Interface**

   - Description: The app uses a tab-based interface to organize and manage multiple SQL queries simultaneously. Each tab represents an individual query panel with its own query editor and results.

   - Note: The app enforces a maximum tab limit of **15 Tabs** to prevent the excessive opening of new tabs and maintain a smooth user experience. Users are notified when the maximum tab limit is reached.

2. **Query Editor**

   - Description: The app includes a feature-rich SQL query editor powered by the `react-codemirror` library. It provides syntax highlighting, SQL suggestions, and a modern theme for an enhanced editing experience. The query editor comes with a convenient "Reset Code" button, allowing users to quickly clear the current query and start fresh without any previous content. This feature is helpful when users want to discard their current query and start working on a new one.

3. **Fullscreen Mode**

   - Description: To maximize the editing space and focus solely on the query panel, the app offers a "Fullscreen" button. When users click on this button, the sidebar and tabs are hidden, providing an unobstructed view of the query panel.

4. **Query Execution**

   - Description: Users can run SQL queries from the query editor and view the results in the corresponding query results panel.
   - Note: The app provides demo data in the form of CSV files for demonstration purposes. Users can explore the following demo queries:

     1. `SELECT * FROM customers;` - Fetches data from the `customers.csv` file.
     2. `SELECT * FROM order_details;` - Fetches data from the `order_details.csv` file.
     3. `Custom queries or queries with no specific demo data` - Fetches data from the `products.csv` file.

     **Demo Data:** You can find the demo data at this [GitHub repository](https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv). The app fetches data from these CSV files to simulate real database queries and display the results in the query results panel.

5. **Split View for Editor and Results**

   - Description: The app includes split view using `react-split` to enhance the user experience when working with the query editor and viewing query results. Allowing users to adjust the size of the editor and results panels according to their preferences.

6. **Table Schema**

   - Description: The app also shows the schema of each table.The table schema includes the names of columns along with their respective data types. This feature provides users with a quick overview of the structure of the tables in the database and helps them understand the data they are working with.

7. **Saved Queries**

   - Description: The app allows users to save queries for future use. Users can click on a saved query to open it in a new tab for further editing and execution. The sidebar includes two demo queries that are preloaded to showcase the app's functionality:
     - **"All Customers"**: This demo query retrieves all customer data from the "customers" table.
     - **"All Order Details"**: This demo query retrieves all order details from the "order_details" table.
   - Note: If you delete the demo queries from the saved queries list, they will reappear on page refresh. This behavior is intentional to ensure that users can always access the demo queries for reference and testing purposes.

8. **Local Storage Integration**

   - Description: The app leverages local storage to persist the list of saved queries even after the user refreshes or closes the browser. This ensures that the saved queries are available across sessions.

9. **Dark Mode Support**

   - Description: The app provides a dark mode toggle that allows users to switch between light and dark themes, enhancing readability and reducing eye strain in low-light environments.

10. **Export to CSV**

    - Description: Users can export the query results data to a CSV file using the "Export CSV" button. The exported CSV file contains the data displayed in the query results table.

11. **Error Handling and Feedback**
    - Description: The app provides informative error messages and alerts to notify users of any issues, such as empty query names, empty queries, or when trying to close the last active tab.

## JavaScript Framework and Major Packages

- **React**: A popular front-end JavaScript library for building user interfaces.
- **Zustand**: A lightweight state management library for managing the application's state.
- **react-codemirror**: A React wrapper for CodeMirror, providing a customizable code editor with syntax highlighting and SQL suggestions.
- **PapaParse**: A powerful CSV parsing library for parsing and handling CSV data.
- **lodash.throttle**: A function provided by lodash that creates a throttled version of a given function, allowing the execution of the function at a specified interval, reducing the number of times the function is called.
- **lodash.debounce**: A function provided by lodash that creates a debounced version of a given function, ensuring that the function is called only after a specified delay has passed since the last invocation, effectively preventing the function from being invoked multiple times in quick succession.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building responsive and visually consistent designs.
- **react-split**: A resizable and customizable split layout component for React, enabling the implementation of split views and panes in the application.

## Page Load Time Measurement

## Optimizations for Load Time and Performance

- **Pagination for Query Results:** To avoid rendering a large number of table rows at once, Implemented pagination for query results. This ensures that only a limited number of rows are displayed at a time, improving page load and rendering performance.

- **Debounced and Throttled Function Calls:** To optimize performance, Implemented both debouncing and throttling mechanisms for certain actions. For instance, when exporting data to CSV, used debouncing to ensure that the export function is called only once within a specified time period, preventing unnecessary repeated calls. Additionally, when adding new tabs, used throttling to limit the frequency of tab additions, ensuring a smoother user experience and preventing excessive tab creations.
