import clsx from "clsx";
import styles from "./link.module.css";

export type LinkProperties = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
	isNav?: boolean;
};

export const Link = ({
	className,
	children,
	isNav,
	...props
}: LinkProperties) => {
	return (
		<a className={clsx(styles.link, className, isNav && styles.nav)} {...props}>
			{children}
		</a>
	);
};
