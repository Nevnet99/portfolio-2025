import { Typography } from "../../atoms/Typography";
import styles from "./hero.module.css";
import { TextRevealAnimation } from "../../atoms/TextRevealAnimation";

const copy = {
	title: "Luke Brannagan",
	subTitle: "Senior Frontend Engineer",
};

export const Hero = ({
	ref,
}: { ref: React.RefObject<HTMLDivElement | null> }) => (
	<section id="hero" className={styles.hero} ref={ref}>
		<div className={styles.heroContent}>
			<TextRevealAnimation>
				<Typography className={styles.title} as="h1" visual="h1" black>
					{copy.title.split(" ")[0]}
				</Typography>
			</TextRevealAnimation>
			<TextRevealAnimation delay={0.2}>
				<Typography className={styles.title} as="h1" visual="h1" black>
					{copy.title.split(" ")[1]}
				</Typography>
			</TextRevealAnimation>
			<TextRevealAnimation delay={0.3}>
				<Typography className={styles.subTitle} as="p">
					{copy.subTitle}
				</Typography>
			</TextRevealAnimation>
		</div>
	</section>
);
