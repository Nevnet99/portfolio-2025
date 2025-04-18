import { Link } from "../../atoms/Link";
import { PageSection } from "../../atoms/PageSection";
import { SplitText } from "../../atoms/SplitText";
import { TextRevealAnimation } from "../../atoms/TextRevealAnimation";
import { Typography } from "../../atoms/Typography";
import { HeaderMarker } from "../../molecules/HeaderMarker";
import styles from "./principles.module.css";
const principles = [
	{
		title: "accessibility is not optional.",
		description: (
			<>
				<Typography as="p" visual="p">
					Every user deserves a great experience, no matter how they interact
					with the web.
				</Typography>

				<Typography as="p" visual="p">
					The web has evolved, and so have the expectations around
					accessibility. For most companies, it’s no longer just a “nice to
					have” — it’s a legal requirement.
				</Typography>

				<Typography as="p" visual="p">
					If you’re reading this and thinking, “That doesn’t apply to me,”
					you’re wrong.
				</Typography>

				<Typography as="p" visual="p">
					Check out the European Accessibility Act (EAA) and the UK Government’s
					accessibility guidelines — they’re essential reading for anyone
					building digital products today.
				</Typography>
			</>
		),
	},
	{
		title: "design systems are a foundation, not a feature.",
		description: (
			<>
				<Typography as="p" visual="p">
					Consistency, scalability, and developer happiness start here.
				</Typography>

				<Typography as="p" visual="p">
					A well-crafted design system isn’t just a library of components — it’s
					the backbone of a cohesive product experience. It brings alignment
					between design and engineering, speeds up development, and ensures
					accessibility and usability are built-in from the start.
				</Typography>

				<Typography as="p" visual="p">
					Design systems reduce decision fatigue, prevent visual drift, and
					create a shared language across teams. They enable designers and
					developers to work faster, more confidently, and with fewer
					regressions — especially as products scale.
				</Typography>

				<Typography as="p" visual="p">
					More than anything, they create space for teams to focus on what
					really matters: solving problems, improving UX, and building things
					users love — instead of reinventing buttons for the 15th time.
				</Typography>

				<Typography as="p" visual="p">
					If you're serious about quality and scalability, the design system
					isn’t an extra. It's the starting point.
				</Typography>

				<Typography as="p" visual="p">
					My suggestion would be to read{" "}
					<Link
						target="_blank"
						rel="noreferrer"
						href="https://www.amazon.co.uk/Design-That-Scales-Creating-Sustainable/dp/1959029215"
					>
						Design that scales
					</Link>
					.
				</Typography>
			</>
		),
	},
	{
		title: "performance matters",
		description: (
			<>
				<Typography as="p" visual="p">
					Fast, responsive interfaces aren’t just nice-to-haves — they’re
					expected.
				</Typography>

				<Typography as="p" visual="p">
					In today’s web, users don’t wait. They expect instant feedback,
					seamless transitions, and snappy load times. Performance directly
					impacts everything from user satisfaction to SEO rankings, conversion
					rates, and overall trust in your product.
				</Typography>

				<Typography as="p" visual="p">
					A slow app isn’t just frustrating — it can be exclusionary. For users
					on slower connections, older devices, or assistive tech, poor
					performance becomes a barrier.
				</Typography>

				<Typography as="p" visual="p">
					As frontend engineers, we have a responsibility to build experiences
					that feel lightweight, fast, and smooth — without sacrificing
					functionality or accessibility. That means understanding the impact of
					every dependency, optimizing rendering, lazy-loading smartly, and
					always keeping the user experience front and center.
				</Typography>

				<Typography as="p" visual="p">
					Good performance doesn’t just “happen.” It’s a deliberate, ongoing
					effort — and it’s worth it.
				</Typography>
			</>
		),
	},
	{
		title: "code is for humans first",
		description: (
			<>
				<Typography as="p" visual="p">
					Clean, readable, and maintainable code wins every time.
				</Typography>
			</>
		),
	},
	{
		title: "stay curious",
		description: (
			<>
				<Typography as="p" visual="p">
					The frontend space moves fast. I believe in constant learning,
					experimenting, and sharing what I find.
				</Typography>

				<Typography as="p" visual="p">
					Frameworks evolve, tools improve, and best practices shift — and
					that’s what keeps frontend exciting. I stay on top of the latest
					developments not just to follow trends, but to understand what’s worth
					adopting and why.
				</Typography>

				<Typography as="p" visual="p">
					Whether it’s testing a new bundler, trying out a fresh React pattern,
					or exploring emerging standards in accessibility, I love diving in and
					seeing how new ideas can improve developer experience or end-user
					performance.
				</Typography>

				<Typography as="p" visual="p">
					I regularly build demos, explore new tech in my own time, and share
					insights with my team to help spark better decisions and keep us ahead
					of the curve. Curiosity isn’t just a mindset — it’s part of my
					workflow.
				</Typography>

				<Typography as="p" visual="p">
					Because in this field, the moment you stop learning, you start falling
					behind.
				</Typography>
			</>
		),
	},
	{
		title: "collaboration beats heroics",
		description: (
			<>
				<Typography as="p" visual="p">
					Great products are built by teams, not lone coders.
				</Typography>

				<Typography as="p" visual="p">
					The best work doesn’t come from one person pulling all-nighters — it
					comes from cross-functional teams sharing ideas, challenging each
					other, and solving problems together. I’ve learned that strong
					collaboration leads to smarter decisions, faster delivery, and better
					outcomes for users.
				</Typography>

				<Typography as="p" visual="p">
					I thrive in environments where engineers work closely with designers,
					product managers, and backend devs — where communication is open,
					feedback flows both ways, and everyone feels ownership over the
					result.
				</Typography>

				<Typography as="p" visual="p">
					Being a team player means asking questions, offering help, and sharing
					knowledge — not gatekeeping it. It means leaving your ego at the door
					and focusing on what’s best for the product and the people using it.
				</Typography>

				<Typography as="p" visual="p">
					To me, a “10x developer” isn’t someone who works in isolation — it’s
					someone who communicates effectively, elevates the team, and helps
					everyone move faster together.
				</Typography>
			</>
		),
	},
	{
		title: "be opinionated, not inflexible",
		description: (
			<>
				<Typography as="p" visual="p">
					I bring strong ideas to the table — but I’m always open to better
					ones.
				</Typography>

				<Typography as="p" visual="p">
					Having opinions means I care deeply about how things are built. I
					think critically about architecture, tooling, and user experience, and
					I’m not afraid to speak up when I see a better way forward.
				</Typography>

				<Typography as="p" visual="p">
					But being opinionated doesn’t mean being rigid. I value healthy
					debate, and I know that the best outcomes often come from listening,
					challenging assumptions, and evolving ideas together.
				</Typography>

				<Typography as="p" visual="p">
					I’d rather be proven wrong and ship the right solution than hold onto
					an idea just because it was mine. For me, it's not about being right —
					it’s about getting it right.
				</Typography>
			</>
		),
	},
	{
		title: "flat > hierarchical",
		description: (
			<>
				<Typography as="p" visual="p">
					I work best in teams where ideas are valued over titles, and where
					everyone feels empowered to speak up, challenge thinking, and
					contribute.
				</Typography>

				<Typography as="p" visual="p">
					I believe the best ideas can come from anywhere — junior or senior,
					engineer or designer, PM or stakeholder. When teams operate with
					mutual respect and shared ownership, you get better products, faster
					learning, and a stronger culture.
				</Typography>

				<Typography as="p" visual="p">
					Titles should never get in the way of honest feedback, open dialogue,
					or creative problem-solving. I value environments where people are
					encouraged to ask questions, raise concerns, and suggest improvements
					— no matter their role.
				</Typography>
			</>
		),
	},
	{
		title: "documentation is part of the work.",
		description: (
			<>
				<Typography as="p" visual="p">
					Good documentation isn’t extra — it’s essential.
				</Typography>

				<Typography as="p" visual="p">
					Whether it’s a component in a design system, a utility function, or a
					high-level architecture decision, I believe documentation should live
					alongside the code. It empowers other developers to understand, use,
					and build on what’s already there — without guesswork or hand-holding.
				</Typography>

				<Typography as="p" visual="p">
					I write documentation with real people in mind: future teammates, new
					starters, and even my future self. Clear, thoughtful docs reduce
					friction, speed up onboarding, and help teams scale confidently.
				</Typography>

				<Typography as="p" visual="p">
					If it’s worth building, it’s worth documenting.
				</Typography>
			</>
		),
	},
];

export const Principles = ({
	ref,
}: { ref: React.RefObject<HTMLDivElement | null> }) => {
	return (
		<PageSection id="principles" ref={ref}>
			<HeaderMarker title="02 / Principles" />

			<Typography className={styles.principlesIntro} as="span" visual="p">
				<SplitText
					id="principles-intro"
					copy="These are the principles I live by as a Frontend Engineer. They shape
					how I work, collaborate, and build for the web. Don’t agree? We’re
					probably not a match — and that’s okay."
				/>
			</Typography>

			<ul className={styles.principlesList}>
				{principles.map((principle) => (
					<li className={styles.principle} key={principle.title}>
						<TextRevealAnimation>
							<Typography className={styles.principleTitle} as="h3" visual="h1">
								{principle.title}
							</Typography>
						</TextRevealAnimation>
						<TextRevealAnimation delay={0.5}>
							<div className={styles.principleDescription}>
								{principle.description}
							</div>
						</TextRevealAnimation>
					</li>
				))}
			</ul>
		</PageSection>
	);
};
