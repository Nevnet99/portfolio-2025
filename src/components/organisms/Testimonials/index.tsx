import { PageSection } from "../../atoms/PageSection";
import { Typography } from "../../atoms/Typography";
import { HeaderMarker } from "../../molecules/HeaderMarker";
import styles from "./testimonials.module.css";
const testimonials = [
	{
		name: "Jake Smith",
		title: "Head of Frontend - DEPT",
		quote: (
			<>
				<Typography as="p">
					I can't write enough good words about Luke. He joined Dept in a junior
					position, but with a thirst for knowledge, a can do attitude and great
					demeanor.
				</Typography>

				<Typography as="p">
					All three improved constantly during his time at Dept. Articulate,
					assertive and very immersed in web development, Luke's absorption of
					frameworks and speed to pick new things up astonishes me. His
					understanding of business requirements vs code approach improved a lot
					whilst working with the teams and I, and this has improved his
					decision making and the maturity of his code.
				</Typography>
				<Typography as="p">
					He's also a talented musician and fun to spend time with, not fair, is
					it? Some people get it all!
				</Typography>
			</>
		),
	},
	{
		name: "Andrew Graham-Yooll",
		title: "Tech Lead / Engineering Manager - Primer",
		quote: (
			<>
				<Typography as="p">
					As someone with a product oriented mindset and great skills as a
					Frontend Engineer, Luke is a guy that I would want supporting me and
					my team any day.
				</Typography>
				<Typography as="p">
					From the first day he was on my team, Luke brought new ideas and ways
					of working that pushed our product to new levels. He challenged the
					way we were building our Design System and proposed a quicker and more
					efficient way of meeting out KPIs.
				</Typography>
				<Typography as="p">
					Within a very short amount of time, he was contributing to the design,
					look and feel of the product he was developing, demonstrating
					ownership at every turn.
				</Typography>
				<Typography as="p">
					As a team lead, it's refreshing when someone comes in with an opinion
					and is able to communicate it effectively. And Luke certainly achieved
					that. Luke will be missed on my team. And any team that is able to
					work with him, should consider themselves fortunate.
				</Typography>
				<Typography as="p">
					A great all around guy, with the energy and sense of humor to drive
					your team in a positive direction. Personally, I can not wait to work
					with him again.
				</Typography>
			</>
		),
	},
	{
		name: "Rick Thompson",
		title: "Senior Frontend Engineer - DEPT",
		quote: (
			<>
				<Typography as="p">
					Luke is an amazing senior developer, who always strives to learn more
					for the better of the team and himself. Very good communication skills
					and very open to change.
				</Typography>
				<Typography as="p">
					He picks up new skills and is a dedicated developer to project,
					enforcing best practices and implementing changes when issues arise.
				</Typography>
				<Typography as="p">
					An asset to any team! Also great personality and very approachable :)
				</Typography>
			</>
		),
	},
];

export const Testimonials = ({
	ref,
}: { ref: React.RefObject<HTMLDivElement | null> }) => {
	return (
		<PageSection id="testimonials" ref={ref}>
			<HeaderMarker title="04 / Testimonials" />

			<ul className={styles.list}>
				{testimonials.map((testimonial) => (
					<li key={testimonial.name}>
						<article>
							<Typography as="p">{testimonial.quote}</Typography>
							<Typography as="p">{testimonial.name}</Typography>
							<Typography className={styles.title} as="p">
								{testimonial.title}
							</Typography>
						</article>
					</li>
				))}
			</ul>
		</PageSection>
	);
};
