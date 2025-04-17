import { useParams } from "react-router-dom";
import { Typography } from "../../atoms/Typography";

import styles from "./workpage.module.css";
import clsx from "clsx";

const DeptCopy = () => {
	return (
		<>
			<Typography as="h2" visual="h2">
				My Journey at DEPT — From Junior to Senior and Beyond
			</Typography>
			<Typography as="p" visual="p">
				Let’s kick things off with a little bit about DEPT. DEPT is a global
				digital agency offering cutting-edge technical and creative services to
				a wide range of clients—from household names to ambitious startups. It’s
				fast-paced, dynamic, and packed with opportunities to learn and grow.
			</Typography>
			<Typography as="p" visual="p">
				I spent about 2.5 years at DEPT, and in that time, I got to work with an
				incredible variety of technologies and teams. It was the kind of place
				where every project felt like a fresh challenge—and I thrived in that
				environment.
			</Typography>
			<Typography as="h3" visual="h3">
				The Squad Setup
			</Typography>
			<Typography as="p" visual="p">
				Each project team (or "squad") was uniquely formed, which kept things
				interesting. Typically, a squad would consist of:
			</Typography>
			<ul>
				<li>1 Tech Lead</li>
				<li>2 Mid-level devs (or 1 Mid + 1 Junior)</li>
				<li>1 Designer</li>
				<li>1 Backend Developer</li>
				<li>1 Project Manager</li>
			</ul>
			<Typography as="p" visual="p">
				This flexible, collaborative structure gave me exposure to different
				ways of working and allowed me to learn from a wide range of people.
			</Typography>
			<Typography as="h3" visual="h3">
				Leveling Up
			</Typography>
			<Typography as="p" visual="p">
				When I joined DEPT, I started as a Junior Frontend Developer. But in
				just two and a half years, I climbed the ranks to Senior Developer. The
				key? A mix of passion, consistency, and a borderline-obsessive desire to
				improve. I spent time inside and outside of work learning,
				experimenting, and refining my craft—always aiming to deliver the best
				possible output for both our clients and the agency.
			</Typography>
			<Typography as="h3" visual="h3">
				Project Highlights
			</Typography>
			<Typography as="p" visual="p">
				Over the years, I contributed to a bunch of exciting projects. Some of
				the more notable names include:
			</Typography>
			<ul>
				<li>Harwoods</li>
				<li>St. James’s Place</li>
				<li>GEA</li>
				<li>Triumph Motorcycles</li>
				<li>CO-OP Live</li>
			</ul>
			<Typography as="p" visual="p">
				The work was fast-paced. Delivery deadlines were tight, and we were
				expected to ship clean, tested, scalable code that perfectly matched the
				designs. It was intense—but it taught me how to balance speed with
				quality.
			</Typography>
			<Typography as="h3" visual="h3">
				Tech Stack & Accessibility Advocacy
			</Typography>
			<Typography as="p" visual="p">
				My primary toolkit at DEPT included:
			</Typography>
			<ul>
				<li>React</li>
				<li>Typescript</li>
				<li>Next.js</li>
				<li>Storybook</li>
				<li>Styled Components</li>
			</ul>
			<Typography as="p" visual="p">
				It was also at DEPT that my passion for accessibility (a11y) truly took
				root. I noticed that many frontend devs had little understanding of how
				to build accessible interfaces—and I made it my mission to change that,
				starting with myself. To this day, I’m always learning and pushing for
				more inclusive digital experiences.
			</Typography>

			<Typography as="h3" visual="h3">
				A Deep Dive: Harwoods
			</Typography>
			<Typography as="p" visual="p">
				One of my favorite projects at DEPT was the build for Harwoods.
			</Typography>
			<Typography as="p" visual="p">
				This was a large-scale project built from the ground up. Although I
				wasn’t involved in the initial discovery sessions, I quickly became
				familiar with the architectural landscape of the site.
			</Typography>
			<Typography as="p" visual="p">
				Here’s a simplified view of how things were structured: CMS-managed
				content + layout → Salesforce → Proxy Gateway → Website
			</Typography>
			<Typography as="p" visual="p">
				The site was designed to be highly customizable through a CMS—most
				likely Contentful (if memory serves)—which allowed the client to manage
				key pages and content dynamically. These content layers were then
				enriched via Salesforce through a proxy gateway, ensuring the site
				displayed relevant and real-time data.
			</Typography>
			<Typography as="p" visual="p">
				DEPT was a defining chapter in my career. It shaped me not only as a
				developer but also as a team player, mentor, and advocate for
				accessibility. I'm proud of the work I did there and excited for what
				comes next.
			</Typography>
		</>
	);
};

