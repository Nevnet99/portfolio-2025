import { PageSection } from "../../atoms/PageSection";
import { Typography } from "../../atoms/Typography";
import { HeaderMarker } from "../../molecules/HeaderMarker";
import styles from "./contact.module.css";
import { motion } from "motion/react";

export const Contact = ({
	ref,
}: { ref: React.RefObject<HTMLDivElement | null> }) => {
	return (
		<PageSection id="contact" ref={ref}>
			<HeaderMarker title="05 / Contact" />

			<article className={styles.contact}>
				<Typography as="h3" visual="h2" black>
					Got a question? Interesting Project? Let's talk.
				</Typography>

				<motion.a
					className={styles.email}
					href="mailto:luke-brannagan@hotmail.com"
					whileHover={{ scale: 1.3 }}
				>
					Email me!
				</motion.a>
			</article>
		</PageSection>
	);
};
