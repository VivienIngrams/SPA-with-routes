// Challenge / Exercise
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import EditEvent from "./pages/EditEvent";
import Events, { loader as eventsLoader } from "./pages/Events";
import Home from "./pages/Home";
import EventDetail, { loader as eventDetailLoader } from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
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
            path: "",
            element: <Events />,
            loader: eventsLoader,
          },
          {
            path: ":id",
            children: [
              {
                path: "",
                element: <EventDetail />,
                loader: eventDetailLoader,
              },
            ],
          },
          { path: "new", element: <NewEvent /> },
          { path: ":id/edit", element: <EditEvent /> },
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
