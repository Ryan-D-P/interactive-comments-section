import Attribution from './Attribution';
import Comments from './Comments';
import Post from './Post';
import amyrobsonProfileImg from  "./images/avatars/image-amyrobson.png";
import maxblagunProfileImg from "./images/avatars/image-maxblagun.png";
import ramsesmironProfileImg from "./images/avatars/image-ramsesmiron.png";
import juliusomoProfileImg from "./images/avatars/image-juliusomo.png";
import plus from "./images/icon-plus.svg";
import minus from "./images/icon-minus.svg";
import { useState } from 'react';

function App() {
  // State to store th comments data
  const [comments, setComments] = useState({});

  // Function to get the user comments from the JSON file
  const getComments = async () => {
    const response = await fetch("http://localhost:3000/data.json");
    const data = await response.json();

    // Update the state with the fetched comments JSON data
    setComments(data);
  };

  return (
    <div className="App">
      <main className="main-content">
        <Comments amyrobsonProfileImg={ amyrobsonProfileImg } maxblagunProfileImg={ maxblagunProfileImg } ramsesmironProfileImg={ ramsesmironProfileImg } juliusomoProfileImg={ juliusomoProfileImg } plus={ plus } minus={ minus } comments={ comments } getComments={ getComments } />
        <Post juliusomoProfileImg={ juliusomoProfileImg } />
      </main>

      {/* <Attribution /> */}

    </div>
  );
}

export default App;
