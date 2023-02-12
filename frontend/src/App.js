import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Home from './components/Home/Home';
import EventsRoot from './Layout/EventsRoot';
import Events from './components/Events/Events';
import EventDetails from './components/Events/EventDetails';
import EditEvent from './components/Events/EditEvent';
import NewEvent from './components/Events/NewEvent';
import Root from './Layout/Root';

// Challenge / Exercise

// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      children: [
      {index: true, element: <Home />},
      {
        path: 'events',
        element: <EventsRoot />,
        children: [
        {index: true, element: <Events info = "info"/>},
        { path: ':id', element: <EventDetails />},
        {path: ':id/edit', element: <EditEvent />},
        { path: 'new', element: <NewEvent />}
      ]
      }
    ]
    }
  ]
)

function App() {
  return (<RouterProvider router={router} />);
}

export default App;
