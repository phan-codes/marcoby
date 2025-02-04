import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
				<Footer />
			</div>
		</div>
	);
}

export default App;
