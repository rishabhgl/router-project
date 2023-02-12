import { Link } from 'react-router-dom';

const Events = (props) => {

    const events = [
        { id: 1, name: "Makeathon", type: "Hackathon" },
        { id: 2, name: "HackTU", type: "Hackathon" }
    ];
    return (<>
        <h1>{props.info}</h1>
        <ul>
            {events.map(event => <li key={event.id}><Link to={`/events/${event.id}`}> {event.name} </Link></li>)}
        </ul>

    </>
    );
}

export default Events;