import CreateProject from "./Components/CreateProject";
import ManageProjects from "./Components/ManageProjects";
import ProjectType from "./Components/ProjectType";
import SelectView from "./Components/SelectView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (

    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<CreateProject />} />
        <Route path="/project-type" element={<ProjectType />} />
        <Route path="/select-view" element={<SelectView />} />
        <Route path="/manage-projects" element={<ManageProjects />} />

      </Routes>
    </div>
  </Router>
  );
}

export default App;
