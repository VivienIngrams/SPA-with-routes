import EventItem from "../components/EventItem";

import { useRouteLoaderData, json } from "react-router-dom";

function EventDetail() {
const data = useRouteLoaderData('event-detail');

  return <EventItem event={data.event}/>;
}

export default EventDetail;

export async function loader({ request, params }) {
  const id = params.id;

 const response = await fetch('http://localhost:8080/events/' + id);

 if (!response.ok) {
  throw json({ message: 'Could not fetch details for the selected event.'}, { status: 500, })
 } else {
   return response;
 }
};