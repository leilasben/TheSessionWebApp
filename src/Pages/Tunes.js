import axios from "axios";
import React, {useState} from "react";

function Tune() {

    const [tune, setTune] = useState([])

    const getTune = () => {
        axios.get("https://thesession.org/tunes/popular?format=json").then(
            (response) => {
                console.log(response);
                setTune(response.data.tunes)
            }
        );
    };

    React.useEffect(() => {
        getTune();
      }, []);

    return (
        <div>
      <h1>Featured Tunes</h1>
      <div className='item-container'>
        {tune.map((tunes) => (
          <div className='card'>
              <h3>{tunes.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tune;