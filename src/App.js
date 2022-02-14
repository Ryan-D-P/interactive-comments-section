import Attribution from './Attribution';
import Comments from './Comments';
import Post from './Post';
import data from "./data.json";
import amyrobsonProfileImg from  "./images/avatars/image-amyrobson.png";
import maxblagunProfileImg from "./images/avatars/image-maxblagun.png";
import ramsesmironProfileImg from "./images/avatars/image-ramsesmiron.png";
import juliusomoProfileImg from "./images/avatars/image-juliusomo.png";
import { useEffect, useState } from "react";

function App() {
  // State to store the comments data
  const [userDataObj, setUserDataObj] = useState(null);
  // State to manage whether user data fetch is loading
  const [isLoading, setIsLoading] = useState(true);

  // Fetch the user data (from localStorage or local JSON file)
  useEffect(() => {
    // Attempt to access localStorage data
    const localData = localStorage.length > 0 ? JSON.parse(localStorage.userDataObj) : null;
    // Object to store the user data
    const userData = localData?.comments.length > 0 ? localData : data;

    // Set the user data state once user data is received and set isLoading state to false to render content
    setUserDataObj(userData);
    setIsLoading(false);
  }, []);
  
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

  // Render the comments and the post component if user data received
  if (!isLoading) {
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
        <footer className="footer-content">
          <Attribution />
        </footer>
      </div>
    );
  }

  return (
      <div className="App">
        <main className="main-content">
          <h1>Loading...</h1>
        </main>
        <footer className="footer-content">
          <Attribution />
        </footer>
      </div>
  );
}

export default App;
