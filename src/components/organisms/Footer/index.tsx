import { Link } from "../../atoms/Link";
import { Typography } from "../../atoms/Typography";
import { links as navigationLinks } from "../Navigation";
import styles from "./footer.module.css";

const links = [
	{
		title: "Sitemap",
		links: navigationLinks,
	},
	{
		title: "Socials",
		links: [
			{
				title: "Linkedin",
				href: "https://www.linkedin.com/in/luke-brannagan/",
				target: "_blank",
			},
			{
				title: "Blog",
				href: "https://www.stckz.com",
				target: "_blank",
			},
		],
	},
	{
		title: "Cool Stuff",
		links: [
			{
				title: "CV",
				href: "/Luke-Brannagan-CV.pdf",
				download: true,
			},
			{
				title: "A11yManual",
				href: "https://www.a11ymanual.com",
				target: "_blank",
			},
		],
	},
];

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<ul className={styles.list}>
				{links.map((link) => (
					<li key={link.title}>
						<Typography as="h2">{link.title}</Typography>
						{link.links.map((nestedLink) => (
							<li key={nestedLink.title}>
								<Link
									href={nestedLink.href}
									download={
										"download" in nestedLink ? nestedLink.download : undefined
									}
									target={nestedLink?.target}
								>
									{nestedLink.title}
								</Link>
							</li>
						))}
					</li>
				))}
			</ul>
		</footer>
	);
};
