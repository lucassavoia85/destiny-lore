import type { ReactNode } from "react";
import styles from "./grid.module.css"
type Props = {
  children: ReactNode;
};

const Grid = ({ children }: Props) => {
  return <section className={styles.grid}>{children}</section>;
};

export default Grid;
