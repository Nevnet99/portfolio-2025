import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import styles from "./split-text.module.css";

const showPlaceholders = (
	inView: boolean,
	placeholderAnimationComplete: boolean,
) => {
	if (placeholderAnimationComplete) {
		return "hidden";
	}

	if (inView) {
		return "visible";
	}
};

export const SplitText = ({ id, copy }: { id: string; copy: string }) => {
	const [placeholdersVisible, setPlaceholdersVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref);
	const split = copy.split(" ").filter((word) => word !== "");

	return (
		<>
			<span className="sr-only">{copy}</span>
			<motion.div aria-hidden="true" className={styles.container} ref={ref}>
				{split.map((word, index) => (
					<div
						key={`${id}-${
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							index
						}`}
						className={styles.word}
					>
						<motion.span
							className={styles.text}
							variants={{
								hidden: { opacity: 0 },
								visible: { opacity: 1 },
							}}
							initial={"hidden"}
							animate={placeholdersVisible ? "visible" : "hidden"}
							transition={{ delay: index * 0.05 }}
						>
							{word}
						</motion.span>
						<motion.div
							className={styles.skeleton}
							variants={{
								visible: { opacity: 1 },
								hidden: { opacity: 0 },
							}}
							onAnimationComplete={() => {
								if (index === split.length - 1) {
									setPlaceholdersVisible(true);
								}
							}}
							initial={"hidden"}
							animate={showPlaceholders(inView, placeholdersVisible)}
							transition={{ delay: index * 0.05 }}
						/>{" "}
					</div>
				))}
			</motion.div>
		</>
	);
};
