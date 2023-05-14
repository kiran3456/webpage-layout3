import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="boxV bgskyblue" id="boxVMain">
        <div className="box bggreen" id="box1">
          1
        </div>
        <div className="box bgyellow" id="box2">
          2
        </div>
        <div className="box bgred" id="box3">
          3
        </div>
      </div>
      <div className="boxH bggreen" id="box4">
        <div className="leftbox bgred border" id="boxh1">
          h1
        </div>
      </div>
      <div className="boxH bggreen" id="box4">
        <div className="rightbox bgred border" id="boxh1">
          h1
        </div>
      </div>
      <div className="boxH boxHBig bgred" id="box4">
        <div className="upperbox bgblue" id="boxh2">
          h2
        </div>
        <div className="middlebox bgyellow" id="boxh3">
          h3
        </div>
        <div className="bottombox bgskyblue" id="boxh4">
          h4
        </div>
      </div>
    </div>
  );
}

export default App;
