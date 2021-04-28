import "./app.scss";
import left from "./assests/left.png";
import right from "./assests/right.png";
import Phone from "./Components/Phone";

function App() {
  return (
    <div className="header-container">
      <img src={right} alt="React Logo" className="top-right-image" />
      <img src={left} alt="React Logo" className="top-left-image" />
      <div className="header">
        <div className="container">
          <div className="row title">
            <div className="col-lg-8 ">
              <div className="heading-1">
                THE BEST WAY <span>to tip -</span>
              </div>
              <div className="heading-2">Help Your Local</div>
              <div className="heading-3"> restaurants recover faster </div>
              <div className="tagline mt-3">
                <div className="tagline-1">
                  "Stop doing math in your head, the easiest trip calculator
                </div>
                <div className="tagline-2">you'll ever need is here</div>
              </div>
            </div>
            <div className="col-lg-4 p-5 text-center">
              <Phone />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
