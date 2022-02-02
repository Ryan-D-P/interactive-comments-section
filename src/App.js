import Attribution from './Attribution';
import Comments from './Comments';
import Post from './Post';
import data from "./data.json";
import { useState } from "react";

function App() {
  // State to store the comments data
  const [userDataObj, setUserDataObj] = useState(data);
  // Stores the ID for a newly posted comment
  let newId = 1;
  const getId = () => newId;
  const setId = (value) => newId = value;

  return (
    <div className="App">
      <main className="main-content">
        <Comments userDataObj={ userDataObj } setUserDataObj={ setUserDataObj } getId={ getId } setId={ setId } />
        <Post userDataObj={ userDataObj } setUserDataObj={ setUserDataObj } getId={ getId } />
      </main>

      {/* <Attribution /> */}

    </div>
  );
}

export default App;
