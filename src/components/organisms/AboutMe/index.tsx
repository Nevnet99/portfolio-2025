import { PageSection } from "../../atoms/PageSection";
import { TextRevealAnimation } from "../../atoms/TextRevealAnimation";
import { Typography } from "../../atoms/Typography";
import { HeaderMarker } from "../../molecules/HeaderMarker";
import styles from "./about-me.module.css";

export const AboutMe = ({
	ref,
}: { ref: React.RefObject<HTMLDivElement | null> }) => {
	return (
		<PageSection id="about-me" ref={ref}>
			<HeaderMarker title="01 / About me" />

			<article className={styles.article}>
				<TextRevealAnimation>
					<Typography className={styles.title} as="h3" visual="h3">
						Hey, I’m Luke
					</Typography>
				</TextRevealAnimation>

				<TextRevealAnimation>
					<Typography className={styles.copy} as="p" visual="p">
						A Senior Frontend Developer with a strong focus on frontend
						engineering, design systems, and web accessibility. My journey into
						tech began with self-teaching and a coding bootcamp at Manchester
						Codes, and since then, I’ve grown my skills across agencies,
						startups, and product-focused teams.
					</Typography>
				</TextRevealAnimation>
				<TextRevealAnimation>
					<img src={"/LUKE_PROFILE.jpg"} alt="Luke smiling" />
				</TextRevealAnimation>
				<TextRevealAnimation>
					<Typography className={styles.copy} as="p" visual="p">
						I specialise in building scalable, high-performance web applications
						using modern frontend technologies like React, Next.js, and
						TypeScript. Whether it’s crafting robust UI components, leading
						design system initiatives, or improving accessibility standards, I’m
						passionate about creating inclusive, user-first experiences.
					</Typography>
				</TextRevealAnimation>
				<TextRevealAnimation>
					<Typography className={styles.title} as="h3" visual="h3">
						How I add value
					</Typography>
				</TextRevealAnimation>
				<TextRevealAnimation>
					<ul className={styles.list}>
						<li>
							<b>Frontend Expertise</b> – JavaScript, React, Next.js,
							TypeScript, Vite and all things CSS (CSS Modules, CSS-in-JS,
							SCSS).
						</li>
						<li>
							<b>Design Systems</b> – Built and maintained scalable UI libraries
							to streamline development and promote consistency.
						</li>
						<li>
							<b>Accessibility Advocacy</b> – Driving improvements in WCAG
							compliance across multiple platforms.
						</li>
						<li>
							<b>Cross-functional Collaboration</b> – Strong communicator who
							works closely with Design, Product, and Backend teams.
						</li>
						<li>
							<b>Tech Exploration &amp; Knowledge Sharing </b> – Always keeping
							up with the latest in frontend technologies, creating internal
							demos and prototypes to spark ideas, influence tech decisions, and
							help teams stay ahead of the curve.
						</li>
					</ul>
				</TextRevealAnimation>
			</article>
			<article className={styles.article2}>
				<TextRevealAnimation>
					<Typography className={styles.title} as="h3" visual="h3">
						Present work
					</Typography>
				</TextRevealAnimation>
				<TextRevealAnimation>
					<Typography className={styles.copy} as="p" visual="p">
						At Kroo, I'm part of the Web Platform team where I’ve been leading
						key initiatives to improve our frontend architecture and developer
						experience. My focus areas include:
					</Typography>
				</TextRevealAnimation>
				<TextRevealAnimation>
					<ul className={styles.list}>
						<li>
							Restructuring the frontend codebase for better scalability,
							performance, and maintainability.
						</li>
						<li>
							Driving the implementation of a design system, creating reusable,
							accessible components that align with our brand and speed up
							delivery.
						</li>
						<li>
							Maintaining and evolving our core web platforms, ensuring
							reliability, accessibility, and a seamless user experience.
						</li>
						<li>
							Collaborating across disciplines with Design, Product, and Backend
							to build cohesive, user-centered solutions.
						</li>
					</ul>
				</TextRevealAnimation>
				<TextRevealAnimation>
					<Typography className={styles.copy} as="p">
						I also regularly share ideas and prototypes with the team to explore
						new tooling, patterns, and approaches — helping shape the future of
						our frontend stack.
					</Typography>
				</TextRevealAnimation>
				<TextRevealAnimation>
					<Typography className={styles.title} as="h3" visual="h3">
						Outside of work
					</Typography>
				</TextRevealAnimation>
				<TextRevealAnimation>
					<Typography className={styles.copy} as="p" visual="p">
						Outside of work, I enjoy playing chess, swimming, and engaging with
						music—both as a listener and a musician.
					</Typography>
				</TextRevealAnimation>
				<TextRevealAnimation>
					<img src={"/daisy.webp"} alt="Daisy the dog" />
				</TextRevealAnimation>
				<TextRevealAnimation>
					<Typography className={styles.copy} as="p" visual="p">
						I also spend time gaming, with a particular interest in World of
						Warcraft, CS:GO, and other multiplayer titles.
					</Typography>
				</TextRevealAnimation>

				<TextRevealAnimation>
					<Typography className={styles.copy} as="p" visual="p">
						Beyond that, I value quality time with my partner and caring for our
						dog, Daisy, who’s very much at the heart of our home.
					</Typography>
				</TextRevealAnimation>
			</article>
		</PageSection>
	);
};
