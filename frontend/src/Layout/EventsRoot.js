import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import EventsNavigation from '../components/BuiltComponents/EventsNavigation';

const EventsRoot = () => {
    return ( <Fragment>
        <EventsNavigation />
        <Outlet />
    </Fragment> );
}
 
export default EventsRoot;