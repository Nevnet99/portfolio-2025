import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import styles from "./text-reveal-animation.module.css";

export const TextRevealAnimation = ({
	className,
	children,
	delay = 0,
}: {
	className?: string;
	children: React.ReactNode;
	delay?: number;
}) => {
	const shouldReduceMotion = useReducedMotion();
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true });

	return (
		<div ref={ref} className={`${styles.animationContainer} ${className}`}>
			<motion.span
				className={styles.text}
				variants={{
					hidden: { top: 40, opacity: 0 },
					visible: { top: 0, opacity: 1 },
				}}
				initial={"hidden"}
				animate={inView ? "visible" : "hidden"}
				transition={{
					delay,
					ease: shouldReduceMotion ? "linear" : "circInOut",
					duration: 0.8,
				}}
			>
				{children}
			</motion.span>
		</div>
	);
};
