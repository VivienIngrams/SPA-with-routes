const EVENTS = [
  { title: "Get married", id: "e1" },
  { title: "Go on holiday", id: "e2" },
  { title: "Doctor's appointment", id: "e3" },
];

function Events() {
  return (
    <>
      <h1>Events Page</h1>
      {EVENTS.map((events) => (
        <h2>{events.title}</h2>
      ))}
    </>
  );
}

export default Events;
