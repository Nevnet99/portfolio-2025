import styles from "./page-section.module.css";

export type TPageSectionProperties = {
	children: React.ReactNode;
	id: string;
	ref: React.RefObject<HTMLDivElement | null>;
};

export const PageSection = ({ children, id, ref }: TPageSectionProperties) => {
	return (
		<section id={id} className={styles.pageSection} ref={ref}>
			{children}
		</section>
	);
};
