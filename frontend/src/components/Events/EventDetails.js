import { useParams } from 'react-router-dom';

const EventDetails = () => {
    const params = useParams();
    return ( 
        <h1>This page contains information about event {params.id}</h1>
     );
}
 
export default EventDetails;