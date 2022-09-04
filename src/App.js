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

      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
    </div>
  );
}

export default App;
