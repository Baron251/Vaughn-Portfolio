import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import AboutMe from "./components/aboutme/AboutMe";
import Projects from "./components/projects/Projects";
import Interests from "./components/interests/Interests";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="baron251.github.io/" element={<Home />} />
				<Route path="baron251.github.io/aboutme" element={<AboutMe />} />
				<Route path="baron251.github.io/projects" element={<Projects />} />
				<Route path="baron251.github.io/interests" element={<Interests />} />
				<Route path="baron251.github.io/work" element={<Work />} />
				<Route path="baron251.github.io/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
