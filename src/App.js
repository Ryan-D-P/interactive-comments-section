import Attribution from './Attribution';
import Comments from './Comments';
import Post from './Post';
import amyrobsonProfileImg from  "./images/avatars/image-amyrobson.png";
import maxblagunProfileImg from "./images/avatars/image-maxblagun.png";
import ramsesmironProfileImg from "./images/avatars/image-ramsesmiron.png";
import juliusomoProfileImg from "./images/avatars/image-juliusomo.png";
import plus from "./images/icon-plus.svg";
import minus from "./images/icon-minus.svg";

function App() {
  return (
    <div className="App">
      <main className="main-content">
        <Comments amyrobsonProfileImg={ amyrobsonProfileImg } maxblagunProfileImg={ maxblagunProfileImg } ramsesmironProfileImg={ ramsesmironProfileImg } juliusomoProfileImg={ juliusomoProfileImg } plus={ plus } minus={ minus } />
        <Post juliusomoProfileImg={ juliusomoProfileImg } />
      </main>

      {/* <Attribution /> */}

    </div>
  );
}

export default App;
