import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Solutions from "./components/Solutions";

function App() {
	return (
		<div className="relative font-Noto">
			<NavBar />
			<div>
				<Hero />
				<Solutions />
				<About />
				<Contact />
			</div>
		</div>
	);
}

export default App;
