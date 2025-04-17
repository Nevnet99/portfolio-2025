import { HeaderMarker } from "../../molecules/HeaderMarker";
import { PageSection } from "../../atoms/PageSection";
import { Typography } from "../../atoms/Typography";
import styles from "./selected-work.module.css";
import { motion } from "motion/react";
const work = [
	{
		title: "DEPT",
		href: "/work/dept",
	},
	{
		title: "KROO",
		href: "/work/kroo",
	},
	{
		title: "PRIMER",
		href: "/work/primer",
	},
];
export const SelectedWork = ({
	ref,
}: { ref: React.RefObject<HTMLDivElement | null> }) => {
	return (
		<PageSection id="work" ref={ref}>
			<HeaderMarker title="03 / Selected work" />

			<ul className={styles.list}>
				{work.map((item) => (
					<motion.li
						whileHover={{ scale: 1.3 }}
						className={styles.item}
						key={item.title}
					>
						<a className={styles.button} href={item.href}>
							<Typography as="h3" visual="h2" black>
								{item.title}
							</Typography>
						</a>
					</motion.li>
				))}
			</ul>
		</PageSection>
	);
};
