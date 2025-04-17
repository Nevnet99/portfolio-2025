import { Typography } from "../../atoms/Typography";
import styles from "./header-marker.module.css";

export type THeaderMarkerProperties = {
	title: string;
};

export const HeaderMarker = ({ title }: THeaderMarkerProperties) => {
	return (
		<div className={styles.headerMarker}>
			<Typography className={styles.headerTitle} as="h2" visual="h2" bold>
				{title}
			</Typography>
		</div>
	);
};
