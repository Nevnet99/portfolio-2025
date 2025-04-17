import clsx from "clsx";
import styles from "./typography.module.css";

export type TTypographyProperties = {
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "label";
  visual?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "label";
  children: React.ReactNode;
  className?: string;
  bold?: boolean;
  black?: boolean;
  font?: "caudex" | "inter";
} & React.HTMLAttributes<HTMLElement>;

export const Typography = ({
  as = "p",
  visual = "p",
  children,
  className,
  bold = false,
  black = false,
  font = "inter",
  ...props
}: TTypographyProperties) => {
  const Component = as;

  return (
    <Component
      className={clsx(
        styles.typography,
        className,
        styles[visual],
        bold && "bold",
        black && "black",
        font === "caudex" && "caudex"
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

Typography.displayName = "Typography";
