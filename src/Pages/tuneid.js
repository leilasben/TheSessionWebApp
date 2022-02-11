import React, {useState} from "react";
import axios from "axios";
import { renderAbc } from "abcjs";
export default function TuneInfo(props) {
    const id  = props.match.params.id;
    
    const [indTune, setindTune] = useState([])

    const getindTune = () => {
        axios.get(`https://thesession.org/tunes/${id}?format=json`).then((response) => {
            console.log(response);
            setindTune(response.data)
        });
    };

    React.useEffect(() => {
        getindTune();
    }, []);

    var abc = (`X:1\nT:${indTune.name}\nK:${indTune.settings?.[0].key}\n${indTune.settings?.[0].abc}`);
    renderAbc("target", abc)

    return(
        <div id="target">
            <p>{indTune.aliases}</p>
        </div>
    )
}