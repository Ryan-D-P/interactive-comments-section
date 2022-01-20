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
import data from "./data.json";

function App() {
  // State to store th comments data
  const [comments, setComments] = useState(data);

  // Functions to update the state when a comment is upvoted/downvoted
  const incRatingState = (id) => {
    const obj = {...comments};
    obj.comments.find(comment => comment.id === id).score += 1;
    setComments(obj);
  };

  const decRatingState = (id) => {
    const obj = {...comments};
    obj.comments.find(comment => comment.id === id).score -= 1;
    setComments(obj);
  };

  return (
    <div className="App">
      <main className="main-content">
        <Comments amyrobsonProfileImg={ amyrobsonProfileImg } maxblagunProfileImg={ maxblagunProfileImg } ramsesmironProfileImg={ ramsesmironProfileImg } juliusomoProfileImg={ juliusomoProfileImg } plus={ plus } minus={ minus } comments={ comments } incRatingState={ incRatingState } decRatingState={ decRatingState } />
        <Post juliusomoProfileImg={ juliusomoProfileImg } />
      </main>

      {/* <Attribution /> */}

    </div>
  );
}

export default App;
