import Attribution from './Attribution';
import Comments from './Comments';
import Post from './Post';
import data from "./data.json";
import { useState } from "react";

function App() {
  // State to store the comments data
  const [userDataObj, setUserDataObj] = useState(data);

  return (
    <div className="App">
      <main className="main-content">
        <Comments userDataObj={ userDataObj } setUserDataObj={ setUserDataObj } />
        <Post userDataObj={ userDataObj } setUserDataObj={ setUserDataObj } />
      </main>

      {/* <Attribution /> */}

    </div>
  );
}

export default App;
