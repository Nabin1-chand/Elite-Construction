import { createContext, useState } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
//   const [projects, setProjects] = useState([
//     {
//       id: "mrta-purple-south",
//       name: "MRTA Purple Line (South) Project Contract 3 Underground",
//       numberOfHoles: 92, // default number of holes

//     },
//   ]);
 //sTART WITH EMPTY ARRAY
  const [projects, setProjects] = useState([]);
  // Add new project
  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  // Update number of holes for a project
  const updateNumberOfHoles = (projectId, newNumber) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === projectId ? { ...p, numberOfHoles: newNumber } : p
      )
    );
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        addProject,
        updateNumberOfHoles
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
