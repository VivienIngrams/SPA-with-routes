// Challenge / Exercise
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import EditEvent from "./pages/EditEvent";
import Events, { loader as eventsLoader } from "./pages/Events";
import Home from "./pages/Home";
import EventDetail, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetail";
import NewEvent, { action as newEventAction } from "./pages/NewEvent";
import EventsRootLayout from "./pages/EventsRoot";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: eventsLoader,
          },
          {
            path: ":id",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetail />,
                action: deleteEventAction,
              },
              { path: "edit", element: <EditEvent /> },
            ],
          },
          { path: "new", element: <NewEvent />, action: newEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
