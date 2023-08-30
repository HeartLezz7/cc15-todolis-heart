import { FaInbox, FaCalendar, FaCalendarAlt } from 'react-icons/fa';
import "./sidebar.scss"
import Accordion from './accordion';

function Sidebar() {
    return( 
        <>
            <div className='sidebar__todolist'>
                <div className='sidebar__todolist__general'>
                    <FaInbox />
                    <p>Indox</p>
                </div>
                <div className='sidebar__todolist__general'>
                    <FaCalendar />
                    <p>Today</p>
                </div>
                <div className='sidebar__todolist__general'>
                    <FaCalendarAlt />
                    <p>Next 7 days</p>
                </div>
            </div>
                <Accordion/>
        </>  


    )
}

export  default Sidebar;