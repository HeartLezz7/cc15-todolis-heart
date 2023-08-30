import { FaInbox, FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import "./sidebar.scss"



function Accordion() {
    const [isShow, setShow] = useState(false);
    function hideList() {
        setShow(!isShow)
    }
    const todo =[{
        icon:<FaInbox  />,
        text:"Work"
    },
    {
        icon:<FaInbox  />,
        text:"Home"
    },]
    
    function showAccordion () {
        return todo.map((item) => <div className="sidebar__todolist__general">
        {item.icon}
        <p>{item.text}</p>
    </div>)
    }
    return(
    <div className='sidebar__accordion'>
        <div className='sidebar__accordion__header' >
                <FaChevronDown onClick={hideList}  />
                <h2>Indox</h2>
        </div>
        {isShow && showAccordion()}
            
    </div>
 )
}

export default Accordion;