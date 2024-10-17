# Dashboard

A responsive dashboard application built with Vite that supports light and dark themes.

## Features

- Data visualization with charts
- Responsive layout
- User-friendly navigation
- Dashboard page is at default route and order page is at (Dashboards/Projects/Orders)
- Filtering and sorting capabilities in orders tables
- Light and Dark themes toggle

## Technologies Used

- **Vite**:Vite is a JavaScript build tool that's designed to speed up and streamline the development process for React and other JavaScript frameworks.
- **React Router**: For routing and navigation.
- **Framer Motion**: For animations and transitions.
- **Recharts**: For creating charts and data visualizations.
- **React Simple Maps**: For mapping functionalities.
- **Moment.js**: For date and time manipulations.

## Installation

step 1 : clone this repo using git clone

```
git clone https://github.com/MaheshRana-3103/Mahesh-dashboard.git
```

step 2 : install the required dependencies

```
npm install
```

step 3 : To start the development server run the following command

```
npm run dev
```

step 4 : After server is started , it will run at

```
port: http://localhost:5173
dashboard : http://localhost:5173/dashboard/default
orders page : http://localhost:5173/dashboard/projects/orders

if we go to any other route we will be shown a 404 page which can also redirect us to dashboard page

```

## Challenges Faced

- I haven't worked extensively with Framer Motion before, so it was an interesting challenge to use it in this assignment. Typically, for simple animations, I implement them manually to avoid increasing JavaScript execution time and to maintain good core web vitals. However, using Framer Motion here gave me valuable experience with the library.

- For the charts, I had prior experience working with ECharts. Initially, I explored ECharts for the assignment, but I couldn't find some of the chart types I needed. This led me to experiment with other libraries, eventually bringing me to React Simple Maps, which fit my requirements better.

- Another minor challenge I faced, although it was time-consuming, was how to handle unimplemented routes. I didn't want to write individual handlers for each route, as that would bloat the code. After some research, I discovered the use of the "\*" parameter to redirect all non-implemented routes efficiently.

- I also had the opportunity to learn about Error Boundaries, which improved my understanding of error handling in React. Unfortunately, I couldn't delve into the testing part due to time constraints, but I'm eager to explore it further after submitting the assignment.
