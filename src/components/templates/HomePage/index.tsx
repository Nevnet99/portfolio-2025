import { useCallback, useEffect, useRef, useState } from "react";
import { Hero } from "../../organisms/Hero";
import { Navigation } from "../../organisms/Navigation";
import { AboutMe } from "../../organisms/AboutMe";
import { Principles } from "../../organisms/Principles";
import { SelectedWork } from "../../organisms/SelectedWork";
import { Testimonials } from "../../organisms/Testimonials";
import { Footer } from "../../organisms/Footer";
import { Contact } from "../../organisms/Contact";

export const HomePage = () => {
	const [activeSection, setActiveSection] = useState<string | null>(null);
	const heroRef = useRef<HTMLDivElement>(null);
	const aboutRef = useRef<HTMLDivElement>(null);
	const principlesRef = useRef<HTMLDivElement>(null);
	const selectedWorkRef = useRef<HTMLDivElement>(null);
	const testimonialsRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);
	const blogRef = useRef<HTMLDivElement>(null);

	const callBack = useCallback((entries: IntersectionObserverEntry[]) => {
		for (const entry of entries) {
			if (entry.isIntersecting) {
				setActiveSection(entry.target.id);
			}
		}
	}, []);

	useEffect(() => {
		const refs = [
			heroRef,
			aboutRef,
			principlesRef,
			selectedWorkRef,
			testimonialsRef,
			contactRef,
			blogRef,
		];
		const observer = new IntersectionObserver(callBack, {
			threshold: 0.2,
		});

		for (const ref of refs) {
			if (ref.current) {
				observer.observe(ref.current);
			}
		}

		return () => {
			observer.disconnect();
		};
	}, [callBack]);

	return (
		<>
			<Navigation activeSection={activeSection} />
			<main id="main">
				<Hero ref={heroRef} />
				<AboutMe ref={aboutRef} />
				<Principles ref={principlesRef} />
				<SelectedWork ref={selectedWorkRef} />
				<Testimonials ref={testimonialsRef} />
				<Contact ref={contactRef} />
			</main>
			<Footer />
		</>
	);
};
