import { useState } from "react";
import { PortfolioHome } from "./components/website/PortfolioHome.tsx";
// Import other pages/sections later
// import About from './components/About';
// import Projects from './components/Projects';

//ltr remove the underscroe '_' from setCurrentPage
export function App() {
  const [currentPage, _setCurrentPage] = useState("home");

  const renderPage = () => {
    if (currentPage === "home") return <PortfolioHome />;
    return <PortfolioHome />;
  };

  // Based on the const renderPage results, the page will be shown!
  return <div className="app">{renderPage()}</div>;
}

export default App;

/*
for later copy and use this
	<nav>
		<button onClick={() => setCurrentPage("home")}>Home</button>
		<button onClick={() => setCurrentPage("about")}>About</button>
    </nav>
*/
