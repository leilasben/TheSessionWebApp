import React, {useState} from "react";
import axios from "axios";

function Session() {

    const [session, setSession] = useState([])

    const getSession = () => {
        axios.get("https://thesession.org/sessions/new?format=json").then((response) => {
            console.log(response);
            setSession(response.data.sessions)
        });
    };
    React.useEffect(() => {
        getSession();
    }, []);
    return(
        <div className="item-container">
            <h1>hello</h1>
            <div>
                {session.map((sessions) => (
                    <p>{sessions.area.name}</p>
                ))}
            </div>
        </div>
    )
}
    export default Session;