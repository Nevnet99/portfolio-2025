import styles from "./accordion.module.css";

type TAccordionProperties = {
	title: string;
	children: React.ReactNode;
};

export const Accordion = ({ title, children }: TAccordionProperties) => {
	return (
		<details className={styles.accordion}>
			<summary className={styles.accordionSummary}>{title}</summary>

			<div className={styles.accordionContent}>{children}</div>
		</details>
	);
};
