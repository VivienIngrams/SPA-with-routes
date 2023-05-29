// Challenge / Exercise
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import EditEvent from "./pages/EditEvent";
import Events from "./pages/Events";
import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EventsRootLayout from "./pages/EventsRoot";

// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          { path: "", element: <Events /> },
          { path: ":id", element: <EventDetail /> },
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
