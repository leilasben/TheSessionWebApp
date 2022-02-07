import React, {useState} from "react";
import axios from "axios";

function Trip() {

    const [trip, setTrip] = useState([])

    const getTrip = () => {
        axios.get("https://thesession.org/trips/new?format=json").then((response) => {
            console.log(response);
            setTrip(response.data.trips)
        });
    };
    React.useEffect(() => {
        getTrip();
    }, []);
    return(
        <div className="item-container">
            <h1>hello</h1>
            <div>
                {trip.map((trips) => (
                    <p>{trips.name}</p>
                ))}
            </div>
        </div>
    )
}
    export default Trip;