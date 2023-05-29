import { Link } from "react-router-dom";

const EVENTS = [
  { title: "Get married", id: "e1" },
  { title: "Go on holiday", id: "e2" },
  { title: "Doctor's appointment", id: "e3" },
];

function Events() {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Events;
