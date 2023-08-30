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
				<Route path="/Vaughn-Portfolio/" element={<Home />} />
				<Route path="/Vaughn-Portfolio/aboutme" element={<AboutMe />} />
				<Route path="/Vaughn-Portfolio/projects" element={<Projects />} />
				<Route path="/Vaughn-Portfolio/interests" element={<Interests />} />
				<Route path="/Vaughn-Portfolio/work" element={<Work />} />
				<Route path="/Vaughn-Portfolio/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
