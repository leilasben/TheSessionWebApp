import React, {useState} from "react";
import axios from "axios";

function Discussion() {

    const [discussion, setDiscussion] = useState([])

    const getDiscussion = () => {
        axios.get("https://thesession.org/discussions/comments?format=json").then((response) => {
            console.log(response);
            setDiscussion(response.data.comments)
        });
    };
    React.useEffect(() => {
        getDiscussion();
    }, []);
    return(
        <div className="item-container">
            <h1>hello</h1>
            <div>
                {discussion.map((discussions) => (
                    <p>{discussions.content}</p>
                ))}
            </div>
        </div>
    )
}
    export default Discussion;