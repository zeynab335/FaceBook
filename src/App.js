import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      {/* Header  */}
      <Header />

      {/* App Body */}
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
      </div>
    </div>
  );
}

export default App;