const KrooCopy = () => {
	return (
		<>
			<Typography as="h2" visual="h2">
				My Experience at Kroo
			</Typography>

			<Typography as="p" visual="p">
				Working at Kroo has been a pivotal chapter in my journey as a frontend
				engineer — one that’s pushed me technically, challenged me to think at
				scale, and given me space to shape meaningful parts of a growing
				product.
			</Typography>

			<Typography as="h3" visual="h3">
				🚧 Reshaping the Frontend Architecture
			</Typography>

			<Typography as="p" visual="p">
				When I joined, one of my first major initiatives was helping restructure
				the frontend codebase. The goal was clear: improve scalability, reduce
				friction for developers, and create a more maintainable foundation as
				the platform matured.
			</Typography>

			<Typography as="p" visual="p">
				This meant diving into:
			</Typography>
			<ul>
				<li>Folder and module structure redesign</li>
				<li>Cleaner separation of concerns</li>
				<li>Simplifying state management patterns</li>
				<li>Improving build performance and DX</li>
			</ul>
			<Typography as="p" visual="p">
				The result? A more predictable and flexible architecture that’s easier
				to onboard into and scale with.
			</Typography>

			<Typography as="h3" visual="h3">
				🧱 Leading Design System Implementation
			</Typography>

			<Typography as="p" visual="p">
				Another core focus has been spearheading our design system — building
				out a robust, reusable set of UI components that align with our brand,
				follow accessibility standards, and significantly speed up delivery
				across teams.
			</Typography>

			<Typography as="p" visual="p">
				Highlights include:
			</Typography>
			<ul>
				<li>Component library built with React, TypeScript, and Storybook</li>
				<li>WCAG-compliant components by default</li>
				<li>
					Documentation to support self-serve usage by design and dev teams
				</li>
				<li>Cross-team collaboration to ensure adoption and consistency</li>
			</ul>
			<Typography as="p" visual="p">
				This initiative didn’t just improve UI consistency — it boosted
				developer velocity, reduced handoffs, and made product iteration
				smoother across the board.
			</Typography>

			<Typography as="h3" visual="h3">
				♿ Accessibility Isn’t Optional
			</Typography>

			<Typography as="p" visual="p">
				A big part of my work at Kroo has been advocating for and embedding
				accessibility best practices into everything we build. That means baking
				WCAG compliance into components, conducting audits, and raising
				awareness across the team.
			</Typography>

			<Typography as="p" visual="p">
				Accessibility isn't just a checklist item — it’s core to creating
				inclusive products.
			</Typography>

			<Typography as="h3" visual="h3">
				🤝 Collaboration Across the Board
			</Typography>

			<Typography as="p" visual="p">
				At Kroo, I've worked closely with product managers, backend engineers,
				and designers to turn complex problems into clean, performant solutions.
				It's a flat, collaborative culture that values ideas over titles —
				exactly the kind of environment I thrive in.
			</Typography>

			<Typography as="h3" visual="h3">
				🧪 Always Exploring
			</Typography>

			<Typography as="p" visual="p">
				Along the way, I’ve also introduced tools, created internal demos, and
				shared experiments with the team to explore better ways of working —
				from improved linting setups to performance optimizations and workflow
				tweaks.
			</Typography>

			<Typography as="h3" visual="h3">
				Summary
			</Typography>
			<Typography as="p" visual="p">
				My time at Kroo has been full of meaningful work, strong collaboration,
				and constant learning. It’s a place where I’ve been able to level up
				technically and make a real impact on the product and the people
				building it.
			</Typography>
		</>
	);
};

