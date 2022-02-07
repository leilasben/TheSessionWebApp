import React, {useState} from "react";
import axios from "axios";

function Recordings() {

    const [recording, setRecording] = useState([])

    const getRecording = () => {
        axios.get("https://thesession.org/recordings/new?format=json").then((response) => {
            console.log(response);
            setRecording(response.data.recordings)
        });
    };
    React.useEffect(() => {
        getRecording();
    }, []);
    return(
        <div className="item-container">
            <h1>hello</h1>
            <div>
                {recording.map((recordings) => (
                    <p>{recordings.name}</p>
                ))}
            </div>
        </div>
    )
}
    export default Recordings;