import Attribution from './Attribution';
import Comments from './Comments';
import Post from './Post';
import data from "./data.json";
import amyrobsonProfileImg from  "./images/avatars/image-amyrobson.png";
import maxblagunProfileImg from "./images/avatars/image-maxblagun.png";
import ramsesmironProfileImg from "./images/avatars/image-ramsesmiron.png";
import juliusomoProfileImg from "./images/avatars/image-juliusomo.png";
import { useState } from "react";

function App() {
  // State to store the comments data
  const [userDataObj, setUserDataObj] = useState(data);
  // Stores the ID for a newly posted comment
  let newId = 1;
  const getNewId = () => newId;
  const setNewId = (value) => {
    newId = value;
    return null;
  };
  // Object to store the profile image URLs
  const profileImages = {
    amyrobson: amyrobsonProfileImg,
    maxblagun: maxblagunProfileImg,
    ramsesmiron: ramsesmironProfileImg,
    juliusomo: juliusomoProfileImg,
  };

  return (
    <div className="App">
      <main className="main-content">
        <Comments userDataObj={ userDataObj } setUserDataObj={ setUserDataObj } getNewId={ getNewId } setNewId={ setNewId } profileImages={ profileImages } />
        <Post
          inputValue={ "" }
          isReplyPost={ "" }
          userDataObj={ userDataObj }
          setUserDataObj={ setUserDataObj }
          getNewId={ getNewId }
          currentUserImg={ profileImages[userDataObj.currentUser.username] }
          buttonText={ "SEND" } 
        />
      </main>

      {/* <Attribution /> */}

    </div>
  );
}

export default App;
