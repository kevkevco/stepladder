import './App.css';
import './styles/tailwind.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Components
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import LayoutWithError from './components/LayoutWithError';
// import AboutPage from './components/AboutPage';
// import Coaching from './components/Coaching';
// import Courses from './components/Courses';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <LayoutWithError />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      // {
      //   path: "about",
      //   element: <AboutPage />,
      // },
      // {
      //   path: "courses",
      //   element: <Courses />,
      // },
      // {
      //   path: "coaching",
      //   element: <Coaching />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
