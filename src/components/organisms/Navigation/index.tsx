import { useState } from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { Link } from "../../atoms/Link";
import styles from "./navigation.module.css";
import { AnimatePresence, motion } from "motion/react";
import { Dialog } from "react-aria-components";
import { OverlayArrow } from "react-aria-components";
import { Popover } from "react-aria-components";
import { Button } from "react-aria-components";
import { DialogTrigger } from "react-aria-components";

export const links = [
	{ title: "home", href: "#hero" },
	{
		title: "about",
		href: "#about-me",
	},
	{
		title: "principles",
		href: "#principles",
	},
	{
		title: "selected work",
		href: "#work",
	},
	{
		title: "testimonials",
		href: "#testimonials",
	},
	{
		title: "contact",
		href: "#contact",
	},
	{
		title: "blog",
		href: "https://www.stckz.com",
		target: "_blank",
	},
];

const MobileNavigation = ({
	setIsOpen,
	isOpen,
	activeSection,
	onClose,
}: {
	setIsOpen: (isOpen: boolean) => void;
	isOpen: boolean;
	onClose: () => void;
	activeSection: string | null;
}) => {
	const [isClosing, setIsClosing] = useState(false);

	return (
		<DialogTrigger>
			<Button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? "Close" : "Menu"}
			</Button>
			<Popover
				isOpen={isOpen}
				placement="top"
				onOpenChange={(open) => {
					if (!open) {
						setIsClosing(true);
						setTimeout(() => {
							setIsOpen(open);
							setIsClosing(false);
						}, 300);
					} else {
						setIsOpen(open);
					}
				}}
			>
				<OverlayArrow>
					<svg width={12} height={12} viewBox="0 0 12 12" aria-hidden="true">
						<path d="M0 0 L6 6 L12 0" />
					</svg>
				</OverlayArrow>
				<Dialog>
					<motion.ul
						className={styles.mobileList}
						variants={{
							open: { opacity: 1, scale: 1, y: 0 },
							closed: { opacity: 0, scale: 0, y: 500 },
						}}
						initial="closed"
						animate={isClosing ? "closed" : isOpen ? "open" : "closed"}
						transition={{
							duration: 0.3,
							ease: "circInOut",
						}}
					>
						{links.map((link, index) => {
							const isActive = link.href.replace("#", "") === activeSection;

							return (
								<motion.li
									className={styles.mobileListItem}
									key={link.href}
									variants={{
										open: { opacity: 1, scale: 1 },
										closed: { opacity: 0, scale: 0 },
									}}
									initial="closed"
									animate={isOpen ? "open" : "closed"}
									transition={{
										duration: 0.3,
										ease: "circInOut",
										delay: 0.3 + index * 0.1,
									}}
								>
									<Link href={link.href} onClick={onClose} isNav>
										{link.title}
									</Link>
									{isActive && (
										<motion.div
											className={styles.activeIndicator}
											layoutId="active-indicator"
										/>
									)}
								</motion.li>
							);
						})}
					</motion.ul>
				</Dialog>
			</Popover>
		</DialogTrigger>
	);
};

const navMotionProps = {
	initial: { opacity: 0, scale: 0.3 },
	animate: { opacity: 1, scale: 1 },
	transition: { duration: 0.8, ease: "circInOut" },
};

export const Navigation = ({
	activeSection,
}: { activeSection: string | null }) => {
	const [isOpen, setIsOpen] = useState(false);
	const { isMobile } = useWindowSize();

	return (
		<motion.nav
			className={styles.navigation}
			{...(!isMobile && navMotionProps)}
		>
			{!isMobile && (
				<ul className={styles.list}>
					{links.map((link, index) => {
						const isActive = link.href.replace("#", "") === activeSection;
						return (
							<motion.li
								className={styles.listItem}
								key={link.href}
								initial={{ opacity: 0, scale: 0.3 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{
									duration: 0.3,
									ease: "circInOut",
									delay: 0.8 + index * 0.1,
								}}
							>
								<Link href={link.href} isNav target={link.target}>
									{link.title}
								</Link>
								{isActive && (
									<motion.div
										className={styles.activeIndicator}
										layoutId="active-indicator"
									/>
								)}
							</motion.li>
						);
					})}
				</ul>
			)}

			<AnimatePresence mode="wait">
				{isMobile && (
					<div className={styles.mobileMenu}>
						<MobileNavigation
							setIsOpen={setIsOpen}
							isOpen={isOpen}
							onClose={() => setIsOpen(false)}
							activeSection={activeSection}
						/>
					</div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
};
