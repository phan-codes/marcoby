import { useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import NetworkMetrics from "./components/NetworkMetrics";
import EmailSecurity from "./components/EmailSecurity";
import SiteChecker from "./components/SiteChecker";
import NetworkNewsFeed from "./components/NetworkNewsFeed";

function App() {
	const hero = useRef(null);
	const services = useRef(null);
	const about = useRef(null);
	const contact = useRef(null);
	const resources = useRef(null);

	const scrollToSection = (elementRef) => {
		window.scrollTo({
			top: elementRef.current.offsetTop,
			behavior: "smooth",
		});
	};

	return (
		<div className="relative font-Noto text-black dark:text-gray-200 dark:bg-black bg-white flex flex-col">
			<NavBar
				scrollToSection={scrollToSection}
				services={services}
				hero={hero}
				about={about}
				contact={contact}
				resources={resources}
			/>
			<div>
				<Hero elementRef={hero} />
				<Services elementRef={services} />
				<About elementRef={about} />
				<NetworkMetrics elementRef={resources} />
				<SiteChecker />
				<NetworkNewsFeed />
				<EmailSecurity />
				<Contact elementRef={contact} />

				<Footer />
			</div>
		</div>
	);
}

export default App;