const PrimerCopy = () => {
	return (
		<>
			<Typography as="h2" visual="h2">
				My Experience at Primer
			</Typography>
			<Typography as="p" visual="p">
				Working at Primer was a defining part of my growth as a frontend
				engineer. As part of a team building developer-first payments
				infrastructure, I was constantly challenged to think at scale, build
				with precision, and prioritize performance and developer experience.
			</Typography>

			<Typography as="h3" visual="h3">
				🌐 Building for Developers, by Developers
			</Typography>

			<Typography as="p" visual="p">
				Primer’s platform is all about flexibility — giving developers the tools
				to orchestrate payments and commerce flows without the usual friction.
				That meant everything we built on the frontend had to be:
			</Typography>
			<ul>
				<li>Extensible</li>
				<li>Reliable</li>
				<li>Easy to integrate</li>
				<li>Beautifully documented</li>
				<li>And, of course, performant and accessible</li>
			</ul>
			<Typography as="h3" visual="h3">
				🛠 Key Impact & Projects
			</Typography>
			<Typography as="p" visual="p">
				During my time at Primer, I had the opportunity to contribute to
				projects that made a measurable impact on both our internal teams and
				end users:
			</Typography>
			<ul>
				<li>
					Scaled and enhanced the GOAT Design System, streamlining frontend
					workflows and cutting development time by ~2x.
				</li>
				<li>
					Rebuilt the Observability platform, optimizing performance and
					reducing dashboard operating costs by 3–4x.
				</li>
				<li>
					Collaborated cross-functionally with Product, Design, and Backend to
					deliver efficient, scalable solutions.
				</li>
			</ul>
			<Typography as="p" visual="p">
				These weren’t just engineering wins — they were strategic investments in
				speed, clarity, and long-term maintainability.
			</Typography>

			<Typography as="h3" visual="h3">
				🤝 Working in a Remote-First Culture
			</Typography>
			<Typography as="p" visual="p">
				Primer operates as a remote-first company, which pushed me to become
				even stronger at asynchronous communication, documentation, and
				collaboration. I learned to share context clearly, lead through written
				discussion, and contribute meaningfully across time zones and
				disciplines.
			</Typography>

			<Typography as="p" visual="p">
				The team culture was built around curiosity, ownership, and shared
				excellence — a place where every voice mattered and great ideas were met
				with momentum.
			</Typography>
			<Typography as="h3" visual="h3">
				Looking Back
			</Typography>
			<Typography as="p" visual="p">
				My time at Primer sharpened my skills in building performant, scalable,
				and developer-friendly web systems. I left with a deeper understanding
				of what it takes to build for other builders — and how great tooling and
				collaboration can unlock serious impact.
			</Typography>
		</>
	);
};

export const WorkPage = () => {
	const { work } = useParams();

	return (
		<main>
			<a href="/" className={styles.back}>
				<Typography as="p" visual="p">
					Back to home
				</Typography>
			</a>
			<header className={styles.header}>
				<Typography
					className={clsx(styles.title, work === "dept" && styles.uppercase)}
					as="h1"
					visual="h1"
					black
				>
					{work}
				</Typography>
				<Typography className={styles.subtitle} as="p" visual="p">
					Last updated: 16 Apr 2025
				</Typography>
			</header>
			<article className={styles.article}>
				{work === "dept" && <DeptCopy />}
				{work === "kroo" && <KrooCopy />}
				{work === "primer" && <PrimerCopy />}
			</article>
		</main>
	);
};
