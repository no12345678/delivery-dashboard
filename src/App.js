import "./App.css";
import SideMenu from "./SideMenu";
import MiddleSection from "./MiddleSection";
import RightSection from "./RightSection";

function App() {
  return (
    <div className="App">
      <div className="SideMenuContainer">
        <SideMenu />
      </div>
      <div className="middleSection">
        <MiddleSection />
      </div>
      <div className="rightSection">
        <RightSection />
      </div>
    </div>
  );
}

export default App;
