import React, {useState} from "react";
import axios from "axios";

function Event() {

    const [event, setEvent] = useState([])

    const getEvent = () => {
        axios.get("https://thesession.org/events/upcoming?format=json").then((response) => {
            console.log(response);
            setEvent(response.data.events)
        });
    };
    React.useEffect(() => {
        getEvent();
    }, []);
    return(
        <div className="item-container">
            <h1>hello</h1>
            <div>
                {event.map((events) => (
                    <p>{events.name}</p>
                ))}
            </div>
        </div>
    )
}
    export default Event;